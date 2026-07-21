import { useState } from 'react';
import {
  careersBenefits,
  careersFaqs,
  careersHeroVisuals,
  careersJoinReasons,
  careersLife,
  careersLove,
  careersPageHero,
} from '../data/careersPage';
import '../styles/careers-page.css';

function CareersPageIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 4v16M4 12h16" />
      <path d="M7 7h10v10H7z" />
    </svg>
  );
}

function CareersPage() {
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <main className="careers-page">
      <section className="careers-page-hero" id="hero" aria-labelledby="careers-page-title">
        <div className="careers-page-hero__content">
          <p className="careers-page__eyebrow">{careersPageHero.eyebrow}</p>
          <h1 className="careers-page-hero__title" id="careers-page-title">
            Build Your Career With <span className="heading-gradient">Stackneuro</span>
          </h1>
          <p className="careers-page-hero__description">{careersPageHero.description}</p>
          <a className="careers-page__primary" href="#life-at-stackneuro">
            {careersPageHero.cta}
          </a>
        </div>

        <div className="careers-page-hero__visual" aria-hidden="true">
          {careersHeroVisuals.map((visual, index) => (
            <img src={visual} alt="" key={visual} loading={index === 0 ? 'eager' : 'lazy'} decoding="async" />
          ))}
        </div>
      </section>

      <section className="careers-page-section" aria-labelledby="why-join-title">
        <div className="careers-page-section__intro">
          <p className="careers-page__eyebrow">Why Join Stackneuro</p>
          <h2 id="why-join-title">Build meaningful technology with people who <span className="heading-gradient heading-gradient--dark">care about the craft.</span></h2>
        </div>

        <div className="careers-page-feature-grid">
          {careersJoinReasons.map((reason) => (
            <article className="careers-page-feature" key={reason.title}>
              <span className="careers-page-feature__icon">
                <CareersPageIcon />
              </span>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="careers-page-life" id="life-at-stackneuro" aria-labelledby="life-stackneuro-page-title">
        <figure className="careers-page-life__media">
          <img src={careersLife.image.src} alt={careersLife.image.alt} loading="lazy" decoding="async" />
        </figure>

        <div className="careers-page-life__content">
          <p className="careers-page__eyebrow">{careersLife.label}</p>
          <h2 id="life-stackneuro-page-title">Life at <span className="heading-gradient">Stackneuro</span></h2>
          <p>{careersLife.description}</p>
          <ul>
            {careersLife.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="careers-page-section" aria-labelledby="benefits-page-title">
        <div className="careers-page-section__intro">
          <p className="careers-page__eyebrow">Benefits</p>
          <h2 id="benefits-page-title">Support for focused work and <span className="heading-gradient heading-gradient--dark">long-term growth.</span></h2>
        </div>

        <div className="careers-page-benefits">
          {careersBenefits.map((benefit) => (
            <article className="careers-page-benefit" key={benefit.title}>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="careers-page-love" aria-labelledby="love-working-title">
        <div className="careers-page-section__intro">
          <p className="careers-page__eyebrow">Why You'll Love Working Here</p>
          <h2 id="love-working-title">A culture where quality work and <span className="heading-gradient">good people can grow together.</span></h2>
        </div>

        <div className="careers-page-love__grid">
          {careersLove.map((item) => (
            <article className="careers-page-love__item" key={item.title}>
              <img src={item.image} alt={item.alt} loading="lazy" decoding="async" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="careers-page-faq" aria-labelledby="careers-faq-title">
        <div className="careers-page-section__intro">
          <p className="careers-page__eyebrow">Frequently Asked Questions</p>
          <h2 id="careers-faq-title">Answers about our <span className="heading-gradient heading-gradient--dark">culture and future opportunities.</span></h2>
        </div>

        <div className="careers-page-faq__list">
          {careersFaqs.map((faq, index) => {
            const isActive = activeFaq === index;
            const buttonId = `careers-faq-button-${index}`;
            const panelId = `careers-faq-panel-${index}`;

            return (
              <article className={`careers-page-faq__item${isActive ? ' careers-page-faq__item--active' : ''}`} key={faq.question}>
                <button
                  aria-controls={panelId}
                  aria-expanded={isActive}
                  id={buttonId}
                  onClick={() => setActiveFaq(isActive ? -1 : index)}
                  type="button"
                >
                  {faq.question}
                  <span aria-hidden="true">+</span>
                </button>
                <div aria-labelledby={buttonId} id={panelId} role="region">
                  <p>{faq.answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="careers-page-cta" aria-labelledby="careers-page-cta-title">
        <p className="careers-page__eyebrow">Stay Connected</p>
        <h2 id="careers-page-cta-title">Interested in Working With <span className="heading-gradient">Stackneuro?</span></h2>
        <p>
          We are always excited to connect with talented professionals, collaborators and innovative thinkers. While we may not have active openings at the moment, we would love to hear from you and stay connected for future opportunities.
        </p>
        <div className="careers-page-cta__actions">
          <a className="careers-page__primary" href="/#contact">
            Contact Us
          </a>
          <a className="careers-page__link" href="/services">
            Explore Our Services
            <span aria-hidden="true">-&gt;</span>
          </a>
        </div>
      </section>
    </main>
  );
}

export default CareersPage;
