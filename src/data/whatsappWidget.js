export const whatsappWidgetConfig = {
  enabled: true,
  phoneNumber: '918480199506',
  defaultMessage: `Hello Stackneuro Solutions,

I hope you're doing well.

I recently explored your website and was impressed by your expertise and the quality of solutions your team delivers. I'm interested in discussing my project requirements and exploring how Stackneuro Solutions can help transform my ideas into a scalable and impactful solution.

I would appreciate the opportunity to connect with your team, understand your approach, and discuss the best way to move forward.

Looking forward to your response.

Thank you.`,
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
