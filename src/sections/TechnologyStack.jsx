import { useEffect, useRef, useState } from 'react';
import TechnologyCategoryCard from '../components/TechnologyCategoryCard';
import { technologyCategories, technologyStackIntro } from '../data/technologyStack';
import '../styles/technology-stack.css';

function TechnologyStack() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef([]);
  const activeCategory = technologyCategories[activeIndex];

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
        rootMargin: '-28% 0px -42% 0px',
        threshold: [0.28, 0.45, 0.62],
      },
    );

    cardRefs.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="technology-stack" id="solutions" aria-labelledby="technology-stack-title">
      <div className="technology-stack__transition" aria-hidden="true" />

      <div className="technology-stack__inner">
        <div className="technology-stack__intro">
          <p className="technology-stack__eyebrow">{technologyStackIntro.eyebrow}</p>
          <h2 className="technology-stack__title" id="technology-stack-title">
            Building Digital Solutions That Drive <span className="heading-gradient">Business Growth</span>
          </h2>
          <p className="technology-stack__description">{technologyStackIntro.description}</p>
        </div>

        <div className="technology-stack__experience">
          <aside className="technology-stack__panel" aria-labelledby="technology-panel-title">
            <div className="technology-stack__panel-inner">
              <div className="technology-stack__panel-visual">
                <div className="technology-ecosystem" aria-hidden="true">
                  <span className="technology-ecosystem__core">Stackneuro</span>
                  <span className="technology-ecosystem__ring technology-ecosystem__ring--outer" />
                  <span className="technology-ecosystem__ring technology-ecosystem__ring--inner" />
                  {technologyCategories.map((category, index) => (
                    <span
                      className={`technology-ecosystem__node technology-ecosystem__node--${index + 1}${
                        activeIndex === index ? ' technology-ecosystem__node--active' : ''
                      }`}
                      key={category.id}
                    />
                  ))}
                  <span className={`technology-ecosystem__connector technology-ecosystem__connector--${activeIndex + 1}`} />
                </div>
              </div>

              <div className="technology-stack__panel-copy">
                <p className="technology-stack__panel-label">{technologyStackIntro.eyebrow}</p>
                <h3 className="technology-stack__panel-title" id="technology-panel-title">
                  {technologyStackIntro.heading}
                </h3>
                <p className="technology-stack__panel-description">{technologyStackIntro.description}</p>

                <div className="technology-stack__current" key={activeCategory.id}>
                  <span>Currently Exploring</span>
                  <strong>{activeCategory.title}</strong>
                </div>

                <ul
                  className="technology-stack__panel-pills"
                  aria-label={`${activeCategory.title} business outcomes`}
                  key={`${activeCategory.id}-outcomes`}
                >
                  {activeCategory.outcomes.map((outcome) => (
                    <li key={outcome}>
                      <span aria-hidden="true">&#10003;</span>
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          <div className="technology-stack__cards">
            {technologyCategories.map((category, index) => (
              <TechnologyCategoryCard
                category={category}
                index={index}
                isActive={activeIndex === index}
                key={category.id}
                onFocus={() => setActiveIndex(index)}
                setRef={(element) => {
                  cardRefs.current[index] = element;
                }}
              />
            ))}
          </div>
        </div>

        <div className="technology-stack__cta">
          <h3>Need a Digital Solution Tailored to Your Business?</h3>
          <a href="/#contact">
            Start Your Project with Stackneuro <span aria-hidden="true">-&gt;</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default TechnologyStack;
