import { useEffect, useRef, useState } from 'react';
import { whyStackneuroIntro, whyStackneuroValues } from '../data/whyStackneuro';
import '../styles/why-stackneuro.css';

function WhyStackneuro() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef([]);

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
        rootMargin: '-34% 0px -46% 0px',
        threshold: [0.35, 0.55, 0.75],
      },
    );

    itemRefs.current.forEach((item) => {
      if (item) {
        observer.observe(item);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="why-stackneuro" id="why-stackneuro" aria-labelledby="why-stackneuro-title">
      <div className="why-stackneuro__transition" aria-hidden="true" />

      <div className="why-stackneuro__inner">
        <div className="why-stackneuro__intro">
          <p className="why-stackneuro__eyebrow">{whyStackneuroIntro.eyebrow}</p>
          <h2 className="why-stackneuro__title" id="why-stackneuro-title">
            Why businesses choose us as their <span className="heading-gradient heading-gradient--dark">technology partner.</span>
          </h2>
          <p className="why-stackneuro__description">{whyStackneuroIntro.description}</p>
        </div>

        <div className="why-stackneuro__experience">
          <ol className="why-stackneuro__values">
            {whyStackneuroValues.map((value, index) => {
              const isActive = activeIndex === index;

              return (
                <li
                  className={`why-value${isActive ? ' why-value--active' : ''}`}
                  data-index={index}
                  key={value.id}
                  ref={(element) => {
                    itemRefs.current[index] = element;
                  }}
                  tabIndex={0}
                  onFocus={() => setActiveIndex(index)}
                >
                  <div className="why-value__summary">
                    <span className="why-value__number">{value.number}</span>
                    <h3 className="why-value__title">{value.title}</h3>
                  </div>
                  <div className="why-value__details">
                    <span className="why-value__line" aria-hidden="true" />
                    <p>{value.description}</p>
                  </div>
                  <figure className="why-value__mobile-visual">
                    <img src={value.image.src} alt={value.image.alt} loading="lazy" decoding="async" />
                  </figure>
                </li>
              );
            })}
          </ol>

          <aside className="why-stackneuro__visual">
            <div className="why-stackneuro__visual-frame">
              {whyStackneuroValues.map((value, index) => {
                const isActive = activeIndex === index;

                return (
                  <img
                    className={`why-stackneuro__visual-image${
                      isActive ? ' why-stackneuro__visual-image--active' : ''
                    }`}
                    src={value.image.src}
                    alt={isActive ? value.image.alt : ''}
                    aria-hidden={!isActive}
                    loading="eager"
                    decoding="async"
                    key={value.id}
                  />
                );
              })}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default WhyStackneuro;
