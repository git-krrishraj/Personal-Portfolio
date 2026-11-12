// src/components/layout/Footer.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Minimal one-line footer with social icon links.
// ─────────────────────────────────────────────────────────────────────────────

import { RiGithubLine, RiLinkedinBoxLine } from 'react-icons/ri';
import { site } from '../../data/site';

export function Footer() {
  const year = new Date().getFullYear();
  const displayName = site.name === 'TODO full name' ? 'TODO full name' : site.name;

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg)]">
      <div className="mx-auto flex max-w-[var(--max-content)] flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-[var(--color-text-muted)] sm:flex-row sm:px-6 lg:px-8">
        <p>© {year} {displayName} · Built with React &amp; Vite</p>
        <div className="flex items-center gap-3">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="hover:text-[var(--color-accent)] transition-colors"
          >
            <RiGithubLine size={18} aria-hidden="true" />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="hover:text-[var(--color-accent)] transition-colors"
          >
            <RiLinkedinBoxLine size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
