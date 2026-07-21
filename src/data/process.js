import discoverIllustration from '../assets/illustrations/process-discover.svg';
import strategyIllustration from '../assets/illustrations/process-strategy.svg';
import designIllustration from '../assets/illustrations/process-design.svg';
import developmentIllustration from '../assets/illustrations/process-development.svg';
import testingIllustration from '../assets/illustrations/process-testing.svg';
import deploymentIllustration from '../assets/illustrations/process-deployment.svg';
import growthIllustration from '../assets/illustrations/process-growth.svg';

export const processIntro = {
  eyebrow: 'Our Process',
  heading: 'From idea to launch. Built with clarity at every step.',
  description:
    'Every successful digital product begins with a clear strategy. Our process combines research, design, engineering and continuous collaboration to deliver scalable solutions with confidence.',
};

export const processSteps = [
  {
    id: 'discover',
    number: '01',
    title: 'Discover',
    description: 'Understand business goals, users, market opportunities and project requirements.',
    deliverables: ['Business Requirements', 'Research', 'Roadmap'],
    image: {
      src: discoverIllustration,
      alt: 'Business discovery and research illustration',
    },
    align: 'left',
  },
  {
    id: 'strategy',
    number: '02',
    title: 'Strategy',
    description: 'Define technical architecture, timelines and implementation approach.',
    deliverables: ['Architecture', 'Planning', 'Milestones'],
    image: {
      src: strategyIllustration,
      alt: 'Architecture strategy blueprint illustration',
    },
    align: 'right',
  },
  {
    id: 'design',
    number: '03',
    title: 'Design',
    description: 'Craft intuitive user experiences and modern interface systems.',
    deliverables: ['Wireframes', 'UI Design', 'Prototype'],
    image: {
      src: designIllustration,
      alt: 'UI and UX design workspace illustration',
    },
    align: 'left',
  },
  {
    id: 'development',
    number: '04',
    title: 'Development',
    description: 'Transform designs into scalable software using modern technologies.',
    deliverables: ['Frontend', 'Backend', 'API', 'Database'],
    image: {
      src: developmentIllustration,
      alt: 'Software development code editor illustration',
    },
    align: 'right',
  },
  {
    id: 'testing',
    number: '05',
    title: 'Testing',
    description: 'Ensure reliability, security and performance before release.',
    deliverables: ['QA', 'Performance', 'Security'],
    image: {
      src: testingIllustration,
      alt: 'Testing and quality assurance dashboard illustration',
    },
    align: 'left',
  },
  {
    id: 'deployment',
    number: '06',
    title: 'Deployment',
    description: 'Deploy to production with cloud infrastructure and continuous delivery.',
    deliverables: ['Cloud', 'CI/CD', 'Monitoring'],
    image: {
      src: deploymentIllustration,
      alt: 'Cloud deployment and CI/CD illustration',
    },
    align: 'right',
  },
  {
    id: 'growth-support',
    number: '07',
    title: 'Growth & Support',
    description: 'Provide ongoing improvements, maintenance and long-term partnership.',
    deliverables: ['Analytics', 'Optimization', 'Support'],
    image: {
      src: growthIllustration,
      alt: 'Growth analytics and long-term support illustration',
    },
    align: 'left',
  },
];
