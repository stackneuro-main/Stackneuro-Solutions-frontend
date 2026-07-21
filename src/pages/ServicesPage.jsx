import { useEffect, useMemo } from 'react';
import { serviceCategories, serviceExpectations, servicesIntro } from '../data/services';
import '../styles/services-page.css';

const categoryAliases = {
  technology: 'technology',
  business: 'business',
  marketing: 'digital-marketing',
  'digital-marketing': 'digital-marketing',
};

const categoryIconPaths = {
  technology: (
    <>
      <rect x="5" y="7" width="22" height="17" rx="3" />
      <path d="M5 12h22M12 27h8" />
    </>
  ),
  business: (
    <>
      <path d="M6 24V10a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14" />
      <path d="M11 7V5h10v2M4 24h24M11 16h10" />
    </>
  ),
  'digital-marketing': (
    <>
      <path d="M6 20l9-9 5 5 6-8" />
      <path d="M6 26h20M24 8h2v2" />
    </>
  ),
};

function ServicePageIcon({ categoryId }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      {categoryIconPaths[categoryId]}
    </svg>
  );
}

function ExpectationIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path d="M16 4l10 6v12l-10 6-10-6V10l10-6z" />
      <path d="M11 16l3 3 7-8" />
    </svg>
  );
}

function ServicesPage() {
  const selectedCategoryId = useMemo(() => {
    const queryCategory = new URLSearchParams(window.location.search).get('category');
    return categoryAliases[queryCategory] ?? null;
  }, []);

  useEffect(() => {
    if (!selectedCategoryId) {
      return;
    }

    const frameId = window.requestAnimationFrame(() => {
      document.getElementById(`services-page-${selectedCategoryId}`)?.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
        block: 'start',
      });
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [selectedCategoryId]);

  return (
    <main className="services-page">
      <section className="services-page-hero" id="hero" aria-labelledby="services-page-title">
        <p className="services-page__eyebrow">Services</p>
        <h1 className="services-page-hero__title" id="services-page-title">
          Complete digital <span className="heading-gradient">services</span> for modern businesses.
        </h1>
        <p className="services-page-hero__description">
          {servicesIntro.description} Explore the full Stackneuro Solutions service ecosystem across technology, business transformation and digital growth.
        </p>
        <div className="services-page-hero__nav" aria-label="Service categories">
          {serviceCategories.map((category) => (
            <a
              className={selectedCategoryId === category.id ? 'services-page-hero__link services-page-hero__link--active' : 'services-page-hero__link'}
              href={`#services-page-${category.id}`}
              key={category.id}
            >
              {category.label}
            </a>
          ))}
        </div>
      </section>

      <div className="services-page__categories">
        {serviceCategories.map((category) => (
          <section
            className={`services-page-category services-page-category--${category.accent}`}
            id={`services-page-${category.id}`}
            key={category.id}
            aria-labelledby={`${category.id}-page-title`}
          >
            <div className="services-page-category__header">
              <div>
                <p className="services-page__eyebrow">{category.number} / {category.label} Services</p>
                <h2 id={`${category.id}-page-title`}>
                  {category.id === 'technology' ? (
                    <>Technology that powers <span className="heading-gradient heading-gradient--dark">what's next.</span></>
                  ) : category.id === 'business' ? (
                    <>Transforming ideas into <span className="heading-gradient">business impact.</span></>
                  ) : (
                    <>Turning attention into <span className="heading-gradient heading-gradient--dark">measurable growth.</span></>
                  )}
                </h2>
                <p>{category.description}</p>
              </div>
              <figure>
                <img src={category.image.src} alt={category.image.alt} loading="lazy" decoding="async" />
              </figure>
            </div>

            <div className="services-page-grid">
              {category.services.map((service) => (
                <article className="services-page-card" key={service.name}>
                  <span className="services-page-card__icon">
                    <ServicePageIcon categoryId={category.id} />
                  </span>
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                  {service.benefits?.length ? (
                    <ul aria-label={`${service.name} key benefits`}>
                      {service.benefits.map((benefit) => (
                        <li key={benefit}>{benefit}</li>
                      ))}
                    </ul>
                  ) : null}
                  <a href="/#contact">
                    Learn More <span aria-hidden="true">-&gt;</span>
                  </a>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="services-page-expect" aria-labelledby="services-expect-title">
        <div className="services-page-section__intro">
          <p className="services-page__eyebrow">What You Can Expect</p>
          <h2 id="services-expect-title">
            Business value built into <span className="heading-gradient">every solution.</span>
          </h2>
        </div>

        <div className="services-page-expect__grid">
          {serviceExpectations.map((item) => (
            <article className="services-page-expect__card" key={item.title}>
              <span className="services-page-expect__icon">
                <ExpectationIcon />
              </span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="services-page-cta" aria-labelledby="services-page-cta-title">
        <p className="services-page__eyebrow">Need a custom solution?</p>
        <h2 id="services-page-cta-title">Let's map the right <span className="heading-gradient">service mix</span> for your business.</h2>
        <a href="/#contact">Start Your Project <span aria-hidden="true">-&gt;</span></a>
      </section>
    </main>
  );
}

export default ServicesPage;
