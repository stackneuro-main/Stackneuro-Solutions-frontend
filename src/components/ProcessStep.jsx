function ProcessStep({ step, index, isActive, isFirst, isLast, isRevealed, setRef, onFocus }) {
  return (
    <article
      className={`process-step process-step--${step.align}${isActive ? ' process-step--active' : ''}${
        isRevealed ? ' process-step--revealed' : ''
      }${isFirst ? ' process-step--first' : ''}${isLast ? ' process-step--last' : ''}`}
      data-index={index}
      ref={setRef}
      tabIndex={0}
      onFocus={onFocus}
      aria-labelledby={`process-${step.id}-title`}
    >
      <span className="process-step__node" aria-hidden="true" />
      <div className="process-step__panel">
        <figure className="process-step__visual">
          <img src={step.image.src} alt={step.image.alt} loading="lazy" decoding="async" />
        </figure>
        <div className="process-step__content">
          <p className="process-step__number">{step.number}</p>
          <h3 className="process-step__title" id={`process-${step.id}-title`}>
            {step.title}
          </h3>
          <p className="process-step__description">{step.description}</p>
          <ul className="process-step__deliverables" aria-label={`${step.title} deliverables`}>
            {step.deliverables.map((deliverable) => (
              <li key={deliverable}>{deliverable}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default ProcessStep;
