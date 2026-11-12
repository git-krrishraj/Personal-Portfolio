// src/components/three/SplineHero.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Phase 1 stub — renders only the static poster.
// Full implementation (lazy load, gating, Spline) added in Phase 3.
// ─────────────────────────────────────────────────────────────────────────────

// Container size — change these two values to adjust the 3D scene size
const SCENE_MAX_WIDTH = '520px';
const SCENE_ASPECT    = '1 / 1';

export function SplineHero() {
  return (
    <div
      style={{ maxWidth: SCENE_MAX_WIDTH, aspectRatio: SCENE_ASPECT }}
      className="w-full relative overflow-hidden rounded-2xl bg-[var(--color-surface)]"
      aria-hidden="true"
    >
      <img
        src="/images/hero-poster.webp"
        alt=""
        width={520}
        height={520}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
