// src/components/ui/Reveal.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Wraps children in a fade + slide-up animation when they scroll into view.
// Uses motion's LazyMotion + domAnimation + m (tree-shakeable) components.
// Respects prefers-reduced-motion: renders static (no animation) when set.
// ─────────────────────────────────────────────────────────────────────────────

import { useRef } from 'react';
import { LazyMotion, domAnimation, m, useInView } from 'motion/react';

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function Reveal({ children, delay = 0, className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -60px 0px' });

  if (prefersReducedMotion) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.45, ease: 'easeOut', delay }}
        className={className}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}
