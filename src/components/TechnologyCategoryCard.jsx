function TechnologyCategoryCard({ category, index, isActive, setRef, onFocus }) {
  return (
    <article
      className={`technology-card${isActive ? ' technology-card--active' : ''}`}
      data-index={index}
      id={`technology-${category.id}`}
      ref={setRef}
      tabIndex={0}
      onFocus={onFocus}
      aria-labelledby={`technology-${category.id}-title`}
    >
      <div className="technology-card__media">
        <img
          src={category.image.src}
          alt={category.image.alt}
          loading={index === 0 ? 'eager' : 'lazy'}
          decoding="async"
        />
      </div>

      <div className="technology-card__content">
        <div className="technology-card__meta">
          <span>{category.number}</span>
          <span>{category.title}</span>
        </div>
        <h3 className="technology-card__title" id={`technology-${category.id}-title`}>
          {category.title}
        </h3>
        <p className="technology-card__description">{category.description}</p>
        <ul className="technology-card__pills" aria-label={`${category.title} capability badges`}>
          {category.badges.map((badge) => (
            <li key={badge}>{badge}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default TechnologyCategoryCard;
