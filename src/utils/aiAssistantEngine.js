import { aiAssistantConfig, aiAssistantKnowledge } from '../data/aiAssistant';

const ANALYTICS_KEY = 'stackneuro_neuro_ai_analytics';

const normalize = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const tokenize = (value) => normalize(value).split(' ').filter((token) => token.length > 2);

const scoreSource = (source, query) => {
  const queryTokens = tokenize(query);
  const sourceText = normalize(`${source.title} ${source.keywords.join(' ')} ${source.content}`);

  return queryTokens.reduce((score, token) => {
    if (source.keywords.some((keyword) => normalize(keyword).includes(token))) {
      return score + 4;
    }

    return sourceText.includes(token) ? score + 1 : score;
  }, 0);
};

export const retrieveKnowledge = (query, limit = 3) =>
  aiAssistantKnowledge
    .map((source) => ({ ...source, score: scoreSource(source, query) }))
    .filter((source) => source.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);

export const getAnalytics = () => {
  try {
    return JSON.parse(window.localStorage.getItem(ANALYTICS_KEY)) ?? {};
  } catch {
    return {};
  }
};

export const trackAssistantEvent = (eventName, payload = {}) => {
  const analytics = getAnalytics();
  const nextAnalytics = {
    ...analytics,
    [eventName]: (analytics[eventName] ?? 0) + 1,
    recentEvents: [
      { eventName, payload, timestamp: new Date().toISOString() },
      ...(analytics.recentEvents ?? []),
    ].slice(0, 50),
  };

  window.localStorage.setItem(ANALYTICS_KEY, JSON.stringify(nextAnalytics));
};

const navigationMap = [
  { intent: ['service', 'services', 'offer'], route: aiAssistantConfig.routes.services, label: 'Opening Services...' },
  { intent: ['contact', 'consultation', 'call', 'email', 'phone'], route: aiAssistantConfig.routes.contact, label: 'Opening Contact...' },
  { intent: ['portfolio', 'work', 'project', 'case study'], route: aiAssistantConfig.routes.work, label: 'Opening Our Work...' },
  { intent: ['about', 'company', 'ceo', 'team'], route: aiAssistantConfig.routes.about, label: 'Opening About Stackneuro...' },
  { intent: ['career', 'culture', 'jobs'], route: aiAssistantConfig.routes.careers, label: 'Opening Careers...' },
  { intent: ['industry', 'industries'], route: aiAssistantConfig.routes.industries, label: 'Opening Industries...' },
];

export const detectNavigationIntent = (message) => {
  const text = normalize(message);
  const wantsNavigation = /\b(show|open|take|go|navigate|view|see)\b/.test(text);

  if (!wantsNavigation) {
    return null;
  }

  return navigationMap.find((item) => item.intent.some((keyword) => text.includes(keyword))) ?? null;
};

export const navigateToAssistantRoute = (route) => {
  trackAssistantEvent('ai_navigation', { route });

  if (route.startsWith('/#') && window.location.pathname.replace(/\/$/, '') === '') {
    window.location.hash = route.slice(1);
    return;
  }

  if (route.startsWith('/#') && window.location.pathname === '/') {
    window.location.hash = route.slice(1);
    return;
  }

  window.location.assign(route);
};

export const isLeadIntent = (message) => {
  const text = normalize(message);

  return [
    'start project',
    'build my project',
    'book consultation',
    'schedule consultation',
    'hire',
    'quote',
    'proposal',
    'pricing',
    'budget',
    'i need',
    'i want',
  ].some((phrase) => text.includes(phrase));
};

export const recommendServices = (message) => {
  const text = normalize(message);
  const recommendations = [];

  if (text.includes('ecommerce') || text.includes('commerce') || text.includes('online store')) {
    recommendations.push('Custom Software Development', 'UI/UX & Digital Product Design', 'Digital Marketing Services', 'Support & Continuous Improvement');
  }

  if (text.includes('ai') || text.includes('automation') || text.includes('assistant')) {
    recommendations.push('Artificial Intelligence & Automation', 'Business Process Automation', 'Custom Software Development');
  }

  if (text.includes('mobile') || text.includes('app')) {
    recommendations.push('Mobile App Solutions', 'UI/UX & Digital Product Design', 'Support & Continuous Improvement');
  }

  if (text.includes('website') || text.includes('web')) {
    recommendations.push('Web Development', 'UI/UX & Digital Product Design', 'Search Engine Optimization');
  }

  if (text.includes('enterprise') || text.includes('operations') || text.includes('workflow')) {
    recommendations.push('Enterprise Solutions', 'Business Process Automation', 'Digital Transformation');
  }

  if (text.includes('cloud') || text.includes('scale') || text.includes('infrastructure')) {
    recommendations.push('Cloud & Digital Infrastructure', 'Security & Reliability', 'Long-Term Partnership');
  }

  return [...new Set(recommendations)].slice(0, 5);
};

export const createAssistantResponse = (message) => {
  const navigation = detectNavigationIntent(message);
  const recommendations = recommendServices(message);
  const sources = retrieveKnowledge(message);

  if (navigation) {
    return {
      text: `${navigation.label}\n\nI can guide you there now. You can also ask me what to look for on that page.`,
      sources,
      route: navigation.route,
      suggestions: ['Tell me what services fit my project', 'Contact Team', 'Explore Portfolio'],
    };
  }

  if (recommendations.length) {
    return {
      text: `Based on what you described, these Stackneuro capabilities may be a strong fit:\n\n${recommendations.map((item) => `- ${item}`).join('\n')}\n\nWould you like to discuss your project with our team?`,
      sources: sources.length ? sources : retrieveKnowledge('services capabilities contact'),
      suggestions: ['Start a project conversation', 'View Services', 'Contact Team', 'Explore Portfolio'],
      leadRecommended: true,
    };
  }

  if (!sources.length) {
    return {
      text:
        "I couldn't find that information on our website.\n\nOur team would be happy to help. Would you like to contact us?",
      sources: [],
      suggestions: ['Contact Team', 'View Services', 'Tell me about Stackneuro'],
    };
  }

  const primary = sources[0];
  const secondary = sources.slice(1).map((source) => `- ${source.title}`).join('\n');

  return {
    text: `${primary.content}${secondary ? `\n\nRelated website areas:\n${secondary}` : ''}`,
    sources,
    suggestions: getSuggestionsForSource(primary.id),
  };
};

export const getSuggestionsForSource = (sourceId) => {
  const suggestionMap = {
    services: ['Build my project', 'AI Solutions', 'Contact Team', 'Explore Portfolio'],
    capabilities: ['View Services', 'Talk to an Expert', 'Industries We Serve'],
    contact: ['Book a Consultation', 'View Services', 'Our Portfolio'],
    portfolio: ['Start Your Project', 'View Services', 'Client Success Stories'],
    careers: ['Learn about culture', 'Meet the Team', 'Contact Us'],
    industries: ['Healthcare solutions', 'Finance solutions', 'Contact Team'],
    ceo: ['Open About Page', 'Meet the Team', 'Why Stackneuro'],
  };

  return suggestionMap[sourceId] ?? ['Learn More', 'View Services', 'Talk to an Expert', 'Explore Portfolio'];
};

export const getNextLeadField = (lead) =>
  aiAssistantConfig.leadFields.find((field) => !lead[field.id]);
