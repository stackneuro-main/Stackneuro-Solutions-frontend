import { useEffect, useRef, useState } from 'react';
import { industries, industriesIntro } from '../data/industries';
import '../styles/industries.css';

const getRadialNodeStyle = (index, total) => {
  const angle = -90 + (360 / total) * index;
  const radians = (angle * Math.PI) / 180;
  const radius = 45;
  const labelOffset = 38;

  return {
    '--node-x': `${50 + Math.cos(radians) * radius}%`,
    '--node-y': `${50 + Math.sin(radians) * radius}%`,
    '--node-label-x': `${Math.cos(radians) * labelOffset}px`,
    '--node-label-y': `${Math.sin(radians) * labelOffset}px`,
  };
};

function Industries() {
  const [activeIndex, setActiveIndex] = useState(0);
  const markerRefs = useRef([]);
  const activeIndustry = industries[activeIndex];

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
        rootMargin: '-34% 0px -44% 0px',
        threshold: [0.24, 0.42, 0.6],
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
    <section className="industries" id="industries" aria-labelledby="industries-title">
      <div className="industries__transition" aria-hidden="true" />

      <div className="industries__inner">
        <div className="industries__intro">
          <p className="industries__eyebrow">{industriesIntro.eyebrow}</p>
          <h2 className="industries__title" id="industries-title">
            Digital solutions built for <span className="heading-gradient heading-gradient--dark">every industry.</span>
          </h2>
          <p className="industries__description">{industriesIntro.description}</p>
        </div>

        <div className="industries__experience">
          <div className="industries__showcase">
            <article className="industries__info" key={activeIndustry.id}>
              <p className="industries__info-number">{activeIndustry.number}</p>
              <h3>{activeIndustry.name}</h3>
              <p>{activeIndustry.description}</p>
              <ul aria-label={`${activeIndustry.name} solutions`}>
                {activeIndustry.solutions.map((solution) => (
                  <li key={solution}>{solution}</li>
                ))}
              </ul>
            </article>

            <div className="industries-hub" aria-label="Interactive industry ecosystem">
              <span
                className="industries-hub__active-line"
                style={{
                  '--active-angle': `${-90 + (360 / industries.length) * activeIndex}deg`,
                  '--active-length': '45%',
                }}
                aria-hidden="true"
              />

              <div className="industries-hub__center">
                <div className="industries-hub__visual" aria-hidden="true">
                  {industries.map((industry, index) => (
                    <img
                      className={`industries-hub__image${
                        activeIndex === index ? ' industries-hub__image--active' : ''
                      }`}
                      src={industry.image.src}
                      alt=""
                      loading="eager"
                      decoding="async"
                      key={industry.id}
                    />
                  ))}
                </div>
                <strong>
                  Stackneuro
                  <span>Solutions</span>
                </strong>
              </div>

              <div className="industries-hub__nodes">
                {industries.map((industry, index) => (
                  <button
                    className={`industries-hub__node${
                      activeIndex === index ? ' industries-hub__node--active' : ''
                    }`}
                    style={getRadialNodeStyle(index, industries.length)}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    key={industry.id}
                  >
                    <span>{industry.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <aside className="industries__nav" aria-label="Industry navigation">
              <ol>
                {industries.map((industry, index) => (
                  <li key={industry.id}>
                    <a
                      className={`industries__nav-link${
                        activeIndex === index ? ' industries__nav-link--active' : ''
                      }`}
                      href={`#industry-marker-${industry.id}`}
                      onFocus={() => setActiveIndex(index)}
                      onMouseEnter={() => setActiveIndex(index)}
                    >
                      <span>{industry.number}</span>
                      {industry.name}
                    </a>
                  </li>
                ))}
              </ol>
            </aside>
          </div>

          <div className="industries__markers" aria-hidden="true">
            {industries.map((industry, index) => (
              <div
                className="industries__marker"
                data-index={index}
                id={`industry-marker-${industry.id}`}
                key={industry.id}
                ref={(element) => {
                  markerRefs.current[index] = element;
                }}
              />
            ))}
          </div>
        </div>

        <div className="industries__mobile-details">
          <img src={activeIndustry.image.src} alt={activeIndustry.image.alt} loading="lazy" decoding="async" />
        </div>
      </div>
    </section>
  );
}

export default Industries;
