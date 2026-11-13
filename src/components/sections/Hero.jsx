// src/components/sections/Hero.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Hero section: name, role, tagline, two CTA buttons, SplineHero on right.
// Desktop: two-column grid. Mobile: single column, poster below text.
// LCP element: the <h1> — SplineHero is deferred and not in LCP position.
// ─────────────────────────────────────────────────────────────────────────────

import { RiArrowDownLine, RiDownloadLine } from 'react-icons/ri';
import { Button } from '../ui/Button';
import { SplineHero } from '../three/SplineHero';
import { site } from '../../data/site';

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative min-h-[calc(100svh-3.5rem)] flex items-center py-24 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto w-full max-w-[var(--max-content)]">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 lg:items-center">

          {/* Left — text content */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)]">
                {site.role}
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-5xl lg:text-6xl">
                {site.name === 'Krrish Raj' ? (
                  <>Hey, I&apos;m&nbsp;<span className="text-[var(--color-accent)]">Krrish</span> 👋</>
                ) : (
                  <>Hey, I&apos;m&nbsp;<span className="text-[var(--color-accent)]">{site.name}</span></>
                )}
              </h1>
              <p className="text-lg sm:text-xl text-[var(--color-text-muted)] max-w-lg leading-relaxed">
                {site.tagline === 'TODO — one-line tagline about what you build or care about'
                  ? 'Building software that solves real problems.'
                  : site.tagline}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button href="#projects" variant="primary">
                <RiArrowDownLine aria-hidden="true" />
                View work
              </Button>
              <Button
                href={site.resumeFile}
                variant="outline"
                download="Resume.pdf"
              >
                <RiDownloadLine aria-hidden="true" />
                Download resume
              </Button>
            </div>
          </div>

          {/* Right — 3D scene / poster */}
          <div className="flex justify-center lg:justify-end">
            <SplineHero />
          </div>
        </div>
      </div>
    </section>
  );
}
