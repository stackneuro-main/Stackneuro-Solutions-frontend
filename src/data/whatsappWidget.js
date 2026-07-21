export const whatsappWidgetConfig = {
  enabled: true,
  phoneNumber: '918480199506',
  defaultMessage: `Hello Stackneuro Team,

I'm interested in your services and would like to discuss my project.

Please let me know how we can get started.`,
  tooltipMessages: [
    'Need help with your project?',
    "Let's discuss your idea.",
    'Talk to our experts.',
    'Get a free consultation.',
    'Have questions? Chat with us.',
  ],
  timing: {
    initialDelayMs: 8000,
    visibleMs: 4800,
    repeatDelayMs: 18000,
  },
  position: {
    side: 'right',
    desktopBottom: 'calc(clamp(18px, 2.4vw, 30px) + 86px)',
    mobileBottom: '90px',
    gapFromAiAssistant: '12px',
  },
  analyticsKey: 'stackneuro_whatsapp_widget_analytics',
};
