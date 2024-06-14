import { useState, useEffect } from 'react';

function useScrollbarWidth() {
  const [scrollbarWidth, setScrollbarWidth] = useState(0);

  useEffect(() => {
    function getScrollbarWidth() {
      const container = document.createElement('div');
      container.style.visibility = 'hidden';
      container.style.overflow = 'scroll';
      document.body.appendChild(container);

      const inner = document.createElement('div');
      container.appendChild(inner);

      const width = container.offsetWidth - inner.offsetWidth;

      document.body.removeChild(container);
      return width;
    }

    function updateScrollbarWidth() {
      const hasScrollbar = window.innerWidth > document.documentElement.clientWidth;
      setScrollbarWidth(hasScrollbar ? getScrollbarWidth() : 0);
    }

    // Initial calculation
    updateScrollbarWidth();

    // Update on window resize
    window.addEventListener('resize', updateScrollbarWidth);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', updateScrollbarWidth);
    };
  }, []);

  return scrollbarWidth;
}

export default useScrollbarWidth;