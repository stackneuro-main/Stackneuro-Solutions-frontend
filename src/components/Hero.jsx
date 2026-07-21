import '../styles/hero.css';

function Hero() {
  return (
    <section className="hero" id="hero" aria-labelledby="hero-title">
      <div className="hero__content">
        <p className="hero__eyebrow">Technology &bull; Innovation &bull; Intelligence</p>
        <h1 className="hero__title" id="hero-title">
          Engineering the Future of{' '}
          <span className="hero__title-accent">Digital Innovation</span>
        </h1>
        <p className="hero__description">
          Stackneuro Solutions builds intelligent, scalable, and high-performance digital
          solutions for modern businesses ready to move with precision.
        </p>
        <div className="hero__actions" aria-label="Hero calls to action">
          <a className="button button--primary" href="#solutions">
            Explore Our Solutions
          </a>
          <a className="button button--secondary" href="#contact">
            Let's Talk
          </a>
        </div>
      </div>

      <div className="hero__scroll-cue" aria-hidden="true">
        <span />
      </div>
    </section>
  );
}

export default Hero;
