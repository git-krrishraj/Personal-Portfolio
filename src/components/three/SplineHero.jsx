// src/components/three/SplineHero.jsx
// ─────────────────────────────────────────────────────────────────────────────
// 3D Spline hero with lazy load, device gating, and static poster fallback.
//
// ┌─ Rendering decision tree ───────────────────────────────────────────────┐
// │ 1. VITE_SPLINE_SCENE_URL not set  → poster only (no import attempted)   │
// │ 2. useCanRender3D() === false     → poster only (mobile / low-end)      │
// │ 3. not yet mounted / not in view  → poster only (deferred load)         │
// │ 4. All good                       → React.lazy Spline inside Suspense   │
// └─────────────────────────────────────────────────────────────────────────┘
//
// Container size — change these two constants to adjust the scene:
// ─────────────────────────────────────────────────────────────────────────────

import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { useCanRender3D } from '../../hooks/useCanRender3D';

// ── Size constants (single source of truth) ──────────────────────────────────
const SCENE_MAX_WIDTH = '520px';
const SCENE_ASPECT    = '1 / 1';

// ── Lazy Spline import (never executed unless SCENE_URL is truthy) ────────────
const SCENE_URL = import.meta.env.VITE_SPLINE_SCENE_URL;
const LazySpline = SCENE_URL ? lazy(() => import('@splinetool/react-spline')) : null;

// ── Static poster (shown as fallback / placeholder) ───────────────────────────
function Poster({ rounded = true }) {
  return (
    <img
      src="/images/hero-poster.webp"
      alt=""
      aria-hidden="true"
      width={520}
      height={520}
      className={`h-full w-full object-cover${rounded ? ' rounded-2xl' : ''}`}
    />
  );
}

// ── Container that always reserves the right amount of space (zero CLS) ───────
function SceneContainer({ children }) {
  return (
    <div
      style={{ maxWidth: SCENE_MAX_WIDTH, aspectRatio: SCENE_ASPECT }}
      className="relative w-full overflow-hidden rounded-2xl bg-[var(--color-surface)]"
    >
      {children}
    </div>
  );
}

export function SplineHero() {
  const canRender = useCanRender3D();
  const containerRef = useRef(null);
  const [shouldMount, setShouldMount] = useState(false);

  // 1. Defer mount until after first paint (requestIdleCallback / setTimeout)
  // 2. Only mount when container is near the viewport (IntersectionObserver)
  useEffect(() => {
    if (!canRender || !SCENE_URL) return;

    let mounted = true;

    const mount = () => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && mounted) {
            setShouldMount(true);
            observer.disconnect();
          }
        },
        { rootMargin: '200px' },
      );
      if (containerRef.current) observer.observe(containerRef.current);
      return observer;
    };

    let observer;
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => { observer = mount(); });
    } else {
      setTimeout(() => { observer = mount(); }, 200);
    }

    return () => {
      mounted = false;
      observer?.disconnect();
    };
  }, [canRender]);

  // ── Render: poster only (no scene URL configured) ─────────────────────────
  if (!SCENE_URL) {
    return (
      <SceneContainer>
        <Poster />
      </SceneContainer>
    );
  }

  // ── Render: poster only (mobile / low-end / reduced motion) ───────────────
  if (!canRender) {
    return (
      <SceneContainer>
        <Poster />
      </SceneContainer>
    );
  }

  // ── Render: 3D scene (lazy, deferred, intersection-gated) ─────────────────
  return (
    <SceneContainer>
      <div ref={containerRef} className="absolute inset-0">
        {shouldMount && LazySpline ? (
          <Suspense fallback={<Poster rounded={false} />}>
            <LazySpline
              scene={SCENE_URL}
              style={{ width: '100%', height: '100%' }}
              onError={(err) => {
                // Silently swallow Spline errors — poster is already visible
                // behind the canvas via the container background
                void err;
              }}
            />
          </Suspense>
        ) : (
          <Poster rounded={false} />
        )}
      </div>
    </SceneContainer>
  );
}
