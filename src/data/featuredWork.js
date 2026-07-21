import glowGraceImage from '../assets/images/featured-glow-grace.png';
import ollyBagunImage from '../assets/images/featured-ollybagun.png';
import visionAcademyImage from '../assets/images/featured-vision-academy.png';

export const featuredWorkIntro = {
  eyebrow: 'Featured Work',
  heading: 'Ideas transformed into digital experiences.',
  description:
    'Stackneuro Solutions combines strategy, design, and engineering to create digital products that solve real business problems and move organizations forward.',
};

export const featuredProjects = [
  {
    id: 'ollybagun',
    number: '01',
    name: 'OllyBagun',
    category: 'NGO Website',
    description:
      "Designed and developed a modern NGO website focused on social impact, community engagement, donation awareness, volunteer participation, and storytelling. The platform delivers an accessible and responsive experience while strengthening the organization's digital presence.",
    outcome: 'Business Highlights: NGO Website - Volunteer Management - Donation Awareness - Responsive Design',
    image: {
      src: ollyBagunImage,
      alt: 'OllyBagun NGO website homepage screenshot with social impact headline, donation CTA, and community engagement visuals',
      fit: 'contain',
    },
    href: '/#contact',
    align: 'left',
  },
  {
    id: 'glow-grace',
    number: '02',
    name: 'Glow & Grace',
    category: 'Beauty Salon Website',
    description:
      'Created a premium beauty salon website with elegant UI, online appointment booking, service showcases, customer testimonials, and a luxury brand experience designed to increase customer engagement and bookings.',
    outcome: 'Business Highlights: Beauty Salon - Appointment Booking - Premium UI/UX - Customer Experience',
    image: {
      src: glowGraceImage,
      alt: 'Glow & Grace beauty salon website homepage screenshot with booking CTA, luxury salon branding, and premium beauty visuals',
    },
    href: '/#contact',
    align: 'right',
  },
  {
    id: 'vision-academy',
    number: '03',
    name: 'Vision Academy',
    category: 'Educational Institute Website',
    description:
      'Developed a professional educational institute website showcasing courses, admissions, student resources, enquiry management, and institutional branding with a responsive and user-friendly experience.',
    outcome: 'Business Highlights: Educational Institute - Admissions - Course Management - Responsive Website',
    image: {
      src: visionAcademyImage,
      alt: 'Vision Academy educational institute website homepage screenshot with admissions CTA, course messaging, and campus preview',
    },
    href: '/#contact',
    align: 'left',
  },
];
