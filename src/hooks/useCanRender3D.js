// src/hooks/useCanRender3D.js
// ─────────────────────────────────────────────────────────────────────────────
// Returns true only when the device / user preferences suggest 3D is safe.
// Returns false when any of the following is true:
//   • prefers-reduced-motion is set
//   • viewport width < 768 px (mobile)
//   • navigator.hardwareConcurrency <= 4 (low-end CPU)
//   • navigator.connection?.saveData is true (data-saver mode)
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useEffect } from 'react';

function check() {
  if (typeof window === 'undefined') return false;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
  if (window.innerWidth < 768) return false;
  if (typeof navigator !== 'undefined') {
    if ((navigator.hardwareConcurrency ?? 8) <= 4) return false;
    if (navigator.connection?.saveData === true) return false;
  }
  return true;
}

export function useCanRender3D() {
  const [canRender, setCanRender] = useState(false);

  useEffect(() => {
    setCanRender(check());

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = () => setCanRender(check());
    mq.addEventListener('change', handleChange);

    const handleResize = () => setCanRender(check());
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      mq.removeEventListener('change', handleChange);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return canRender;
}
