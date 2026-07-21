import { useState } from 'react';
import {
  careersIntro,
  cultureOverview,
  cultureValues,
  employeeBenefits,
  openPositions,
} from '../data/careers';
import '../styles/careers.css';

const benefitIconPaths = {
  flexible: (
    <>
      <path d="M8 10h16M10 16h12M12 22h8" />
      <path d="M7 6h18a3 3 0 0 1 3 3v18H4V9a3 3 0 0 1 3-3z" />
    </>
  ),
  learning: (
    <>
      <path d="M6 9l10-4 10 4-10 4L6 9z" />
      <path d="M10 12v7c0 2 3 4 6 4s6-2 6-4v-7" />
    </>
  ),
  wellness: (
    <>
      <path d="M16 27s-9-5.6-9-13a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 7.4-9 13-9 13z" />
    </>
  ),
  stack: (
    <>
      <path d="M6 10l10-5 10 5-10 5-10-5z" />
      <path d="M6 16l10 5 10-5" />
      <path d="M6 22l10 5 10-5" />
    </>
  ),
  career: (
    <>
      <path d="M6 24V10a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14" />
      <path d="M11 7V5h10v2M4 24h24M11 16h10" />
    </>
  ),
  culture: (
    <>
      <circle cx="11" cy="11" r="4" />
      <circle cx="22" cy="13" r="3" />
      <path d="M4 26c1-5 4-8 7-8s6 3 7 8" />
      <path d="M18 25c.8-3.4 2.7-5.4 5-5.4 2 0 3.6 1.7 4.5 5.4" />
    </>
  ),
};

function BenefitIcon({ type }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      {benefitIconPaths[type]}
    </svg>
  );
}

function CareersCulture() {
  const [activeValueIndex, setActiveValueIndex] = useState(0);

  return (
    <section className="careers" id="careers" aria-labelledby="careers-title">
      <div className="careers__transition" aria-hidden="true" />

      <div className="careers__inner">
        <header className="careers__intro">
          <p className="careers__eyebrow">{careersIntro.eyebrow}</p>
          <h2 className="careers__title" id="careers-title">
            {careersIntro.heading.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p className="careers__description">{careersIntro.description}</p>
        </header>

        <div className="careers__split">
          <div className="careers__visual-wrap">
            <div className="careers__visual">
              <img src={cultureOverview.image.src} alt={cultureOverview.image.alt} loading="lazy" decoding="async" />
            </div>
          </div>

          <div className="careers__content">
            <section className="careers-culture" aria-labelledby="life-at-stackneuro-title">
              <p className="careers__section-label">{cultureOverview.label}</p>
              <h3 id="life-at-stackneuro-title">{cultureOverview.title}</h3>
              <p>{cultureOverview.description}</p>
            </section>

            <div className="careers-values" aria-label="Company values">
              {cultureValues.map((value, index) => {
                const isActive = activeValueIndex === index;
                const panelId = `careers-value-panel-${index}`;
                const buttonId = `careers-value-button-${index}`;

                return (
                  <article className={`careers-value${isActive ? ' careers-value--active' : ''}`} key={value.title}>
                    <button
                      aria-controls={panelId}
                      aria-expanded={isActive}
                      className="careers-value__button"
                      id={buttonId}
                      type="button"
                      onClick={() => setActiveValueIndex(index)}
                    >
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      {value.title}
                    </button>
                    <div
                      aria-labelledby={buttonId}
                      className="careers-value__panel"
                      id={panelId}
                      role="region"
                    >
                      <div>
                        <p>{value.description}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        <section className="careers-benefits" aria-labelledby="benefits-title">
          <div className="careers__section-heading">
            <p className="careers__section-label">Employee Benefits</p>
            <h3 id="benefits-title">Designed to support focused, healthy and ambitious work.</h3>
          </div>

          <div className="careers-benefits__grid">
            {employeeBenefits.map((benefit) => (
              <article className="careers-benefit" key={benefit.title}>
                <span className="careers-benefit__icon">
                  <BenefitIcon type={benefit.icon} />
                </span>
                <h4>{benefit.title}</h4>
                <p>{benefit.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="careers-openings" aria-labelledby="openings-title">
          <div className="careers__section-heading careers__section-heading--inline">
            <div>
              <p className="careers__section-label">Current Opportunities</p>
              <h3 id="openings-title">Open roles for builders, thinkers and problem solvers.</h3>
            </div>
            <span>Demo openings</span>
          </div>

          <div className="careers-openings__stack">
            {openPositions.map((position, index) => (
              <div
                className="career-opening__slot"
                key={position.title}
                style={{
                  '--opening-top': `${index * 18}px`,
                  '--opening-scale': `${1 + index * 0.006}`,
                  '--opening-z': index + 1,
                }}
              >
                <article className="career-opening">
                  <div>
                    <h4>{position.title}</h4>
                    <ul aria-label={`${position.title} technologies`}>
                      {position.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  </div>
                  <p>{position.mode}</p>
                  <a href="#careers" aria-label={`Apply for ${position.title}`}>
                    Apply
                    <span aria-hidden="true">-&gt;</span>
                  </a>
                </article>
              </div>
            ))}
          </div>
        </section>

        <div className="careers__cta">
          <p>Ready to grow with us?</p>
          <span>
            Explore exciting opportunities and become part of a team that's shaping the future of technology.
          </span>
          <div className="careers__cta-actions">
            <a className="careers__cta-primary" href="#careers">
              View Careers
            </a>
            <a className="careers__cta-link" href="#careers">
              Learn About Our Culture
              <span aria-hidden="true">-&gt;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareersCulture;
