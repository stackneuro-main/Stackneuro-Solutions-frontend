import { useEffect, useRef, useState } from 'react';
import { aiCapabilities, aiInnovationIntro } from '../data/aiInnovation';
import '../styles/ai-innovation.css';

function AiInnovation() {
  const [activeIndex, setActiveIndex] = useState(0);
  const markerRefs = useRef([]);
  const activeCapability = aiCapabilities[activeIndex];
  const progress = ((activeIndex + 1) / aiCapabilities.length) * 100;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visibleEntry) {
          return;
        }

        const nextIndex = Number(visibleEntry.target.dataset.index);
        setActiveIndex((currentIndex) => (currentIndex === nextIndex ? currentIndex : nextIndex));
      },
      {
        rootMargin: '-32% 0px -44% 0px',
        threshold: [0.28, 0.45, 0.62],
      },
    );

    markerRefs.current.forEach((marker) => {
      if (marker) {
        observer.observe(marker);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="ai-innovation" id="ai-innovation" aria-labelledby="ai-innovation-title">
      <div className="ai-innovation__transition" aria-hidden="true" />

      <div className="ai-innovation__inner">
        <div className="ai-innovation__intro">
          <p className="ai-innovation__eyebrow">{aiInnovationIntro.eyebrow}</p>
          <h2 className="ai-innovation__title" id="ai-innovation-title">
            Artificial Intelligence isn't the future. <span className="heading-gradient heading-gradient--dark">It's part of everything we build.</span>
          </h2>
          <p className="ai-innovation__description">{aiInnovationIntro.description}</p>
        </div>

        <div className="ai-innovation__story">
          <div className="ai-innovation__showcase">
            <article className="ai-innovation__copy" key={activeCapability.id}>
              <p className="ai-innovation__number">{activeCapability.number}</p>
              <h3>{activeCapability.title}</h3>
              <p>{activeCapability.description}</p>
              <ul aria-label={`${activeCapability.title} benefits`}>
                {activeCapability.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </article>

            <div className="ai-innovation__visual" aria-live="polite">
              {aiCapabilities.map((capability, index) => {
                const isActive = activeIndex === index;

                return (
                  <img
                    className={`ai-innovation__image${isActive ? ' ai-innovation__image--active' : ''}`}
                    src={capability.image.src}
                    alt={isActive ? capability.image.alt : ''}
                    aria-hidden={!isActive}
                    loading="eager"
                    decoding="async"
                    key={capability.id}
                  />
                );
              })}
            </div>

            <aside className="ai-innovation__progress" aria-label="AI capability progress">
              <div className="ai-innovation__progress-meta">
                <span>{activeCapability.number}</span>
                <span>{String(aiCapabilities.length).padStart(2, '0')}</span>
              </div>
              <div className="ai-innovation__progress-track" aria-hidden="true">
                <span style={{ '--progress': `${progress}%` }} />
              </div>
              <ol className="ai-innovation__nav">
                {aiCapabilities.map((capability, index) => (
                  <li key={capability.id}>
                    <a
                      className={activeIndex === index ? 'ai-innovation__nav-link ai-innovation__nav-link--active' : 'ai-innovation__nav-link'}
                      href={`#ai-capability-${capability.id}`}
                      onFocus={() => setActiveIndex(index)}
                    >
                      <span>{capability.number}</span>
                      {capability.shortTitle}
                    </a>
                  </li>
                ))}
              </ol>
            </aside>
          </div>

          <div className="ai-innovation__markers" aria-hidden="true">
            {aiCapabilities.map((capability, index) => (
              <div
                className="ai-innovation__marker"
                data-index={index}
                id={`ai-capability-${capability.id}`}
                key={capability.id}
                ref={(element) => {
                  markerRefs.current[index] = element;
                }}
              />
            ))}
          </div>
        </div>

        <div className="ai-innovation__mobile-list">
          {aiCapabilities.map((capability) => (
            <article className="ai-mobile-capability" key={capability.id}>
              <img src={capability.image.src} alt={capability.image.alt} loading="lazy" decoding="async" />
              <p className="ai-mobile-capability__number">{capability.number}</p>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
              <ul aria-label={`${capability.title} benefits`}>
                {capability.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AiInnovation;
