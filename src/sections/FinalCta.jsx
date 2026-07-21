import { finalCta } from '../data/finalCta';
import '../styles/final-cta.css';

function FinalCta() {
  return (
    <section className="final-cta" id="final-cta" aria-labelledby="final-cta-title">
      <div className="final-cta__accent" aria-hidden="true" />

      <div className="final-cta__inner">
        <div className="final-cta__content">
          <h2 className="final-cta__title" id="final-cta-title">
            Ready to build something <span className="heading-gradient heading-gradient--dark">extraordinary?</span>
          </h2>
          <p className="final-cta__description">{finalCta.description}</p>

          <div className="final-cta__actions" aria-label="Project inquiry actions">
            <a className="final-cta__primary" href={finalCta.primaryAction.href}>
              {finalCta.primaryAction.label}
            </a>
            <a className="final-cta__secondary" href={finalCta.secondaryAction.href}>
              {finalCta.secondaryAction.label}
              <span aria-hidden="true">-&gt;</span>
            </a>
          </div>

          <ul className="final-cta__trust" aria-label="Trust indicators">
            {finalCta.trustIndicators.map((indicator, index) => (
              <li key={indicator} style={{ '--trust-delay': `${index * 70}ms` }}>
                <span aria-hidden="true">✓</span>
                {indicator}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default FinalCta;
