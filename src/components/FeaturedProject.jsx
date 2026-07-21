function FeaturedProject({ project }) {
  return (
    <article
      className={`featured-project featured-project--${project.align}`}
      aria-labelledby={`${project.id}-title`}
    >
      <div className="featured-project__kicker">
        <span className="featured-project__number">{project.number}</span>
        <span className="featured-project__category">{project.category}</span>
      </div>

      <a
        className="featured-project__media-link"
        href={project.href}
        aria-label={`Start your project with Stackneuro after viewing ${project.name}`}
      >
        <figure
          className={`featured-project__media${
            project.image.fit === 'contain' ? ' featured-project__media--contain' : ''
          }`}
        >
          <img
            className={`featured-project__image${
              project.image.fit === 'contain' ? ' featured-project__image--contain' : ''
            }`}
            src={project.image.src}
            alt={project.image.alt}
            loading="lazy"
            decoding="async"
          />
          <figcaption className="featured-project__overlay" aria-hidden="true">
            Start Your Project <span aria-hidden="true">-&gt;</span>
          </figcaption>
        </figure>
      </a>

      <div className="featured-project__body">
        <div className="featured-project__title-row">
          <h3 className="featured-project__title" id={`${project.id}-title`}>
            {project.name}
          </h3>
          <a className="featured-project__link" href={project.href}>
            Start Your Project with Stackneuro <span aria-hidden="true">-&gt;</span>
          </a>
        </div>

        <p className="featured-project__description">{project.description}</p>
        <p className="featured-project__outcome">{project.outcome}</p>
      </div>
    </article>
  );
}

export default FeaturedProject;
