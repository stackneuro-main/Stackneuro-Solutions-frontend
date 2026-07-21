function ServicesCategory({ category }) {
  const isReversed = category.mediaSide === 'right';
  const cardCount = category.services.length;

  return (
    <section
      className={`services-category services-category--${category.accent}${
        isReversed ? ' services-category--reversed' : ''
      }`}
      aria-labelledby={`${category.id}-services-title`}
    >
      <div className="services-category__grid">
        <aside className="services-category__panel">
          <div className="services-category__sticky">
            <div className="services-category__meta">
              <span>{category.number}</span>
              <span>{category.label}</span>
            </div>
            <h3 className="services-category__heading" id={`${category.id}-services-title`}>
              {category.heading}
            </h3>
            <p className="services-category__description">{category.description}</p>
            <div className="services-category__image-frame">
              <img
                className="services-category__image"
                src={category.image.src}
                alt={category.image.alt}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </aside>

        <div className="services-category__cards" style={{ '--card-count': cardCount }}>
          {category.services.map((service, index) => (
            <article
              className="service-card"
              key={service.name}
              style={{
                '--card-index': index,
                '--card-z': index + 1,
              }}
            >
              <span className="service-card__number">{String(index + 1).padStart(2, '0')}</span>
              <div className="service-card__body">
                <h4>{service.name}</h4>
                <p>{service.description}</p>
              </div>
              <span className="service-card__arrow" aria-hidden="true">
                -&gt;
              </span>
            </article>
          ))}
          <div className="services-category__explore">
            <a href={`/services?category=${category.slug ?? category.id}`}>
              Explore More <span aria-hidden="true">-&gt;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesCategory;
