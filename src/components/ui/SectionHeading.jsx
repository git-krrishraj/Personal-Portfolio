// src/components/ui/SectionHeading.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Consistent <h2> heading with an optional subtitle <p> for every page section.
// ─────────────────────────────────────────────────────────────────────────────

import { cn } from '../../lib/cn';

export function SectionHeading({ title, subtitle, className, center = false }) {
  return (
    <div className={cn('mb-14 sm:mb-16', center && 'text-center', className)}>
      <h2
        className={cn(
          'text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl',
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={cn('mt-3 text-base sm:text-lg text-[var(--color-text-muted)] max-w-xl', center && 'mx-auto')}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
