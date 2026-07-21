import { useEffect, useRef, useState } from 'react';

function useRevealOnView(options) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element || isVisible) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '0px 0px -18% 0px',
        threshold: 0.18,
        ...(options ?? {}),
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [isVisible]);

  return [elementRef, isVisible];
}

export default useRevealOnView;
