// src/components/sections/About.jsx

import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { site } from '../../data/site';

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--color-surface)]"
    >
      <div className="mx-auto max-w-[var(--max-content)]">
        <Reveal>
          <SectionHeading
            id="about-heading"
            title="About me"
          />
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-start">
          {/* Paragraphs */}
          <div className="flex flex-col gap-5 max-w-2xl">
            {site.aboutParagraphs.map((para, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p className="text-base leading-relaxed text-[var(--color-text-muted)]">
                  {para}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
