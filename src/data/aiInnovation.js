import aiAssistantsIllustration from '../assets/illustrations/ai-assistants.svg';
import aiAutomationIllustration from '../assets/illustrations/ai-automation.svg';
import aiAnalyticsIllustration from '../assets/illustrations/ai-analytics.svg';
import aiVisionIllustration from '../assets/illustrations/ai-vision.svg';
import aiGenerativeIllustration from '../assets/illustrations/ai-generative.svg';
import aiCustomIllustration from '../assets/illustrations/ai-custom.svg';

export const aiInnovationIntro = {
  eyebrow: 'AI & Innovation',
  heading: "Artificial Intelligence isn't the future. It's part of everything we build.",
  description:
    'Stackneuro Solutions combines AI, automation and intelligent engineering to build products that help businesses move faster, make smarter decisions and unlock new opportunities.',
};

export const aiCapabilities = [
  {
    id: 'ai-assistants',
    number: '01',
    shortTitle: 'AI Assistants',
    title: 'AI Assistants',
    description:
      'Build conversational assistants that improve customer engagement and automate support.',
    benefits: ['Faster customer support', '24/7 availability', 'Reduced operational costs'],
    image: {
      src: aiAssistantsIllustration,
      alt: 'AI assistant conversation interface illustration',
    },
  },
  {
    id: 'intelligent-automation',
    number: '02',
    shortTitle: 'Automation',
    title: 'Intelligent Automation',
    description: 'Automate repetitive business processes using AI-driven workflows.',
    benefits: ['Less manual effort', 'Consistent operations', 'Faster process cycles'],
    image: {
      src: aiAutomationIllustration,
      alt: 'AI-driven workflow automation illustration',
    },
  },
  {
    id: 'predictive-analytics',
    number: '03',
    shortTitle: 'Analytics',
    title: 'Predictive Analytics',
    description:
      'Transform business data into actionable insights using intelligent prediction models.',
    benefits: ['Smarter forecasting', 'Data-led decisions', 'Earlier risk detection'],
    image: {
      src: aiAnalyticsIllustration,
      alt: 'Predictive analytics dashboard illustration',
    },
  },
  {
    id: 'computer-vision',
    number: '04',
    shortTitle: 'Vision',
    title: 'Computer Vision',
    description:
      'Enable systems to understand and process images, documents and visual information.',
    benefits: ['Document intelligence', 'Visual recognition', 'Quality inspection workflows'],
    image: {
      src: aiVisionIllustration,
      alt: 'Computer vision recognition interface illustration',
    },
  },
  {
    id: 'generative-ai',
    number: '05',
    shortTitle: 'Generative AI',
    title: 'Generative AI',
    description:
      'Create intelligent content generation, summarization and recommendation systems.',
    benefits: ['Content acceleration', 'Knowledge summarization', 'Personalized recommendations'],
    image: {
      src: aiGenerativeIllustration,
      alt: 'Generative AI creative workspace illustration',
    },
  },
  {
    id: 'custom-ai-solutions',
    number: '06',
    shortTitle: 'Custom AI',
    title: 'Custom AI Solutions',
    description: 'Design AI products tailored to unique business challenges and opportunities.',
    benefits: ['Business-specific models', 'Integrated workflows', 'Scalable AI products'],
    image: {
      src: aiCustomIllustration,
      alt: 'Custom connected AI ecosystem illustration',
    },
  },
];
