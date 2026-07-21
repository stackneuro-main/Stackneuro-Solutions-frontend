import { useEffect, useRef, useState } from 'react';
import ProcessStep from '../components/ProcessStep';
import { processIntro, processSteps } from '../data/process';
import '../styles/our-process.css';

function OurProcess() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [completedIndex, setCompletedIndex] = useState(0);
  const stepRefs = useRef([]);
  const progress = ((completedIndex + 1) / processSteps.length) * 100;

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
        setCompletedIndex((currentIndex) => Math.max(currentIndex, nextIndex));
      },
      {
        rootMargin: '-30% 0px -42% 0px',
        threshold: [0.24, 0.42, 0.6],
      },
    );

    stepRefs.current.forEach((step) => {
      if (step) {
        observer.observe(step);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="our-process" id="our-process" aria-labelledby="our-process-title">
      <div className="our-process__transition" aria-hidden="true" />

      <div className="our-process__inner">
        <div className="our-process__intro">
          <p className="our-process__eyebrow">{processIntro.eyebrow}</p>
          <h2 className="our-process__title" id="our-process-title">
            From idea to launch. Built with <span className="heading-gradient">clarity at every step.</span>
          </h2>
          <p className="our-process__description">{processIntro.description}</p>
        </div>

        <div className="process-journey" style={{ '--process-progress': `${progress}%` }}>
          <div className="process-journey__path" aria-hidden="true">
            <span />
          </div>

          {processSteps.map((step, index) => (
            <ProcessStep
              index={index}
              isActive={activeIndex === index}
              isFirst={index === 0}
              isLast={index === processSteps.length - 1}
              isRevealed={index <= completedIndex}
              key={step.id}
              onFocus={() => {
                setActiveIndex(index);
                setCompletedIndex((currentIndex) => Math.max(currentIndex, index));
              }}
              setRef={(element) => {
                stepRefs.current[index] = element;
              }}
              step={step}
            />
          ))}
          <div className="process-journey__tail" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

export default OurProcess;
