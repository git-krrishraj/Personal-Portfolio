// src/components/sections/Skills.jsx
// Skills displayed as clean tag pills grouped by category.
// No progress bars or percentage meters.

import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { skills } from '../../data/skills';

function SkillTag({ label }) {
  return (
    <span className="inline-flex items-center rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-sm font-medium text-[var(--color-text-primary)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]">
      {label}
    </span>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-[var(--max-content)]">
        <Reveal>
          <SectionHeading id="skills-heading" title="Skills" />
        </Reveal>

        <div className="flex flex-col gap-10">
          {skills.map((group, gi) => (
            <Reveal key={group.id} delay={gi * 0.08}>
              <div className="flex flex-col gap-3">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
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
