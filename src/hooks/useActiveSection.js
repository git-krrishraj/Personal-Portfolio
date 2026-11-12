// src/hooks/useActiveSection.js
// ─────────────────────────────────────────────────────────────────────────────
// Returns the id of the section currently visible in the viewport,
// used by Navbar to highlight the active nav link.
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useEffect } from 'react';

export function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(id);
          }
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sectionIds]);

  return activeId;
}
