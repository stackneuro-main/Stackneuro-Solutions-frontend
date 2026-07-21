import storyImage from '../assets/images/introduction-technology-workspace.jpg';
import galleryOffice from '../assets/images/services-business.jpg';
import galleryMeeting from '../assets/images/featured-enterprise.jpg';
import galleryBrainstorm from '../assets/images/featured-ai-platform.jpg';
import galleryWorkshop from '../assets/images/featured-commerce.jpg';
import { realImages, realPortraits } from './realImages';

export const aboutHero = {
  breadcrumb: ['Home', 'About'],
  title: 'About Stackneuro Solutions',
  description:
    'Stackneuro Solutions is a corporate technology company building intelligent digital products, scalable software platforms and AI-powered solutions for modern businesses.',
  cta: "Let's Build Together",
  image: realImages.digitalTransformation,
  alt: 'Professional digital transformation team working in a modern office',
};

export const aboutStory = {
  image: storyImage,
  alt: 'Modern technology workspace with product dashboards and software planning screens',
  parts: [
    {
      title: 'The Beginning',
      description:
        'Stackneuro started with a simple belief: businesses deserve technology partners who understand both engineering precision and real business outcomes.',
    },
    {
      title: 'The Vision',
      description:
        'Our vision is to help organizations build future-ready digital systems that combine strategy, design, software engineering and intelligent automation.',
    },
    {
      title: 'Today',
      description:
        'Today, Stackneuro helps businesses modernize operations, launch digital products and create scalable platforms built for long-term growth.',
    },
  ],
};

export const aboutPillars = [
  {
    title: 'Mission',
    description:
      'To engineer intelligent, high-performance digital solutions that help businesses operate smarter, scale faster and serve customers better.',
  },
  {
    title: 'Vision',
    description:
      'To become a trusted technology partner for organizations building the next generation of digital products and AI-powered experiences.',
  },
  {
    title: 'Core Values',
    description:
      'Innovation, quality, transparency, security and long-term partnership guide every decision we make and every product we build.',
  },
];

export const aboutJourney = [
  {
    title: 'Company Founded',
    description:
      'August 4, 2025 - Stackneuro Solutions was officially founded with a vision to help businesses embrace digital transformation through innovative software, AI-powered solutions, and business automation. From the very beginning, our mission has been to build practical technology that creates measurable business value rather than simply delivering software.',
    icon: realImages.teamWorkshop,
  },
  {
    title: 'First Client Success',
    description:
      'September 2025 - Within the first month of operations, Stackneuro successfully partnered with more than five businesses, delivering professional websites, software solutions, and digital services. This milestone established a strong foundation of trust and long-term client relationships.',
    icon: realImages.supportTeam,
  },
  {
    title: 'Business Expansion',
    description:
      'As client demand continued to grow, Stackneuro expanded its portfolio beyond software development by introducing AI-powered solutions, business automation, branding, digital marketing, and enterprise consulting services to support businesses with complete digital transformation.',
    icon: realImages.enterpriseTeam,
  },
  {
    title: 'AI & Agentic Solutions',
    description:
      'Stackneuro began delivering intelligent AI Agents, custom chatbots, workflow automation systems, and business productivity solutions, enabling organizations to automate operations and improve customer engagement.',
    icon: realImages.aiWorkspace,
  },
  {
    title: 'Growing Client Network',
    description:
      'Today, Stackneuro proudly serves more than 50+ clients across multiple industries by delivering websites, software applications, AI solutions, branding, digital marketing, and business consulting services while building long-term partnerships based on trust and quality.',
    icon: realImages.officeCulture,
  },
  {
    title: 'Future Vision',
    description:
      "Our vision is to become one of India's most trusted technology partners by building intelligent digital ecosystems that combine software engineering, artificial intelligence, automation, and business strategy to help organizations grow confidently in the digital era.",
    icon: realImages.customAi,
  },
];

export const aboutReasons = [
  'Innovation First',
  'Experienced Team',
  'Modern Technologies',
  'Agile Development',
  'Client-Centric Approach',
  'Long-Term Partnership',
  '24/7 Support',
].map((title) => ({
  title,
  description:
    title === '24/7 Support'
      ? 'Continuous assistance and maintenance for products that need dependable operations.'
      : 'A disciplined approach that keeps every engagement clear, collaborative and focused on measurable business value.',
}));

export const aboutLeadership = {
  ceo: {
    name: 'Swadesh Kumar Behera',
    designation: 'CEO & Founder',
    experience: '5+ Years of Experience',
    bio: 'Swadesh Kumar Behera leads Stackneuro Solutions with a strong focus on software engineering, AI innovation, digital transformation and long-term client success. His leadership brings together practical technology strategy, business-focused execution and a commitment to building reliable solutions that help organizations grow with confidence.',
    vision:
      'Our goal is to build intelligent digital solutions that create real business value, strengthen client trust and prepare organizations for the future of technology.',
    photo: realPortraits.ceo,
    expertise: ['Software Engineering', 'AI Innovation', 'Digital Transformation'],
    linkedin: 'https://www.linkedin.com',
    email: 'info@stackneuro.com',
  },
};

export const aboutTeam = [
  {
    name: 'Monalisha Sahu',
    designation: 'Technology Lead & Planning',
    experience: '4+ Years Experience',
    description:
      'Leads technology planning, solution architecture, project coordination, and product strategy while ensuring successful execution of client projects.',
    skills: [],
    photo: realPortraits.monalisha,
  },
  {
    name: 'Subrat Kumar Behera',
    designation: 'Business Development Head',
    experience: '8+ Years Experience',
    description:
      'Leads business growth, client relationships, strategic partnerships, and market expansion while helping organizations achieve successful digital transformation.',
    skills: [],
    photo: realPortraits.subrat,
  },
];

export const aboutGallery = [
  ['Office', galleryOffice, 'Premium Stackneuro workplace environment'],
  ['Meetings', galleryMeeting, 'Collaborative strategy meeting with digital dashboards'],
  ['Brainstorming', galleryBrainstorm, 'Innovation session with AI product planning visuals'],
  ['Hackathons', realImages.innovationLab, 'Team innovation and rapid prototyping workspace'],
  ['Learning Sessions', realImages.learningSession, 'Technology learning session in a modern team environment'],
  ['Team Celebrations', realImages.celebration, 'Team celebration in a professional workplace culture'],
  ['Workshops', galleryWorkshop, 'Product workshop with digital commerce planning'],
  ['Client Meetings', realImages.clientMeeting, 'Client meeting with collaborative business planning'],
].map(([title, image, alt]) => ({ title, image, alt }));

export const aboutTechnologies = [
  'React',
  'Next.js',
  'Angular',
  'Vue',
  'Flutter',
  'FastAPI',
  'Node.js',
  'Python',
  'Java',
  'Spring Boot',
  'MySQL',
  'PostgreSQL',
  'MongoDB',
  'Docker',
  'Kubernetes',
  'AWS',
  'Azure',
  'Google Cloud',
  'TensorFlow',
  'OpenAI',
  'LangChain',
];

export const aboutAchievements = [
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 10, suffix: '+', label: 'Team Members' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
];

export const aboutPhilosophy = {
  image: realImages.consulting,
  alt: 'Technology strategy workshop with business planning discussion',
  points: [
    'Transparency',
    'Innovation',
    'Quality',
    'Communication',
    'Long-Term Relationships',
  ],
};

export const aboutTestimonials = [
  {
    name: 'Ritika Das',
    company: 'ABC Healthcare',
    feedback:
      'Stackneuro brought clarity, structure and strong engineering discipline to a complex digital transformation project.',
    rating: '5.0',
    photo: realPortraits.avatar02,
  },
  {
    name: 'Manav Bhatia',
    company: 'Nova Retail',
    feedback:
      'The team understood our business priorities and delivered a scalable platform with excellent attention to detail.',
    rating: '5.0',
    photo: realPortraits.avatar03,
  },
  {
    name: 'Elina Roy',
    company: 'FinEdge Systems',
    feedback:
      'Their communication, product thinking and technical execution made them feel like a true extension of our team.',
    rating: '5.0',
    photo: realPortraits.avatar04,
  },
];

export const aboutFaqs = [
  {
    question: 'What does Stackneuro Solutions do?',
    answer:
      'Stackneuro builds websites, software platforms, AI solutions, cloud systems and digital products for businesses across multiple industries.',
  },
  {
    question: 'Which services can we hire Stackneuro for?',
    answer:
      'Teams can partner with Stackneuro for web development, mobile apps, custom software, AI, cloud, UI/UX design, automation and digital marketing.',
  },
  {
    question: 'How does the development process work?',
    answer:
      'Projects move through discovery, strategy, design, development, testing, deployment and ongoing support with clear communication at every stage.',
  },
  {
    question: 'Which industries does Stackneuro serve?',
    answer:
      'Stackneuro supports healthcare, finance, education, retail, manufacturing, logistics, real estate, startups, technology companies and enterprises.',
  },
  {
    question: 'Is Stackneuro hiring?',
    answer:
      'Career opportunities are listed on the Careers page, including roles across engineering, design, AI, QA, marketing and operations.',
  },
  {
    question: 'Do you provide long-term support?',
    answer:
      'Yes. Stackneuro supports maintenance, performance improvements, feature growth, security updates and ongoing product optimization.',
  },
];
