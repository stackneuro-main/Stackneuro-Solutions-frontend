import { useEffect, useRef } from 'react';
import {
  clientMetrics,
  clientSuccessIntro,
  clientTestimonials,
} from '../data/clientSuccess';
import '../styles/client-success.css';

const formatMetricValue = (metric, progress = 1) => {
  if (typeof metric.value !== 'number') {
    return metric.value;
  }

  return `${Math.round(metric.value * progress)}${metric.suffix ?? ''}`;
};

function ClientSuccessStories() {
  const sectionRef = useRef(null);
  const metricsRef = useRef(null);
  const metricValueRefs = useRef([]);
  const hasAnimatedMetrics = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const revealElements = section.querySelectorAll('.client-success__reveal');
    let metricFrame;

    const setFinalMetricValues = () => {
      clientMetrics.forEach((metric, index) => {
        const element = metricValueRefs.current[index];

        if (element) {
          element.textContent = formatMetricValue(metric);
        }
      });
    };

    const animateMetrics = () => {
      if (hasAnimatedMetrics.current) {
        return;
      }

      hasAnimatedMetrics.current = true;
      metricsRef.current?.classList.add('is-visible');

      if (prefersReducedMotion) {
        setFinalMetricValues();
        return;
      }

      const duration = 900;
      const start = performance.now();

      const tick = (time) => {
        const progress = Math.min((time - start) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);

        clientMetrics.forEach((metric, index) => {
          const element = metricValueRefs.current[index];

          if (element) {
            element.textContent = formatMetricValue(metric, easedProgress);
          }
        });

        if (progress < 1) {
          metricFrame = requestAnimationFrame(tick);
        }
      };

      metricFrame = requestAnimationFrame(tick);
    };

    if (prefersReducedMotion) {
      revealElements.forEach((element) => element.classList.add('is-visible'));
      animateMetrics();
      return () => {
        if (metricFrame) {
          cancelAnimationFrame(metricFrame);
        }
      };
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '0px 0px -14% 0px',
        threshold: 0.16,
      },
    );

    revealElements.forEach((element) => revealObserver.observe(element));

    const metricsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          animateMetrics();
          metricsObserver.disconnect();
        }
      },
      {
        rootMargin: '0px 0px -18% 0px',
        threshold: 0.35,
      },
    );

    if (metricsRef.current) {
      metricsObserver.observe(metricsRef.current);
    }

    return () => {
      revealObserver.disconnect();
      metricsObserver.disconnect();

      if (metricFrame) {
        cancelAnimationFrame(metricFrame);
      }
    };
  }, []);

  return (
    <section className="client-success" id="client-success" ref={sectionRef} aria-labelledby="client-success-title">
      <div className="client-success__transition" aria-hidden="true" />

      <div className="client-success__inner">
        <header className="client-success__intro client-success__reveal">
          <p className="client-success__eyebrow">{clientSuccessIntro.eyebrow}</p>
          <h2 className="client-success__title" id="client-success-title">
            <span>Real partnerships.</span>
            <span>Real impact.</span>
            <span className="heading-gradient">Real business outcomes.</span>
          </h2>
          <p className="client-success__description">{clientSuccessIntro.description}</p>
        </header>

        <dl className="client-success__metrics client-success__reveal" ref={metricsRef}>
          {clientMetrics.map((metric, index) => (
            <div className="client-success__metric" key={metric.label}>
              <dt>
                <span
                  ref={(element) => {
                    metricValueRefs.current[index] = element;
                  }}
                  aria-label={`${formatMetricValue(metric)} ${metric.label}`}
                >
                  {typeof metric.value === 'number' ? '0' : metric.value}
                </span>
              </dt>
              <dd>{metric.label}</dd>
            </div>
          ))}
        </dl>

        <div className="client-success__grid">
          <div className="testimonial-wall client-success__reveal" aria-label="Client testimonial wall">
            <div className="testimonial-wall__track">
              {[0, 1].map((groupIndex) => (
                <div
                  className="testimonial-wall__group"
                  key={`testimonial-group-${groupIndex}`}
                  aria-hidden={groupIndex === 1 ? 'true' : undefined}
                >
                  {clientTestimonials.map((testimonial, index) => (
                    <article
                      className="testimonial-card"
                      style={{ '--testimonial-delay': `${Math.min(index * 55, 240)}ms` }}
                      key={`${testimonial.company}-${testimonial.name}-${groupIndex}`}
                    >
                      <div className="testimonial-card__person">
                        <img src={testimonial.avatar.src} alt={testimonial.avatar.alt} loading="lazy" decoding="async" />
                        <div>
                          <h3>{testimonial.name}</h3>
                          <p>{testimonial.company}</p>
                        </div>
                      </div>

                      <div className="testimonial-card__rating" aria-label={`${testimonial.rating} out of 5 star rating`}>
                        {Array.from({ length: testimonial.rating }).map((_, ratingIndex) => (
                          <span aria-hidden="true" key={ratingIndex}>
                            &#9733;
                          </span>
                        ))}
                      </div>

                      <p className="testimonial-card__review">{testimonial.review}</p>
                      <p className="testimonial-card__industry">{testimonial.industry}</p>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="client-success__cta client-success__reveal">
          <p>Trusted by businesses ready to build what's next.</p>
          <span>Let's transform your vision into a scalable digital product.</span>
          <div className="client-success__cta-actions">
            <a className="client-success__cta-primary" href="#contact">
              Start Your Project
            </a>
            <a className="client-success__cta-link" href="#contact">
              Schedule a Consultation
              <span aria-hidden="true">-&gt;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientSuccessStories;
