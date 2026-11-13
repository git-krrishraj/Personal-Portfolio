// src/components/sections/Skills.jsx
// Skills displayed as clean tag pills grouped by category.
// No progress bars or percentage meters.

import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { skills } from '../../data/skills';

function SkillTag({ label }) {
  return (
    <span className="inline-flex items-center rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-3.5 py-1.5 text-sm font-medium text-[var(--color-text-primary)] shadow-xs transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]">
      {label}
    </span>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-28 lg:py-36 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto w-full max-w-[var(--max-content)]">
        <Reveal>
          <SectionHeading id="skills-heading" title="Skills" center={true} />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skills.map((group, gi) => (
            <Reveal key={group.id} delay={gi * 0.08}>
              <div className="flex flex-col items-center gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/60 p-6 sm:p-7 text-center transition-all hover:border-[var(--color-accent)]/40 hover:shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">
                  {group.category}
                </h3>
                <div className="flex flex-wrap justify-center gap-2.5">
                  {group.items.map((item) => (
                    <SkillTag key={item.label} label={item.label} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
