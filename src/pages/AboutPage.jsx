import { useEffect, useRef, useState } from 'react';
import {
  aboutAchievements,
  aboutFaqs,
  aboutGallery,
  aboutHero,
  aboutJourney,
  aboutLeadership,
  aboutPhilosophy,
  aboutPillars,
  aboutReasons,
  aboutStory,
  aboutTeam,
  aboutTechnologies,
  aboutTestimonials,
} from '../data/aboutPage';
import '../styles/about-page.css';

function AboutIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 3l7.5 4.2v9.6L12 21l-7.5-4.2V7.2L12 3z" />
      <path d="M12 8v8M8 12h8" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M6.8 9.4v9.1H3.9V9.4h2.9zM5.3 5.2a1.7 1.7 0 110 3.4 1.7 1.7 0 010-3.4zM10 9.4h2.8v1.2a3.2 3.2 0 012.8-1.5c2.9 0 4.5 1.8 4.5 5.1v4.3h-2.9v-4c0-1.9-.7-2.8-2.1-2.8-1.5 0-2.2 1-2.2 2.8v4H10V9.4z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M4.5 7.5h15v10h-15z" />
      <path d="M5 8l7 5 7-5" />
    </svg>
  );
}

function AnimatedMetric({ metric }) {
  const ref = useRef(null);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      setDisplayValue(metric.value);
      return undefined;
    }

    let frameId = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        const start = performance.now();
        const duration = 1100;

        const animate = (time) => {
          const progress = Math.min((time - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplayValue(Math.round(metric.value * eased));

          if (progress < 1) {
            frameId = requestAnimationFrame(animate);
          }
        };

        frameId = requestAnimationFrame(animate);
        observer.disconnect();
      },
      { threshold: 0.45 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameId);
    };
  }, [metric.value]);

  return (
    <article className="about-achievement" ref={ref}>
      <strong>{displayValue}{metric.suffix}</strong>
      <span>{metric.label}</span>
    </article>
  );
}

function AboutPage() {
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <main className="about-page">
      <section className="about-hero" id="hero" aria-labelledby="about-page-title">
        <div className="about-hero__content">
          <p className="about-page__eyebrow">About Us</p>
          <h1 className="about-hero__title" id="about-page-title">
            About <span className="heading-gradient">Stackneuro Solutions</span>
          </h1>
          <p className="about-hero__description">{aboutHero.description}</p>
          <a className="about-page__primary" href="/#contact">
            {aboutHero.cta}
          </a>
        </div>

        <figure className="about-hero__visual">
          <img src={aboutHero.image} alt={aboutHero.alt} loading="eager" decoding="async" />
        </figure>
      </section>

      <section className="about-story" aria-labelledby="about-story-title">
        <figure className="about-story__media">
          <img src={aboutStory.image} alt={aboutStory.alt} loading="lazy" decoding="async" />
        </figure>
        <div className="about-story__content">
          <p className="about-page__eyebrow">Our Story</p>
          <h2 id="about-story-title">A company built around <span className="heading-gradient heading-gradient--dark">thoughtful technology</span> and dependable execution.</h2>
          <div className="about-story__parts">
            {aboutStory.parts.map((part) => (
              <article key={part.title}>
                <h3>{part.title}</h3>
                <p>{part.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section about-section--dark" aria-labelledby="about-pillars-title">
        <div className="about-section__intro">
          <p className="about-page__eyebrow">Mission - Vision - Core Values</p>
          <h2 id="about-pillars-title">The principles behind every <span className="heading-gradient">Stackneuro engagement.</span></h2>
        </div>
        <div className="about-pillars">
          {aboutPillars.map((pillar) => (
            <article className="about-pillar" key={pillar.title}>
              <span className="about-pillar__icon">
                <AboutIcon />
              </span>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section about-section--light" aria-labelledby="about-journey-title">
        <div className="about-section__intro">
          <p className="about-page__eyebrow">Our Journey</p>
          <h2 id="about-journey-title">Progress shaped by <span className="heading-gradient heading-gradient--dark">learning, delivery and ambition.</span></h2>
        </div>
        <ol className="about-timeline">
          {aboutJourney.map((milestone, index) => (
            <li className="about-timeline__item" key={milestone.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <img src={milestone.icon} alt="" loading="lazy" decoding="async" aria-hidden="true" />
              <div>
                <h3>{milestone.title}</h3>
                <p>{milestone.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="about-section about-section--dark" aria-labelledby="about-reasons-title">
        <div className="about-section__intro">
          <p className="about-page__eyebrow">Why Choose Stackneuro</p>
          <h2 id="about-reasons-title">Built for clients who expect <span className="heading-gradient">clarity, quality and momentum.</span></h2>
        </div>
        <div className="about-reasons">
          {aboutReasons.map((reason) => (
            <article className="about-reason" key={reason.title}>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section about-section--light" aria-labelledby="about-leadership-title">
        <article className="about-ceo">
          <figure className="about-ceo__portrait">
            <img src={aboutLeadership.ceo.photo} alt={`${aboutLeadership.ceo.name}, ${aboutLeadership.ceo.designation}`} loading="lazy" decoding="async" />
          </figure>

          <div className="about-ceo__content">
            <p className="about-page__eyebrow">Meet Our Leadership</p>
            <h2 id="about-leadership-title">Strategic leadership with <span className="heading-gradient heading-gradient--dark">hands-on technology judgment.</span></h2>
            <p className="about-ceo__role">{aboutLeadership.ceo.designation}</p>
            <h3>{aboutLeadership.ceo.name}</h3>
            <span className="about-ceo__experience">{aboutLeadership.ceo.experience}</span>
            <p className="about-ceo__bio">{aboutLeadership.ceo.bio}</p>
            <blockquote>{aboutLeadership.ceo.vision}</blockquote>
            <ul>
              {aboutLeadership.ceo.expertise.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="about-ceo__socials">
              <a href={aboutLeadership.ceo.linkedin} aria-label={`Visit ${aboutLeadership.ceo.name} on LinkedIn`}>
                <LinkedInIcon />
              </a>
              <a href={`mailto:${aboutLeadership.ceo.email}`} aria-label={`Email ${aboutLeadership.ceo.name}`}>
                <EmailIcon />
              </a>
            </div>
          </div>
        </article>
      </section>

      <section className="about-section about-section--dark" aria-labelledby="about-team-title">
        <div className="about-section__intro">
          <p className="about-page__eyebrow">Meet Our Team</p>
          <h2 id="about-team-title">People leading <span className="heading-gradient">technology planning, growth and delivery.</span></h2>
        </div>
        <div className="about-team">
          {aboutTeam.map((member) => (
            <article className="about-team-card" key={member.name}>
              <img src={member.photo} alt={`${member.name}, ${member.designation}`} loading="lazy" decoding="async" />
              <h3>{member.name}</h3>
              <p className="about-team-card__designation">{member.designation}</p>
              <div className="about-team-card__experience" aria-label={`${member.experience}`}>
                <span>Experience</span>
                <strong>{member.experience.replace(/\s*Experience$/i, '')}</strong>
              </div>
              {member.description ? <p className="about-team-card__bio">{member.description}</p> : null}
              {member.skills?.length ? (
                <ul>
                  {member.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="about-section about-section--light" aria-labelledby="about-life-title">
        <div className="about-section__intro">
          <p className="about-page__eyebrow">Life at Stackneuro</p>
          <h2 id="about-life-title">A culture of <span className="heading-gradient heading-gradient--dark">focus, collaboration and continuous learning.</span></h2>
        </div>
        <div className="about-gallery">
          {aboutGallery.map((item, index) => (
            <figure className={`about-gallery__item about-gallery__item--${(index % 3) + 1}`} key={item.title}>
              <img src={item.image} alt={item.alt} loading="lazy" decoding="async" />
              <figcaption>{item.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="about-section about-section--dark" aria-labelledby="about-tech-title">
        <div className="about-section__intro">
          <p className="about-page__eyebrow">Our Technology Expertise</p>
          <h2 id="about-tech-title">A modern engineering ecosystem for <span className="heading-gradient">scalable digital products.</span></h2>
        </div>
        <ul className="about-tech-wall">
          {aboutTechnologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </section>

      <section className="about-section about-section--light" aria-labelledby="about-achievements-title">
        <div className="about-section__intro">
          <p className="about-page__eyebrow">Achievements</p>
          <h2 id="about-achievements-title">Momentum measured through <span className="heading-gradient heading-gradient--dark">delivery, trust and support.</span></h2>
        </div>
        <div className="about-achievements">
          {aboutAchievements.map((metric) => (
            <AnimatedMetric metric={metric} key={metric.label} />
          ))}
        </div>
      </section>

      <section className="about-philosophy" aria-labelledby="about-philosophy-title">
        <figure className="about-philosophy__media">
          <img src={aboutPhilosophy.image} alt={aboutPhilosophy.alt} loading="lazy" decoding="async" />
        </figure>
        <div className="about-philosophy__content">
          <p className="about-page__eyebrow">Our Work Philosophy</p>
          <h2 id="about-philosophy-title">Clear collaboration from the first idea to <span className="heading-gradient heading-gradient--dark">long-term product growth.</span></h2>
          <p>
            Stackneuro works as a strategic technology partner, combining disciplined planning,
            thoughtful product decisions and dependable engineering execution.
          </p>
          <ul>
            {aboutPhilosophy.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="about-section about-section--dark" aria-labelledby="about-testimonials-title">
        <div className="about-section__intro">
          <p className="about-page__eyebrow">Testimonials</p>
          <h2 id="about-testimonials-title">What clients value about <span className="heading-gradient">working with Stackneuro.</span></h2>
        </div>
        <div className="about-testimonials">
          {aboutTestimonials.map((testimonial) => (
            <article className="about-testimonial" key={testimonial.name}>
              <div>
                <img src={testimonial.photo} alt={`${testimonial.name}, ${testimonial.company}`} loading="lazy" decoding="async" />
                <span>{testimonial.rating}</span>
              </div>
              <p>{testimonial.feedback}</p>
              <h3>{testimonial.name}</h3>
              <span>{testimonial.company}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section about-section--light" aria-labelledby="about-faq-title">
        <div className="about-section__intro">
          <p className="about-page__eyebrow">Frequently Asked Questions</p>
          <h2 id="about-faq-title">Answers about Stackneuro, <span className="heading-gradient heading-gradient--dark">services and collaboration.</span></h2>
        </div>
        <div className="about-faq">
          {aboutFaqs.map((faq, index) => {
            const isActive = activeFaq === index;
            const buttonId = `about-faq-button-${index}`;
            const panelId = `about-faq-panel-${index}`;

            return (
              <article className={`about-faq__item${isActive ? ' about-faq__item--active' : ''}`} key={faq.question}>
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

      <section className="about-final-cta" aria-labelledby="about-final-cta-title">
        <p className="about-page__eyebrow">Build With Stackneuro</p>
        <h2 id="about-final-cta-title">Let's Build Something <span className="heading-gradient">Extraordinary Together</span></h2>
        <div className="about-final-cta__actions">
          <a className="about-page__primary" href="/#contact">Start Your Project</a>
          <a className="about-page__link" href="/#contact">Contact Us <span aria-hidden="true">-&gt;</span></a>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
