import heroIllustration from '../assets/illustrations/services-mega-menu.svg';
import storyImage from '../assets/images/introduction-technology-workspace.jpg';
import cultureImage from '../assets/illustrations/careers-culture-workspace.svg';
import workPhilosophyImage from '../assets/illustrations/process-strategy.svg';
import journeyFounded from '../assets/illustrations/process-discover.svg';
import journeyClient from '../assets/illustrations/client-avatar-01.svg';
import journeyExpansion from '../assets/illustrations/industry-enterprise.svg';
import journeyAi from '../assets/illustrations/tech-ai.svg';
import journeyTeam from '../assets/illustrations/careers-culture-workspace.svg';
import journeyFuture from '../assets/illustrations/ai-custom.svg';
import avatarOne from '../assets/illustrations/client-avatar-01.svg';
import avatarTwo from '../assets/illustrations/client-avatar-02.svg';
import avatarThree from '../assets/illustrations/client-avatar-03.svg';
import avatarFour from '../assets/illustrations/client-avatar-04.svg';
import avatarFive from '../assets/illustrations/client-avatar-05.svg';
import avatarSix from '../assets/illustrations/client-avatar-06.svg';
import avatarSeven from '../assets/illustrations/client-avatar-07.svg';
import avatarEight from '../assets/illustrations/client-avatar-08.svg';
import galleryOffice from '../assets/images/services-business.jpg';
import galleryMeeting from '../assets/images/featured-enterprise.jpg';
import galleryBrainstorm from '../assets/images/featured-ai-platform.jpg';
import galleryWorkshop from '../assets/images/featured-commerce.jpg';
import galleryLearning from '../assets/illustrations/tech-frontend.svg';
import galleryCelebration from '../assets/illustrations/industry-startups.svg';
import galleryClient from '../assets/illustrations/success-healthcare-dashboard.svg';

export const aboutHero = {
  breadcrumb: ['Home', 'About'],
  title: 'About Stackneuro Solutions',
  description:
    'Stackneuro Solutions is a corporate technology company building intelligent digital products, scalable software platforms and AI-powered solutions for modern businesses.',
  cta: "Let's Build Together",
  image: heroIllustration,
  alt: 'Premium digital transformation illustration with connected technology systems',
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
    icon: journeyFounded,
  },
  {
    title: 'First Client Success',
    description:
      'September 2025 - Within the first month of operations, Stackneuro successfully partnered with more than five businesses, delivering professional websites, software solutions, and digital services. This milestone established a strong foundation of trust and long-term client relationships.',
    icon: journeyClient,
  },
  {
    title: 'Business Expansion',
    description:
      'As client demand continued to grow, Stackneuro expanded its portfolio beyond software development by introducing AI-powered solutions, business automation, branding, digital marketing, and enterprise consulting services to support businesses with complete digital transformation.',
    icon: journeyExpansion,
  },
  {
    title: 'AI & Agentic Solutions',
    description:
      'Stackneuro began delivering intelligent AI Agents, custom chatbots, workflow automation systems, and business productivity solutions, enabling organizations to automate operations and improve customer engagement.',
    icon: journeyAi,
  },
  {
    title: 'Growing Client Network',
    description:
      'Today, Stackneuro proudly serves more than 50+ clients across multiple industries by delivering websites, software applications, AI solutions, branding, digital marketing, and business consulting services while building long-term partnerships based on trust and quality.',
    icon: journeyTeam,
  },
  {
    title: 'Future Vision',
    description:
      "Our vision is to become one of India's most trusted technology partners by building intelligent digital ecosystems that combine software engineering, artificial intelligence, automation, and business strategy to help organizations grow confidently in the digital era.",
    icon: journeyFuture,
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
    photo: avatarOne,
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
    photo: avatarTwo,
  },
  {
    name: 'Subrat Kumar Behera',
    designation: 'Business Development Head',
    experience: '8+ Years Experience',
    description:
      'Leads business growth, client relationships, strategic partnerships, and market expansion while helping organizations achieve successful digital transformation.',
    skills: [],
    photo: avatarThree,
  },
];

export const aboutGallery = [
  ['Office', galleryOffice, 'Premium Stackneuro workplace environment'],
  ['Meetings', galleryMeeting, 'Collaborative strategy meeting with digital dashboards'],
  ['Brainstorming', galleryBrainstorm, 'Innovation session with AI product planning visuals'],
  ['Hackathons', cultureImage, 'Team innovation and rapid prototyping workspace'],
  ['Learning Sessions', galleryLearning, 'Technology learning session with frontend architecture'],
  ['Team Celebrations', galleryCelebration, 'Team celebration and startup culture illustration'],
  ['Workshops', galleryWorkshop, 'Product workshop with digital commerce planning'],
  ['Client Meetings', galleryClient, 'Client success dashboard and collaboration preview'],
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
  image: workPhilosophyImage,
  alt: 'Technology strategy blueprint illustration',
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
    photo: avatarTwo,
  },
  {
    name: 'Manav Bhatia',
    company: 'Nova Retail',
    feedback:
      'The team understood our business priorities and delivered a scalable platform with excellent attention to detail.',
    rating: '5.0',
    photo: avatarThree,
  },
  {
    name: 'Elina Roy',
    company: 'FinEdge Systems',
    feedback:
      'Their communication, product thinking and technical execution made them feel like a true extension of our team.',
    rating: '5.0',
    photo: avatarFour,
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
