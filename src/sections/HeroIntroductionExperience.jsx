import Hero from '../components/Hero';
import HeroVisualBackground from '../components/HeroVisualBackground';
import Introduction from '../components/Introduction';
import '../styles/experience.css';

function HeroIntroductionExperience() {
  return (
    <>
      <div className="hero-intro-experience">
        <div className="experience__background">
          <HeroVisualBackground />
          <div className="experience__release-wash" aria-hidden="true" />
        </div>

        <div className="experience__content-flow">
          <Hero />
          <Introduction />
          <div className="experience__pin-spacer" aria-hidden="true" />
        </div>
      </div>
      <div className="experience__handoff" aria-hidden="true" />
    </>
  );
}

export default HeroIntroductionExperience;
