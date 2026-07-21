import technologyImage from '../assets/images/introduction-technology-workspace.jpg';
import businessImage from '../assets/images/services-business.jpg';
import marketingImage from '../assets/images/services-marketing.jpg';

export const servicesIntro = {
  eyebrow: 'What We Do',
  heading: "Solutions engineered for what's next.",
  description:
    'Stackneuro Solutions combines technology, business expertise, and digital strategy to help modern organizations build, transform, and grow with clarity.',
};

export const serviceExpectations = [
  {
    title: 'Tailored Solutions',
    description: 'Every solution is designed around your unique business goals and operational requirements.',
  },
  {
    title: 'Scalable Architecture',
    description: 'Solutions built to grow alongside your business and future expansion.',
  },
  {
    title: 'User-Centric Experience',
    description: 'Modern, intuitive and accessible digital experiences for every user.',
  },
  {
    title: 'Business Efficiency',
    description: 'Streamline operations and improve productivity through smart digital solutions.',
  },
  {
    title: 'Quality Assurance',
    description: 'Every project undergoes rigorous testing to ensure reliability, performance and stability.',
  },
  {
    title: 'Security & Reliability',
    description: 'Build secure, dependable solutions that protect your business and customer data.',
  },
  {
    title: 'Long-Term Partnership',
    description: 'We provide ongoing support, optimization and continuous improvement after project delivery.',
  },
  {
    title: 'Innovation-Driven Approach',
    description:
      'We combine creativity, strategy and modern engineering practices to solve complex business challenges.',
  },
];

export const serviceCategories = [
  {
    id: 'technology',
    number: '01',
    slug: 'technology',
    label: 'Technology Solutions',
    heading: "Technology that powers what's next.",
    description:
      'From robust platforms to intelligent systems, we design and engineer digital foundations built for scale, security, and long-term performance.',
    image: {
      src: technologyImage,
      alt: 'Modern software development workspace with cloud architecture dashboards and analytics screens',
    },
    accent: 'blue',
    mediaSide: 'left',
    services: [
      {
        name: 'Website Design & Development',
        description:
          'Premium websites and web platforms crafted to attract, convert, and support business growth.',
        benefits: ['Modern Web Presence', 'Lead Generation', 'Scalable Experience'],
      },
      {
        name: 'Mobile Application Development',
        description:
          'Intuitive mobile apps that help businesses engage customers and streamline digital operations.',
        benefits: ['Customer Engagement', 'Seamless Mobility', 'Reliable Experience'],
      },
      {
        name: 'AI Agent Development',
        description:
          'Intelligent AI agents that automate workflows, support teams, and improve customer interactions.',
        benefits: ['Workflow Automation', 'Customer Support', 'Team Productivity'],
      },
      {
        name: 'Custom Chatbot Development',
        description:
          'Branded chatbot experiences that answer questions, qualify leads, and reduce support workload.',
        benefits: ['Lead Qualification', 'Faster Responses', 'Support Efficiency'],
      },
      {
        name: 'Business Automation Solutions',
        description:
          'Smart automation systems that remove repetitive work and improve operational consistency.',
        benefits: ['Reduced Manual Work', 'Faster Operations', 'Process Consistency'],
      },
      {
        name: 'Business Workplace Setup',
        description:
          'Professional workplace setup that improves collaboration, communication, and daily execution.',
        benefits: ['Team Collaboration', 'Organized Operations', 'Workplace Readiness'],
      },
      {
        name: 'Scalable Software Development',
        description:
          'Custom software solutions built to support growth, reliability, and evolving business needs.',
        benefits: ['Scalable Growth', 'Long-Term Value', 'Reliable Operations'],
      },
      {
        name: 'Microservices Architecture & Development',
        description:
          'Modular software systems designed for flexibility, maintainability, and future expansion.',
        benefits: ['Flexible Systems', 'Maintainability', 'Future Expansion'],
      },
      {
        name: 'UI/UX Design',
        description:
          'User-focused digital experiences that make products easier to understand, use, and trust.',
        benefits: ['User Experience', 'Accessible Design', 'Conversion Focus'],
      },
      {
        name: 'Logo & Brand Identity Design',
        description:
          'Distinct visual identity systems that help businesses look professional and memorable.',
        benefits: ['Brand Recognition', 'Professional Identity', 'Consistent Messaging'],
      },
    ],
  },
  {
    id: 'business',
    number: '02',
    slug: 'business',
    label: 'Business Solutions',
    heading: 'Transforming ideas into business impact.',
    description:
      'We connect strategy, process, and technology to help organizations modernize operations and turn ambitious ideas into practical outcomes.',
    image: {
      src: businessImage,
      alt: 'Modern strategy room with enterprise analytics dashboards and digital transformation planning materials',
    },
    accent: 'violet',
    mediaSide: 'right',
    services: [
      {
        name: 'Startup Registration',
        description:
          'Guided startup registration support to help founders establish their business with confidence.',
        benefits: ['Founder Support', 'Business Readiness', 'Clear Documentation'],
      },
      {
        name: 'Company Registration',
        description:
          'Professional company registration assistance for a smooth and structured business setup.',
        benefits: ['Structured Setup', 'Compliance Support', 'Business Foundation'],
      },
      {
        name: 'GST Registration & Filing',
        description:
          'GST registration and filing support that helps businesses stay organized and compliant.',
        benefits: ['Tax Readiness', 'Compliance Support', 'Organized Filing'],
      },
      {
        name: 'Trademark Registration',
        description:
          'Trademark registration assistance to help protect your brand identity and business value.',
        benefits: ['Brand Protection', 'Identity Security', 'Legal Readiness'],
      },
      {
        name: 'Business Licenses & Compliance',
        description:
          'Business license and compliance guidance that supports smooth, responsible operations.',
        benefits: ['Operational Clarity', 'Compliance Guidance', 'Risk Reduction'],
      },
      {
        name: 'MSME/Udyam Registration',
        description:
          'MSME and Udyam registration support to help eligible businesses access formal recognition.',
        benefits: ['MSME Recognition', 'Business Credibility', 'Growth Support'],
      },
    ],
  },
  {
    id: 'digital-marketing',
    number: '03',
    slug: 'marketing',
    label: 'Marketing Solutions',
    heading: 'Turning attention into measurable growth.',
    description:
      'We pair creative strategy with performance data to help brands reach the right audience, convert demand, and keep improving.',
    image: {
      src: marketingImage,
      alt: 'Digital marketing workspace with campaign analytics dashboards, growth charts, and content planning screens',
    },
    accent: 'cyan',
    mediaSide: 'left',
    services: [
      {
        name: 'Search Engine Optimization (SEO)',
        description:
          'Search visibility strategies that improve discovery, relevance, and sustainable organic growth.',
        benefits: ['Organic Visibility', 'Better Discovery', 'Sustainable Growth'],
      },
      {
        name: 'Google Ads Management',
        description:
          'High-intent advertising campaigns focused on reach, conversions, and measurable return.',
        benefits: ['Qualified Traffic', 'Conversion Focus', 'Measurable ROI'],
      },
      {
        name: 'Meta Ads Management',
        description:
          'Targeted social advertising campaigns that help brands reach, engage, and convert audiences.',
        benefits: ['Audience Targeting', 'Brand Awareness', 'Lead Generation'],
      },
      {
        name: 'Performance Marketing',
        description:
          'Growth-focused campaigns optimized around acquisition, conversion, and efficient results.',
        benefits: ['Efficient Acquisition', 'Conversion Focus', 'Growth Clarity'],
      },
      {
        name: 'Email Marketing',
        description:
          'Personalized email campaigns that nurture relationships, drive action, and support retention.',
        benefits: ['Customer Nurturing', 'Retention Support', 'Campaign Performance'],
      },
      {
        name: 'Content Optimization',
        description:
          'Content improvements that make messaging clearer, more discoverable, and more persuasive.',
        benefits: ['Better Messaging', 'Search Support', 'Audience Clarity'],
      },
      {
        name: 'Business Analysis & Growth Strategy',
        description:
          'Strategic analysis that identifies growth opportunities and turns insights into action.',
        benefits: ['Growth Planning', 'Market Clarity', 'Strategic Direction'],
      },
      {
        name: 'Digital Marketing Consulting',
        description:
          'Expert marketing guidance that helps businesses plan, execute, and improve digital growth.',
        benefits: ['Expert Guidance', 'Campaign Clarity', 'Growth Confidence'],
      },
    ],
  },
];
