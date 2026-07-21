import featuredAiPlatformImage from '../assets/images/featured-ai-platform.jpg';
import featuredEnterpriseImage from '../assets/images/featured-enterprise.jpg';
import introductionTechnologyImage from '../assets/images/introduction-technology-workspace.jpg';
import servicesBusinessImage from '../assets/images/services-business.jpg';

const unsplash = (id, width = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;

const portrait = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=320&h=320&q=82`;

export const realImages = {
  heroTechnology: unsplash('photo-1497366754035-f200968a6e72', 1800),
  digitalTransformation: unsplash('photo-1551434678-e076c223a692'),
  teamWorkshop: unsplash('photo-1552664730-d307ca884978'),
  productDesign: unsplash('photo-1517245386807-bb43f82c33c4'),
  softwareDevelopment: unsplash('photo-1516321318423-f06f85e504b3'),
  qaTesting: unsplash('photo-1551288049-bebda4e38f71'),
  cloudOperations: unsplash('photo-1504384308090-c894fdcc538d'),
  businessGrowth: unsplash('photo-1460925895917-afdab827c52f'),
  enterpriseTeam: unsplash('photo-1556761175-b413da4baf72'),
  collaboration: featuredEnterpriseImage,
  workplace: unsplash('photo-1497366811353-6870744d04b2'),
  innovationLab: featuredAiPlatformImage,
  consulting: unsplash('photo-1542744173-8e7e53415bb0'),
  supportTeam: unsplash('photo-1521791136064-7986c2920216'),
  aiWorkspace: unsplash('photo-1677442136019-21780ecad995'),
  automation: unsplash('photo-1518770660439-4636190af475'),
  analytics: unsplash('photo-1551288049-bebda4e38f71'),
  computerVision: unsplash('photo-1535223289827-42f1e9919769'),
  generativeAi: unsplash('photo-1682687982501-1e58ab814714'),
  customAi: unsplash('photo-1504384308090-c894fdcc538d'),
  healthcare: unsplash('photo-1576091160550-2173dba999ef'),
  finance: unsplash('photo-1460925895917-afdab827c52f'),
  education: unsplash('photo-1523240795612-9a054b0db644'),
  retail: unsplash('photo-1556742049-0cfed4f6a45d'),
  manufacturing: unsplash('photo-1581091226825-a6a2a5aee158'),
  logistics: unsplash('photo-1566576721346-d4a3b4eaeb55'),
  realEstate: unsplash('photo-1560518883-ce09059eeffa'),
  technology: introductionTechnologyImage,
  startups: unsplash('photo-1553877522-43269d4ea984'),
  enterprise: unsplash('photo-1454165804606-c3d57bc86b40'),
  cybersecurity: unsplash('photo-1563986768609-322da13575f3'),
  cloudArticle: unsplash('photo-1451187580459-43490279c0fa'),
  designArticle: unsplash('photo-1545235617-9465d2a55698'),
  marketingArticle: unsplash('photo-1559136555-9303baea8ebd'),
  officeCulture: unsplash('photo-1521737604893-d14cc237f11d'),
  learningSession: unsplash('photo-1522202176988-66273c2fd55f'),
  celebration: servicesBusinessImage,
  clientMeeting: unsplash('photo-1600880292203-757bb62b4baf'),
};

export const realPortraits = {
  ceo: portrait('photo-1507003211169-0a1dd7228f2d'),
  monalisha: portrait('photo-1494790108377-be9c29b29330'),
  subrat: portrait('photo-1500648767791-00dcc994a43e'),
  avatar01: portrait('photo-1507003211169-0a1dd7228f2d'),
  avatar02: portrait('photo-1494790108377-be9c29b29330'),
  avatar03: portrait('photo-1500648767791-00dcc994a43e'),
  avatar04: portrait('photo-1438761681033-6461ffad8d80'),
  avatar05: portrait('photo-1506794778202-cad84cf45f1d'),
  avatar06: portrait('photo-1534528741775-53994a69daeb'),
  avatar07: portrait('photo-1519085360753-af0119f7cbe7'),
  avatar08: portrait('photo-1544005313-94ddf0286df2'),
};
