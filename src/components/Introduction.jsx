import '../styles/introduction.css';
import useRevealOnView from '../hooks/useRevealOnView';
import introVisual from '../assets/images/introduction-technology-workspace.jpg';

function Introduction() {
  const [introRef, isVisible] = useRevealOnView();

  return (
    <section
      className={`introduction${isVisible ? ' introduction--visible' : ''}`}
      id="about"
      aria-labelledby="introduction-title"
      ref={introRef}
    >
      <div className="introduction__visual">
        <div className="introduction__image-frame">
          <img
            className="introduction__image"
            src={introVisual}
            alt="Modern software development workspace with cloud architecture dashboards and analytics screens"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>

      <div className="introduction__content">
        <p className="introduction__label">Who We Are</p>
        <h2 className="introduction__title" id="introduction-title">
          <span className="introduction__quiet-line">We don't just build software.</span>
          <span className="introduction__strong-line">
            We engineer what's <span className="heading-gradient">next.</span>
          </span>
        </h2>
        <p className="introduction__copy">
          Stackneuro Solutions creates intelligent, scalable, and high-performance digital
          products and technology solutions for modern businesses that need systems built
          with clarity, speed, and long-term resilience.
        </p>
        <a className="introduction__cta" href="/about">
          Discover Stackneuro <span aria-hidden="true">-&gt;</span>
        </a>
      </div>
    </section>
  );
}

export default Introduction;
