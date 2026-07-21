import { useEffect, useMemo, useRef, useState } from 'react';
import { aiAssistantConfig } from '../data/aiAssistant';
import {
  createAssistantResponse,
  getNextLeadField,
  isLeadIntent,
  navigateToAssistantRoute,
  trackAssistantEvent,
} from '../utils/aiAssistantEngine';
import '../styles/ai-assistant.css';

const HISTORY_KEY = 'stackneuro_neuro_ai_history';

const createMessage = (role, content, extras = {}) => ({
  id: `${role}-${Date.now()}-${Math.random().toString(16).slice(2)}`,
  role,
  content,
  timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  ...extras,
});

const loadHistory = () => {
  try {
    const history = JSON.parse(window.sessionStorage.getItem(HISTORY_KEY));
    return Array.isArray(history) && history.length ? history : null;
  } catch {
    return null;
  }
};

function AssistantIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path d="M16 4l9.5 5.5v11L16 26l-9.5-5.5v-11L16 4z" />
      <path d="M11 14.5h10M11 18h7" />
      <path d="M16 4v6M6.5 9.5l5 3M25.5 9.5l-5 3M16 26v-6" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M4 12l16-7-7 16-2-7-7-2z" />
    </svg>
  );
}

function renderMessageContent(content) {
  return content.split('\n').map((line, index) => {
    if (!line.trim()) {
      return <br key={`break-${index}`} />;
    }

    if (line.startsWith('- ')) {
      return <p className="neuro-ai-message__bullet" key={`${line}-${index}`}>{line.slice(2)}</p>;
    }

    return <p key={`${line}-${index}`}>{line}</p>;
  });
}

function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [lead, setLead] = useState({});
  const [isCollectingLead, setIsCollectingLead] = useState(false);
  const [tooltipIndex, setTooltipIndex] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const streamRef = useRef(null);

  const initialMessages = useMemo(
    () => loadHistory() ?? [createMessage('assistant', aiAssistantConfig.welcomeMessage)],
    [],
  );
  const [messages, setMessages] = useState(initialMessages);

  useEffect(() => {
    window.sessionStorage.setItem(HISTORY_KEY, JSON.stringify(messages.slice(-24)));
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      setShowTooltip(false);
      window.setTimeout(() => inputRef.current?.focus(), 260);
      trackAssistantEvent('conversation_opened');
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setTooltipIndex((current) => (current + 1) % aiAssistantConfig.tooltipMessages.length);
      setShowTooltip(true);
      window.setTimeout(() => setShowTooltip(false), 5200);
    }, 15000);

    return () => window.clearInterval(intervalId);
  }, [isOpen]);

  useEffect(
    () => () => {
      if (streamRef.current) {
        window.clearInterval(streamRef.current);
      }
    },
    [],
  );

  const streamAssistantMessage = (response, onComplete) => {
    setIsTyping(true);
    const fullText = response.text;
    const assistantMessage = createMessage('assistant', '', {
      suggestions: response.suggestions,
      sources: response.sources,
      route: response.route,
      isStreaming: true,
    });

    setMessages((current) => [...current, assistantMessage]);

    let cursor = 0;
    streamRef.current = window.setInterval(() => {
      cursor += 8;

      setMessages((current) =>
        current.map((message) =>
          message.id === assistantMessage.id
            ? { ...message, content: fullText.slice(0, cursor), isStreaming: cursor < fullText.length }
            : message,
        ),
      );

      if (cursor >= fullText.length) {
        window.clearInterval(streamRef.current);
        streamRef.current = null;
        setIsTyping(false);

        if (response.route) {
          window.setTimeout(() => navigateToAssistantRoute(response.route), 450);
        }

        onComplete?.();
      }
    }, 18);
  };

  const requestLeadField = (nextLead) => {
    const nextField = getNextLeadField(nextLead);

    if (!nextField) {
      setIsCollectingLead(false);
      trackAssistantEvent('lead_completed', { projectType: nextLead.projectType, timeline: nextLead.timeline });
      streamAssistantMessage({
        text:
          'Thank you.\n\nOur team will contact you shortly. You can also reach Stackneuro directly at info@stackneuro.com, 8480199506 or 9937567092.',
        suggestions: ['Contact Us', 'Explore Our Services', 'View Our Work'],
        sources: [],
      });
      return;
    }

    streamAssistantMessage({
      text: `Great. Please share your ${nextField.label}.`,
      suggestions: ['Skip for now', 'Contact Us'],
      sources: [],
    });
  };

  const handleUserMessage = (messageText) => {
    const trimmedMessage = messageText.trim();

    if (!trimmedMessage) {
      return;
    }

    setInputValue('');
    setShowTooltip(false);
    setMessages((current) => [...current, createMessage('user', trimmedMessage)]);
    trackAssistantEvent('question_asked', { question: trimmedMessage });

    if (isCollectingLead) {
      const nextField = getNextLeadField(lead);
      const nextLead = nextField ? { ...lead, [nextField.id]: trimmedMessage } : lead;
      setLead(nextLead);
      window.setTimeout(() => requestLeadField(nextLead), 220);
      return;
    }

    if (isLeadIntent(trimmedMessage)) {
      const response = createAssistantResponse(trimmedMessage);
      setIsCollectingLead(true);
      streamAssistantMessage(response, () => requestLeadField(lead));
      return;
    }

    streamAssistantMessage(createAssistantResponse(trimmedMessage));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleUserMessage(inputValue);
  };

  const handleSuggestion = (suggestion) => {
    trackAssistantEvent('suggestion_clicked', { suggestion });

    if (/contact|consultation/i.test(suggestion)) {
      handleUserMessage('Take me to Contact');
      return;
    }

    if (/portfolio|work/i.test(suggestion)) {
      handleUserMessage('Show your portfolio');
      return;
    }

    if (/services/i.test(suggestion)) {
      handleUserMessage('Show me Services');
      return;
    }

    handleUserMessage(suggestion);
  };

  const copyMessage = async (content) => {
    await navigator.clipboard?.writeText(content);
    trackAssistantEvent('message_copied');
  };

  return (
    <div className={`neuro-ai${isOpen ? ' neuro-ai--open' : ''}`} aria-live="polite">
      {!isOpen ? (
        <>
          <div className={`neuro-ai__tooltip${showTooltip ? ' neuro-ai__tooltip--visible' : ''}`} role="status">
            {aiAssistantConfig.tooltipMessages[tooltipIndex]}
          </div>
          <button
            className="neuro-ai__orb"
            type="button"
            aria-label="Open Neuro AI assistant"
            onClick={() => setIsOpen(true)}
          >
            <span className="neuro-ai__particles" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
            </span>
            <span className="neuro-ai__orb-core">
              <AssistantIcon />
            </span>
          </button>
        </>
      ) : (
        <section className="neuro-ai__panel" aria-label="Neuro AI website assistant">
          <header className="neuro-ai__header">
            <div className="neuro-ai__avatar">
              <AssistantIcon />
            </div>
            <div>
              <h2>{aiAssistantConfig.name}</h2>
              <p><span aria-hidden="true" />{aiAssistantConfig.status}</p>
              <small>{aiAssistantConfig.headerSubtitle}</small>
            </div>
            <div className="neuro-ai__controls">
              <button type="button" aria-label="Minimize Neuro AI" onClick={() => setIsOpen(false)}>
                -
              </button>
              <button type="button" aria-label="Close Neuro AI" onClick={() => setIsOpen(false)}>
                x
              </button>
            </div>
          </header>

          <div className="neuro-ai__messages" role="log" aria-label="Conversation history">
            {messages.map((message) => (
              <article className={`neuro-ai-message neuro-ai-message--${message.role}`} key={message.id}>
                <div className="neuro-ai-message__bubble">
                  <div className="neuro-ai-message__content">{renderMessageContent(message.content)}</div>

                  {message.sources?.length ? (
                    <div className="neuro-ai-message__sources">
                      {message.sources.map((source) => (
                        <a href={source.route} key={source.id}>
                          {source.title}
                        </a>
                      ))}
                    </div>
                  ) : null}

                  <footer>
                    <time>{message.timestamp}</time>
                    {message.role === 'assistant' && message.content ? (
                      <button type="button" onClick={() => copyMessage(message.content)}>
                        Copy
                      </button>
                    ) : null}
                  </footer>
                </div>

                {message.role === 'assistant' && message.suggestions?.length && !message.isStreaming ? (
                  <div className="neuro-ai__suggestions" aria-label="Suggested follow-up questions">
                    {message.suggestions.slice(0, 5).map((suggestion) => (
                      <button type="button" key={suggestion} onClick={() => handleSuggestion(suggestion)}>
                        {suggestion}
                      </button>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}

            {isTyping ? (
              <div className="neuro-ai__typing" aria-label="Neuro AI is typing">
                <span />
                <span />
                <span />
              </div>
            ) : null}
            <div ref={messagesEndRef} />
          </div>

          <div className="neuro-ai__quick" aria-label="Quick suggestions">
            {aiAssistantConfig.quickSuggestions.slice(0, 8).map((suggestion) => (
              <button type="button" key={suggestion} onClick={() => handleSuggestion(suggestion)}>
                {suggestion}
              </button>
            ))}
          </div>

          <form className="neuro-ai__form" onSubmit={handleSubmit}>
            <label htmlFor="neuro-ai-input">Ask Neuro AI</label>
            <textarea
              id="neuro-ai-input"
              ref={inputRef}
              rows="1"
              value={inputValue}
              placeholder="Ask about services, projects, AI, pricing, or contact..."
              onChange={(event) => setInputValue(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' && !event.shiftKey) {
                  event.preventDefault();
                  handleSubmit(event);
                }
              }}
            />
            <button type="submit" aria-label="Send message">
              <SendIcon />
            </button>
          </form>
        </section>
      )}
    </div>
  );
}

export default AiAssistant;
