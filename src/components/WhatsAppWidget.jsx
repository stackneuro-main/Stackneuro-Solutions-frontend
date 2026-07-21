import { useEffect, useMemo, useState } from 'react';
import { whatsappWidgetConfig } from '../data/whatsappWidget';
import '../styles/whatsapp-widget.css';

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path d="M16.04 3.2A12.7 12.7 0 0 0 5.08 22.32L3.2 29.12l6.96-1.82A12.71 12.71 0 1 0 16.04 3.2Zm0 22.26a10.44 10.44 0 0 1-5.32-1.46l-.38-.22-4.12 1.08 1.1-4.02-.26-.42a10.46 10.46 0 1 1 8.98 5.04Zm5.74-7.84c-.31-.16-1.86-.92-2.15-1.02-.29-.11-.5-.16-.71.16-.21.31-.81 1.02-1 1.23-.18.21-.37.24-.68.08-.31-.16-1.33-.49-2.53-1.56-.93-.83-1.56-1.86-1.74-2.17-.18-.31-.02-.49.14-.64.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.11-.21.05-.39-.03-.55-.08-.16-.71-1.7-.97-2.34-.26-.61-.52-.53-.71-.54h-.61c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.62s1.13 3.04 1.29 3.25c.16.21 2.22 3.39 5.38 4.75.75.32 1.34.52 1.8.66.76.24 1.45.21 1.99.13.61-.09 1.86-.76 2.12-1.49.26-.73.26-1.36.18-1.49-.08-.13-.29-.21-.6-.37Z" />
    </svg>
  );
}

function trackWhatsAppEvent(eventName, details = {}) {
  if (typeof window === 'undefined') {
    return;
  }

  const payload = {
    event: eventName,
    details,
    timestamp: new Date().toISOString(),
  };

  window.dispatchEvent(new CustomEvent('stackneuro:whatsapp-widget', { detail: payload }));

  try {
    const key = whatsappWidgetConfig.analyticsKey;
    const current = JSON.parse(window.localStorage.getItem(key) || '{}');
    const next = {
      ...current,
      [eventName]: (current[eventName] || 0) + 1,
      lastEvent: payload,
    };

    window.localStorage.setItem(key, JSON.stringify(next));
  } catch {
    // Analytics should never interrupt the contact experience.
  }
}

function WhatsAppWidget() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [isBubbleVisible, setIsBubbleVisible] = useState(false);
  const [interactionVersion, setInteractionVersion] = useState(0);

  const href = useMemo(() => {
    const phone = whatsappWidgetConfig.phoneNumber.replace(/\D/g, '');
    const text = encodeURIComponent(whatsappWidgetConfig.defaultMessage);

    return `https://wa.me/${phone}?text=${text}`;
  }, []);

  const activeMessage = whatsappWidgetConfig.tooltipMessages[messageIndex % whatsappWidgetConfig.tooltipMessages.length];

  useEffect(() => {
    if (!whatsappWidgetConfig.enabled) {
      return undefined;
    }

    trackWhatsAppEvent('impression');
    return undefined;
  }, []);

  useEffect(() => {
    if (!whatsappWidgetConfig.enabled || whatsappWidgetConfig.tooltipMessages.length === 0) {
      return undefined;
    }

    let showTimer;
    let hideTimer;
    let cancelled = false;
    let currentIndex = messageIndex;

    const scheduleBubble = (delay) => {
      showTimer = window.setTimeout(() => {
        if (cancelled) {
          return;
        }

        const message = whatsappWidgetConfig.tooltipMessages[currentIndex % whatsappWidgetConfig.tooltipMessages.length];
        setMessageIndex(currentIndex);
        setIsBubbleVisible(true);
        trackWhatsAppEvent('bubble_display', { message });

        hideTimer = window.setTimeout(() => {
          if (cancelled) {
            return;
          }

          setIsBubbleVisible(false);
          currentIndex += 1;
          scheduleBubble(whatsappWidgetConfig.timing.repeatDelayMs);
        }, whatsappWidgetConfig.timing.visibleMs);
      }, delay);
    };

    scheduleBubble(whatsappWidgetConfig.timing.initialDelayMs);

    return () => {
      cancelled = true;
      window.clearTimeout(showTimer);
      window.clearTimeout(hideTimer);
    };
  }, [interactionVersion]);

  if (!whatsappWidgetConfig.enabled) {
    return null;
  }

  const dismissBubble = () => {
    setIsBubbleVisible(false);
    setInteractionVersion((version) => version + 1);
  };

  const handleClick = () => {
    dismissBubble();
    trackWhatsAppEvent('whatsapp_click');
    trackWhatsAppEvent('conversion');
  };

  return (
    <div
      className="whatsapp-widget"
      style={{
        '--whatsapp-widget-bottom': whatsappWidgetConfig.position.desktopBottom,
        '--whatsapp-widget-mobile-bottom': whatsappWidgetConfig.position.mobileBottom,
      }}
      aria-live="polite"
    >
      <div className={`whatsapp-widget__bubble${isBubbleVisible ? ' whatsapp-widget__bubble--visible' : ''}`}>
        {activeMessage}
      </div>

      <a
        className="whatsapp-widget__button"
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Stackneuro Solutions on WhatsApp"
        onClick={handleClick}
        onFocus={dismissBubble}
        onMouseEnter={dismissBubble}
      >
        <span className="whatsapp-widget__ripple" aria-hidden="true" />
        <span className="whatsapp-widget__glow" aria-hidden="true" />
        <span className="whatsapp-widget__icon">
          <WhatsAppIcon />
        </span>
      </a>
    </div>
  );
}

export default WhatsAppWidget;
