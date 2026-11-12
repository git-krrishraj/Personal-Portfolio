// src/components/ui/Button.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Renders an <a> when `href` is provided, otherwise a <button>.
// Variants: 'primary' (filled accent) | 'outline' (bordered).
// ─────────────────────────────────────────────────────────────────────────────

import { cn } from '../../lib/cn';

const BASE =
  'inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold ' +
  'transition-colors duration-150 focus-visible:outline focus-visible:outline-2 ' +
  'focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] ' +
  'disabled:opacity-50 disabled:cursor-not-allowed';

const VARIANTS = {
  primary:
    'bg-[var(--color-accent)] text-[var(--color-accent-fg)] hover:bg-[var(--color-accent-hover)]',
  outline:
    'border border-[var(--color-border)] text-[var(--color-text-primary)] ' +
    'hover:bg-[var(--color-surface)] hover:border-[var(--color-accent)]',
};

export function Button({
  href,
  variant = 'primary',
  className,
  children,
  download,
  ...props
}) {
  const classes = cn(BASE, VARIANTS[variant], className);

  if (href) {
    return (
      <a href={href} className={classes} download={download} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
