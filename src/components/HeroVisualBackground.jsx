import heroBackground from '../assets/images/hero-abstract-technology.png';

function HeroVisualBackground() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="hero__media">
        <img
          className="hero__image"
          src={heroBackground}
          alt=""
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </div>
      <div className="hero__soft-focus" />
      <div className="hero__overlay" />
      <div className="hero__glow hero__glow--blue" />
      <div className="hero__glow hero__glow--violet" />
    </div>
  );
}

export default HeroVisualBackground;
