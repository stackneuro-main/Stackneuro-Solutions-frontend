import { realImages } from './realImages';

export const industriesIntro = {
  eyebrow: 'Industries We Serve',
  heading: 'Digital solutions built for every industry.',
  description:
    'Every industry faces unique challenges. Stackneuro combines technology, strategy and innovation to build solutions tailored to specific business domains.',
};

export const industries = [
  {
    id: 'healthcare',
    number: '01',
    name: 'Healthcare',
    description:
      'Helping healthcare organizations improve efficiency, patient experience and operational excellence through intelligent digital solutions.',
    solutions: ['Hospital Management', 'Patient Portal', 'Telemedicine', 'AI Diagnostics', 'Healthcare Analytics'],
    image: { src: realImages.healthcare, alt: 'Healthcare professionals using modern medical technology' },
    node: { x: 50, y: 4, angle: -90, length: 45 },
  },
  {
    id: 'finance',
    number: '02',
    name: 'Finance',
    description:
      'Creating secure financial platforms that improve decision-making, automate workflows and modernize customer experiences.',
    solutions: ['Digital Banking', 'FinTech Platform', 'Fraud Detection', 'Investment Dashboard', 'Financial Analytics'],
    image: { src: realImages.finance, alt: 'Modern finance analytics dashboard in a business workspace' },
    node: { x: 78, y: 14, angle: -48, length: 40 },
  },
  {
    id: 'education',
    number: '03',
    name: 'Education',
    description:
      'Building learning platforms that connect institutions, educators and students through accessible digital experiences.',
    solutions: ['Learning Management', 'Online Classroom', 'Student Portal', 'Assessment Platform', 'AI Learning Assistant'],
    image: { src: realImages.education, alt: 'Students collaborating in a modern digital learning environment' },
    node: { x: 95, y: 39, angle: -12, length: 38 },
  },
  {
    id: 'retail',
    number: '04',
    name: 'Retail & E-Commerce',
    description:
      'Designing commerce ecosystems that streamline operations, personalize buying journeys and support scalable growth.',
    solutions: ['Online Store', 'Inventory Management', 'Customer Analytics', 'Recommendation Engine', 'Payment Integration'],
    image: { src: realImages.retail, alt: 'Retail business team managing customer and commerce operations' },
    node: { x: 88, y: 70, angle: 34, length: 42 },
  },
  {
    id: 'manufacturing',
    number: '05',
    name: 'Manufacturing',
    description:
      'Modernizing production environments with automation, monitoring and analytics for smarter factory operations.',
    solutions: ['Production Dashboard', 'Supply Chain', 'IoT Monitoring', 'Factory Analytics', 'Automation'],
    image: { src: realImages.manufacturing, alt: 'Modern manufacturing environment with connected industrial operations' },
    node: { x: 64, y: 93, angle: 68, length: 44 },
  },
  {
    id: 'logistics',
    number: '06',
    name: 'Logistics',
    description:
      'Helping logistics teams manage fleets, warehouses and delivery networks with connected intelligent systems.',
    solutions: ['Fleet Management', 'Tracking System', 'Warehouse Platform', 'Route Optimization', 'AI Planning'],
    image: { src: realImages.logistics, alt: 'Logistics warehouse and delivery operations environment' },
    node: { x: 36, y: 93, angle: 112, length: 44 },
  },
  {
    id: 'real-estate',
    number: '07',
    name: 'Real Estate',
    description:
      'Creating property technology platforms that simplify management, lead generation and investment visibility.',
    solutions: ['Property Management', 'CRM', 'Virtual Tours', 'Investment Dashboard', 'Lead Platform'],
    image: { src: realImages.realEstate, alt: 'Modern property and real estate business environment' },
    node: { x: 12, y: 70, angle: 146, length: 42 },
  },
  {
    id: 'technology',
    number: '08',
    name: 'Technology',
    description:
      'Supporting technology companies with scalable platforms, cloud products and intelligent software ecosystems.',
    solutions: ['SaaS Platform', 'Enterprise Software', 'Developer Tools', 'Cloud Platform', 'AI Products'],
    image: { src: realImages.technology, alt: 'Technology team building modern software products' },
    node: { x: 5, y: 39, angle: 192, length: 38 },
  },
  {
    id: 'startups',
    number: '09',
    name: 'Startups',
    description:
      'Helping founders move from idea to market with practical strategy, MVP development and scalable architecture.',
    solutions: ['MVP Development', 'Product Strategy', 'Growth Platform', 'Investor Dashboard', 'Scalable Architecture'],
    image: { src: realImages.startups, alt: 'Startup founders collaborating in a modern workspace' },
    node: { x: 22, y: 14, angle: 228, length: 40 },
  },
  {
    id: 'enterprise',
    number: '10',
    name: 'Enterprise',
    description:
      'Building enterprise-grade platforms that unify workflows, data and automation across business-critical systems.',
    solutions: ['ERP', 'CRM', 'Workflow Automation', 'Data Platform', 'Enterprise AI'],
    image: { src: realImages.enterprise, alt: 'Enterprise business team reviewing strategic operations' },
    node: { x: 50, y: 96, angle: 90, length: 45 },
  },
];
