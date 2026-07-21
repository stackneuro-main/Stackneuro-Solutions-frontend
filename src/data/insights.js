import { realImages } from './realImages';

export const insightsIntro = {
  eyebrow: 'Insights & Resources',
  heading: 'Ideas, trends and engineering insights from Stackneuro.',
  description:
    'Explore our latest perspectives on AI, software engineering, cloud technologies, product design and digital transformation.',
};

export const featuredInsight = {
  slug: 'how-intelligent-systems-reshape-products',
  category: 'Artificial Intelligence',
  date: 'June 18, 2026',
  readingTime: '8 min read',
  title: 'How intelligent systems are reshaping modern digital products.',
  excerpt:
    'AI is moving from isolated experiments into the core of product strategy. Here is how businesses can build intelligent systems that are useful, scalable and ready for real operations.',
  href: '/blog/how-intelligent-systems-reshape-products',
  author: 'Stackneuro Editorial Team',
  metaTitle: 'How Intelligent Systems Reshape Digital Products | Stackneuro Blog',
  metaDescription:
    'Explore how AI-powered systems are becoming core to modern product strategy, automation, customer experience and business operations.',
  topics: ['Artificial Intelligence', 'Business Automation', 'Digital Strategy'],
  content: [
    {
      heading: 'AI is becoming part of the product foundation',
      body: 'Modern organizations are moving beyond isolated AI experiments. Intelligent systems now support product strategy, customer engagement, workflow automation and faster decision-making across the business.',
    },
    {
      heading: 'Useful intelligence starts with business context',
      body: 'The strongest AI products begin with a clear understanding of users, operational friction and measurable outcomes. This helps teams build systems that solve practical problems instead of adding unnecessary complexity.',
    },
    {
      heading: 'A practical path toward intelligent products',
      body: 'Successful AI adoption usually starts with focused use cases, trusted data, thoughtful user experience and reliable feedback loops. This creates room for continuous improvement while keeping business value visible.',
    },
  ],
  image: {
    src: realImages.aiWorkspace,
    alt: 'Professional AI workspace for a featured technology article',
  },
};

export const latestInsights = [
  {
    slug: 'ai-assistants-business-problems',
    category: 'Artificial Intelligence',
    date: 'June 12, 2026',
    readingTime: '6 min read',
    title: 'Building AI assistants that solve real business problems.',
    excerpt: 'A practical look at designing conversational AI that improves workflows instead of adding complexity.',
    href: '/blog/ai-assistants-business-problems',
    author: 'Stackneuro AI Team',
    topics: ['Artificial Intelligence', 'Machine Learning', 'Business Automation'],
    content: [
      {
        heading: 'The best assistants are business-aware',
        body: 'AI assistants become valuable when they understand real customer questions, operational workflows and the decisions teams make every day.',
      },
      {
        heading: 'Design around outcomes',
        body: 'A useful assistant should reduce response time, improve consistency and help people complete tasks faster without hiding important context.',
      },
      {
        heading: 'Keep humans in the loop',
        body: 'Strong AI experiences create confidence by offering clear escalation paths, transparent answers and ongoing measurement.',
      },
    ],
    image: { src: realImages.aiWorkspace, alt: 'AI product workspace article cover' },
  },
  {
    slug: 'maintainable-software-decisions',
    category: 'Software Engineering',
    date: 'May 29, 2026',
    readingTime: '7 min read',
    title: 'Engineering decisions that keep software maintainable.',
    excerpt: 'How architecture, testing and clean delivery habits protect long-term product velocity.',
    href: '/blog/maintainable-software-decisions',
    author: 'Stackneuro Engineering',
    topics: ['Software Architecture', 'Enterprise Software', 'Software Development'],
    content: [
      {
        heading: 'Maintainability is a business advantage',
        body: 'Software that is easier to understand, extend and operate helps teams move faster while reducing long-term delivery risk.',
      },
      {
        heading: 'Architecture should support change',
        body: 'Good architecture creates clear boundaries, predictable workflows and room for products to evolve as business needs change.',
      },
      {
        heading: 'Quality compounds over time',
        body: 'Testing, documentation and thoughtful reviews protect product momentum and make future improvements easier to deliver.',
      },
    ],
    image: { src: realImages.softwareDevelopment, alt: 'Software engineering workspace article cover' },
  },
  {
    slug: 'cloud-platforms-scale-confidence',
    category: 'Cloud Computing',
    date: 'May 17, 2026',
    readingTime: '5 min read',
    title: 'Designing cloud platforms that scale with confidence.',
    excerpt: 'The infrastructure principles behind reliable, observable and business-ready cloud systems.',
    href: '/blog/cloud-platforms-scale-confidence',
    author: 'Stackneuro Cloud Team',
    topics: ['Cloud', 'Software Architecture', 'Enterprise Software'],
    content: [
      {
        heading: 'Scalability starts with clarity',
        body: 'Reliable cloud platforms are designed around expected growth, operational visibility and the ability to recover quickly when conditions change.',
      },
      {
        heading: 'Operational confidence matters',
        body: 'Monitoring, deployment discipline and clear ownership help businesses keep digital products stable and available.',
      },
      {
        heading: 'Build for future expansion',
        body: 'A strong cloud foundation makes it easier to add new products, users and integrations without disrupting the business.',
      },
    ],
    image: { src: realImages.cloudArticle, alt: 'Cloud infrastructure article cover' },
  },
  {
    slug: 'security-before-first-deployment',
    category: 'Cybersecurity',
    date: 'April 26, 2026',
    readingTime: '6 min read',
    title: 'Why security must be designed before the first deployment.',
    excerpt: 'Security-first planning helps teams reduce risk without slowing down product development.',
    href: '/blog/security-before-first-deployment',
    author: 'Stackneuro Security Team',
    topics: ['Cybersecurity', 'Enterprise Software', 'Digital Strategy'],
    content: [
      {
        heading: 'Security is a product requirement',
        body: 'Businesses earn trust when security is considered from planning through launch instead of treated as a final checklist.',
      },
      {
        heading: 'Risk reduction supports speed',
        body: 'Clear access controls, data protection and release practices help teams move quickly without creating avoidable exposure.',
      },
      {
        heading: 'Trust must be maintained',
        body: 'Security requires continuous improvement, monitoring and careful response as products and businesses grow.',
      },
    ],
    image: { src: realImages.cybersecurity, alt: 'Cybersecurity operations article cover' },
  },
  {
    slug: 'enterprise-interfaces-people-use',
    category: 'UI/UX Design',
    date: 'April 10, 2026',
    readingTime: '4 min read',
    title: 'Designing enterprise interfaces people actually want to use.',
    excerpt: 'Readable workflows, clear hierarchy and thoughtful interaction patterns make complex tools feel simple.',
    href: '/blog/enterprise-interfaces-people-use',
    author: 'Stackneuro Design Team',
    topics: ['UI/UX', 'Enterprise Software', 'Digital Strategy'],
    content: [
      {
        heading: 'Enterprise design should reduce friction',
        body: 'Complex business tools become more valuable when users can understand workflows quickly and complete tasks with confidence.',
      },
      {
        heading: 'Hierarchy creates clarity',
        body: 'Readable layouts, meaningful grouping and consistent interaction patterns help teams focus on decisions instead of fighting the interface.',
      },
      {
        heading: 'Design is part of performance',
        body: 'Better user experience improves adoption, training time and the overall return on digital product investment.',
      },
    ],
    image: { src: realImages.designArticle, alt: 'UI UX design workspace article cover' },
  },
  {
    slug: 'connected-business-processes',
    category: 'Digital Transformation',
    date: 'March 28, 2026',
    readingTime: '7 min read',
    title: 'Turning fragmented business processes into connected systems.',
    excerpt: 'Digital transformation works best when automation, data and strategy move together.',
    href: '/blog/connected-business-processes',
    author: 'Stackneuro Strategy Team',
    topics: ['Digital Strategy', 'Business Automation', 'Enterprise Software'],
    content: [
      {
        heading: 'Disconnected workflows slow teams down',
        body: 'When tools and processes do not work together, teams lose time, context and visibility across the business.',
      },
      {
        heading: 'Transformation is a connected effort',
        body: 'Automation, data visibility and thoughtful product design help organizations create smoother operations and better customer experiences.',
      },
      {
        heading: 'Start with measurable outcomes',
        body: 'The best transformation initiatives connect technology decisions to specific business improvements and long-term growth.',
      },
    ],
    image: { src: realImages.consulting, alt: 'Digital transformation strategy article cover' },
  },
];

export const blogCategories = [
  'All',
  'Artificial Intelligence',
  'Software Development',
  'Cloud Computing',
  'UI/UX',
  'Cybersecurity',
  'Digital Transformation',
  'Business Strategy',
  'Mobile Development',
  'Web Development',
];

export const popularTopics = [
  'Artificial Intelligence',
  'Machine Learning',
  'Cloud',
  'Business Automation',
  'Digital Strategy',
  'Enterprise Software',
  'React',
  'FastAPI',
  'Software Architecture',
];

export const blogNewsletter = {
  heading: 'Stay Updated',
  description:
    'Subscribe to receive the latest technology insights, software trends and business innovation updates from Stackneuro.',
};

export const allInsights = [featuredInsight, ...latestInsights];
