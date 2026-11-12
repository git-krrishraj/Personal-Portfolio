// src/components/ui/SectionHeading.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Consistent <h2> heading with an optional subtitle <p> for every page section.
// ─────────────────────────────────────────────────────────────────────────────

import { cn } from '../../lib/cn';

export function SectionHeading({ title, subtitle, className, center = false }) {
  return (
    <div className={cn('mb-12', center && 'text-center', className)}>
      <h2
        className={cn(
          'text-2xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-3xl',
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base text-[var(--color-text-muted)] max-w-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
