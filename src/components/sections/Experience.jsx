// src/components/sections/Experience.jsx
// Vertical timeline of education and work entries from experience.js

import { RiGraduationCapLine, RiBriefcaseLine } from 'react-icons/ri';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { experience } from '../../data/experience';

function TimelineItem({ entry, isLast }) {
  const Icon = entry.type === 'education' ? RiGraduationCapLine : RiBriefcaseLine;

  return (
    <div className="relative flex gap-6 sm:gap-8">
      {/* Line + dot */}
      <div className="flex flex-col items-center">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-bg)] text-[var(--color-accent)] shadow-xs">
          <Icon size={18} aria-hidden="true" />
        </div>
        {!isLast && (
          <div className="mt-2 w-0.5 flex-1 bg-[var(--color-border)]" aria-hidden="true" />
        )}
      </div>

      {/* Content */}
      <div className={`flex-1 ${isLast ? 'pb-4' : 'pb-12 sm:pb-16'}`}>
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="text-base sm:text-lg font-bold text-[var(--color-text-primary)]">
            {entry.role}
          </h3>
          <span className="text-sm font-semibold text-[var(--color-accent)]">{entry.org}</span>
        </div>
        <div className="mt-1 flex flex-wrap items-center gap-x-2 text-xs sm:text-sm text-[var(--color-text-muted)]">
          <time>{entry.period}</time>
          {entry.location && (
            <>
              <span aria-hidden="true">·</span>
              <span>{entry.location}</span>
            </>
          )}
        </div>
        {entry.bullets?.length > 0 && (
          <ul className="mt-4 flex flex-col gap-2.5 pl-4">
            {entry.bullets.map((bullet, i) => (
              <li
                key={i}
                className="list-disc text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed"
              >
                {bullet}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-28 lg:py-36 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto w-full max-w-[var(--max-content)]">
        <Reveal>
          <SectionHeading id="experience-heading" title="Experience &amp; Education" center={true} />
        </Reveal>

        <div className="mx-auto max-w-3xl">
          {experience.map((entry, i) => (
            <Reveal key={entry.id} delay={i * 0.1}>
              <TimelineItem entry={entry} isLast={i === experience.length - 1} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
