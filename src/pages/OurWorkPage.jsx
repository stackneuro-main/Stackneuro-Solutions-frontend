import { useEffect, useMemo, useState } from 'react';
import {
  flagshipCaseStudies,
  portfolioProjects,
  workMetrics,
  workPageHero,
} from '../data/ourWorkPage';
import '../styles/our-work-page.css';

function OurWorkPage() {
  const [selectedProjectName, setSelectedProjectName] = useState(null);

  const selectedProject = useMemo(
    () => portfolioProjects.find((project) => project.name === selectedProjectName),
    [selectedProjectName],
  );
  const selectedCaseStudy = useMemo(
    () => flagshipCaseStudies.find((caseStudy) => caseStudy.title === selectedProjectName),
    [selectedProjectName],
  );

  useEffect(() => {
    if (!selectedProjectName) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedProjectName(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProjectName]);

  const openCaseStudy = (projectName) => {
    setSelectedProjectName(projectName);
  };

  return (
    <main className="work-page" id="our-work">
      <section className="work-page-hero" id="hero" aria-labelledby="work-page-title">
        <p className="work-page__eyebrow">{workPageHero.eyebrow}</p>
        <h1 className="work-page-hero__title" id="work-page-title">
          Our <span className="heading-gradient">Work</span>
        </h1>
        <p className="work-page-hero__description">{workPageHero.description}</p>
        <a className="work-page__primary" href="/#contact">
          Start Your Project
        </a>
      </section>

      <section className="work-page-section" aria-labelledby="work-projects-title">
        <div className="work-page-section__intro">
          <p className="work-page__eyebrow">Our Projects</p>
          <h2 id="work-projects-title">
            Real Projects.<br />
            Real Solutions.<br />
            <span className="heading-gradient heading-gradient--dark">Real Business Impact.</span>
          </h2>
          <p>
            Explore a selection of real-world projects delivered by Stackneuro Solutions across education, NGOs,
            beauty & wellness, enterprise software, AI, and digital transformation. Every project reflects our
            commitment to solving real business challenges with thoughtful design and technology.
          </p>
        </div>

        <div className="work-page-projects">
          {portfolioProjects.map((project) => (
            <article
              className="work-page-card"
              key={project.name}
              onClick={() => openCaseStudy(project.name)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  openCaseStudy(project.name);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`View case study for ${project.name}`}
            >
              <figure className="work-page-card__media">
                <img
                  className={project.fit === 'contain' ? 'work-page-card__image--contain' : undefined}
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                  decoding="async"
                />
              </figure>
              <div className="work-page-card__content">
                <h3>{project.name}</h3>
                <span>{project.category}</span>
                <p>{project.description}</p>
                <strong>{project.outcome}</strong>
                <button
                  className="work-page-card__case-button"
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    openCaseStudy(project.name);
                  }}
                >
                  View Case Study <span aria-hidden="true">-&gt;</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="work-page-metrics" aria-label="Client success metrics">
        {workMetrics.map((metric) => (
          <div className="work-page-metric" key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </section>

      <section className="work-page-cta" aria-labelledby="work-page-cta-title">
        <p className="work-page__eyebrow">Build With Stackneuro</p>
        <h2 id="work-page-cta-title">Interested in building your <span className="heading-gradient">next project?</span></h2>
        <div className="work-page-cta__actions">
          <a className="work-page__primary" href="/#contact">Start Your Project</a>
          <a className="work-page__link" href="/#contact">Contact Us <span aria-hidden="true">-&gt;</span></a>
        </div>
      </section>

      {selectedProject && selectedCaseStudy ? (
        <div
          className="work-case-modal"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedProjectName(null);
            }
          }}
        >
          <article
            className="work-case-modal__panel"
            aria-labelledby="work-case-modal-title"
            aria-modal="true"
            role="dialog"
          >
            <button
              className="work-case-modal__close"
              type="button"
              aria-label="Close case study"
              onClick={() => setSelectedProjectName(null)}
            >
              ×
            </button>

            <header className="work-case-modal__header">
              <span className="work-case-modal__industry">{selectedCaseStudy.industry}</span>
              <h3 id="work-case-modal-title">{selectedProject.name}</h3>
              <p>{selectedProject.description}</p>
            </header>

            <div className="work-case-modal__body">
              <figure className="work-case-modal__media">
                <img
                  className={selectedProject.fit === 'contain' ? 'work-page-card__image--contain' : undefined}
                  src={selectedProject.image}
                  alt={selectedProject.alt}
                  loading="eager"
                  decoding="async"
                />
              </figure>

              <div className="work-case-modal__content">
                <div className="work-case-modal__block">
                  <p>Project Objective</p>
                  <strong>{selectedCaseStudy.objective}</strong>
                </div>
                <div className="work-case-modal__block">
                  <p>Business Challenge</p>
                  <strong>{selectedCaseStudy.challenge}</strong>
                </div>
                <div className="work-case-modal__block">
                  <p>Our Solution</p>
                  <strong>{selectedCaseStudy.solution}</strong>
                </div>
                <div className="work-case-modal__block">
                  <p>Business Results</p>
                  <ul>
                    {selectedCaseStudy.results.map((result) => (
                      <li key={result}>{result}</li>
                    ))}
                  </ul>
                </div>
                <div className="work-case-modal__block">
                  <p>Client Benefits</p>
                  <ul>
                    {selectedCaseStudy.benefits.map((benefit) => (
                      <li key={benefit}>{benefit}</li>
                    ))}
                  </ul>
                </div>
                <div className="work-case-modal__summary">
                  <p>Project Summary</p>
                  <blockquote>{selectedCaseStudy.outcome}</blockquote>
                </div>
                <a className="work-page__primary" href="/#contact">
                  Start Your Project with Stackneuro
                </a>
              </div>
            </div>
          </article>
        </div>
      ) : null}
    </main>
  );
}

export default OurWorkPage;
