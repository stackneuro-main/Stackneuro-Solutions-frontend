import { realImages } from './realImages';

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
      src: realImages.teamWorkshop,
      alt: 'Business discovery workshop with a professional strategy team',
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
      src: realImages.consulting,
      alt: 'Business strategy presentation for product architecture planning',
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
      src: realImages.productDesign,
      alt: 'UI and UX design workshop with product planning materials',
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
      src: realImages.softwareDevelopment,
      alt: 'Software developer working on a modern digital product',
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
      src: realImages.qaTesting,
      alt: 'Quality assurance dashboard reviewed on a professional workstation',
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
      src: realImages.cloudOperations,
      alt: 'Cloud deployment operations workspace with technology monitors',
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
      src: realImages.businessGrowth,
      alt: 'Business growth analytics reviewed by a professional team',
    },
    align: 'left',
  },
];
