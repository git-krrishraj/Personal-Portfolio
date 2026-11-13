// src/components/sections/About.jsx

import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { site } from '../../data/site';

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-28 lg:py-36 px-4 sm:px-6 lg:px-8 bg-[var(--color-surface)]"
    >
      <div className="mx-auto w-full max-w-[var(--max-content)]">
        <Reveal>
          <SectionHeading
            id="about-heading"
            title="About me"
            center={true}
          />
        </Reveal>

        <div className="mx-auto max-w-3xl flex flex-col gap-6 text-center">
          {site.aboutParagraphs.map((para, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <p className="text-base sm:text-lg leading-relaxed text-[var(--color-text-muted)]">
                {para}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
