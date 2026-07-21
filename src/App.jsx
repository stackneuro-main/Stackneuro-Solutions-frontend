import { Suspense, lazy, useEffect } from 'react';
import Navbar from './components/Navbar';
import AiInnovation from './sections/AiInnovation';
import ClientSuccessStories from './sections/ClientSuccessStories';
import Contact from './sections/Contact';
import FinalCta from './sections/FinalCta';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import CareersPage from './pages/CareersPage';
import OurWorkPage from './pages/OurWorkPage';
import ServicesPage from './pages/ServicesPage';
import HeroIntroductionExperience from './sections/HeroIntroductionExperience';
import FeaturedWork from './sections/FeaturedWork';
import Industries from './sections/Industries';
import OurProcess from './sections/OurProcess';
import Services from './sections/Services';
import TechnologyStack from './sections/TechnologyStack';
import WhyStackneuro from './sections/WhyStackneuro';

const AiAssistant = lazy(() => import('./components/AiAssistant'));
const WhatsAppWidget = lazy(() => import('./components/WhatsAppWidget'));

function HomePage() {
  return (
    <main>
      <HeroIntroductionExperience />
      <Services />
      <FeaturedWork />
      <WhyStackneuro />
      <TechnologyStack />
      <AiInnovation />
      <OurProcess />
      <Industries />
      <ClientSuccessStories />
      <FinalCta />
      <Contact />
    </main>
  );
}

function App() {
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
  const page = currentPath === '/about'
    ? <AboutPage />
    : currentPath.startsWith('/blog')
      ? <BlogPage slug={currentPath.replace('/blog/', '') === '/blog' ? null : currentPath.replace('/blog/', '')} />
      : currentPath === '/careers'
        ? <CareersPage />
        : currentPath === '/our-work'
          ? <OurWorkPage />
          : currentPath === '/services'
            ? <ServicesPage />
            : <HomePage />;

  useEffect(() => {
    const scrollToHashTarget = () => {
      const hash = window.location.hash;

      if (!hash) {
        return;
      }

      const target = document.getElementById(decodeURIComponent(hash.slice(1)));

      if (!target) {
        return;
      }

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      window.requestAnimationFrame(() => {
        target.scrollIntoView({
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
          block: 'start',
        });
      });
    };

    const timeoutId = window.setTimeout(scrollToHashTarget, 0);

    window.addEventListener('hashchange', scrollToHashTarget);

    return () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener('hashchange', scrollToHashTarget);
    };
  }, [currentPath]);

  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 720px)');
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const scrollableSelectors = [
      '.services-page-grid',
      '.services-page-expect__grid',
      '.work-page-projects',
      '.work-page-metrics',
      '.about-pillars',
      '.about-reasons',
      '.about-team',
      '.about-testimonials',
      '.about-achievements',
    ].join(',');
    const revealSelectors = [
      '.service-card',
      '.contact-card',
      '.contact-form',
      '.services-page-card',
      '.services-page-expect__card',
      '.work-page-card',
      '.work-page-metric',
      '.about-pillar',
      '.about-reason',
      '.about-team-card',
      '.about-testimonial',
      '.about-achievement',
      '.blog-page-card',
      '.blog-page-topics__grid article',
      '.blog-page-featured',
      '.careers-page-feature',
      '.careers-page-benefit',
      '.careers-page-love__item',
      '.careers-page-process__step',
    ].join(',');

    let revealObserver;
    let resizeFrame = 0;

    const applyMobileEnhancements = () => {
      const isMobile = mobileQuery.matches;
      const reduceMotion = reducedMotionQuery.matches;
      const scrollableElements = document.querySelectorAll(scrollableSelectors);
      const revealElements = document.querySelectorAll(revealSelectors);

      scrollableElements.forEach((element) => {
        const hasMultipleItems = element.children.length > 1;
        element.classList.toggle('mobile-card-scroll', isMobile && hasMultipleItems);
      });

      revealObserver?.disconnect();
      revealObserver = undefined;

      revealElements.forEach((element) => {
        element.classList.toggle('mobile-reveal', isMobile);
        element.classList.remove('is-mobile-visible');
      });

      if (!isMobile || reduceMotion || !('IntersectionObserver' in window)) {
        revealElements.forEach((element) => {
          element.classList.toggle('is-mobile-visible', isMobile);
        });
        return;
      }

      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-mobile-visible');
              revealObserver?.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: '0px 0px -12% 0px',
          threshold: 0.12,
        },
      );

      revealElements.forEach((element) => revealObserver.observe(element));
    };

    const scheduleMobileEnhancements = () => {
      window.cancelAnimationFrame(resizeFrame);
      resizeFrame = window.requestAnimationFrame(applyMobileEnhancements);
    };

    const timeoutId = window.setTimeout(applyMobileEnhancements, 80);
    mobileQuery.addEventListener('change', scheduleMobileEnhancements);
    reducedMotionQuery.addEventListener('change', scheduleMobileEnhancements);
    window.addEventListener('resize', scheduleMobileEnhancements);

    return () => {
      window.clearTimeout(timeoutId);
      window.cancelAnimationFrame(resizeFrame);
      revealObserver?.disconnect();
      mobileQuery.removeEventListener('change', scheduleMobileEnhancements);
      reducedMotionQuery.removeEventListener('change', scheduleMobileEnhancements);
      window.removeEventListener('resize', scheduleMobileEnhancements);
    };
  }, [currentPath]);

  return (
    <>
      <Navbar />
      {page}
      <Footer />
      <Suspense fallback={null}>
        <WhatsAppWidget />
      </Suspense>
      <Suspense fallback={null}>
        <AiAssistant />
      </Suspense>
    </>
  );
}

export default App;
