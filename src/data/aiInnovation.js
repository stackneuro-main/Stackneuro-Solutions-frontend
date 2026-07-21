import { realImages } from './realImages';

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
      src: realImages.aiWorkspace,
      alt: 'Professional AI workspace with intelligent product planning',
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
      src: realImages.automation,
      alt: 'Technology automation lab representing intelligent workflow systems',
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
      src: realImages.analytics,
      alt: 'Business analytics dashboard reviewed by a professional team',
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
      src: realImages.computerVision,
      alt: 'Modern computer vision and immersive technology workspace',
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
      src: realImages.generativeAi,
      alt: 'Creative professional workspace representing generative AI innovation',
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
      src: realImages.customAi,
      alt: 'Modern technology operations workspace representing custom AI solutions',
    },
  },
];
