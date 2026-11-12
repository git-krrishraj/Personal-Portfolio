// src/components/layout/Navbar.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Sticky minimal navigation bar.
// Desktop: logo on left, nav links + ThemeToggle on right.
// Mobile:  logo + ThemeToggle + hamburger; nav links open in an overlay drawer.
// Active section is highlighted via useActiveSection.
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useEffect, useCallback } from 'react';
import { RiMenu4Line, RiCloseLine } from 'react-icons/ri';
import { ThemeToggle } from '../ui/ThemeToggle';
import { useActiveSection } from '../../hooks/useActiveSection';
import { site } from '../../data/site';
import { cn } from '../../lib/cn';

const NAV_LINKS = [
  { label: 'About',      href: '#about'      },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact'    },
];

const SECTION_IDS = NAV_LINKS.map((l) => l.href.slice(1));

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeId = useActiveSection(SECTION_IDS);

  // Add shadow after user scrolls down
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      {/* Skip link — first focusable element */}
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <header
        className={cn(
          'sticky top-0 z-40 w-full border-b border-[var(--color-border)] bg-[var(--color-bg)]/90 backdrop-blur-sm transition-shadow duration-200',
          scrolled && 'shadow-sm',
        )}
      >
        <nav
          aria-label="Primary navigation"
          className="mx-auto flex h-14 max-w-[var(--max-content)] items-center justify-between px-4 sm:px-6 lg:px-8"
        >
          {/* Logo / name */}
          <a
            href="#hero"
            className="text-sm font-bold text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
          >
            {site.name === 'TODO full name' ? 'Portfolio' : site.name}
          </a>

          {/* Desktop nav links */}
          <ul className="hidden sm:flex items-center gap-1" role="list">
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.slice(1);
              const isActive = activeId === id;
              return (
                <li key={href}>
                  <a
                    href={href}
                    className={cn(
                      'rounded-md px-3 py-1.5 text-sm font-medium transition-colors duration-150',
                      isActive
                        ? 'text-[var(--color-accent)]'
                        : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]',
                    )}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right side: ThemeToggle + mobile hamburger */}
          <div className="flex items-center gap-1">
            <ThemeToggle />
            <button
              className="sm:hidden rounded-lg p-2 text-[var(--color-text-muted)] hover:bg-[var(--color-surface)] transition-colors"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? (
                <RiCloseLine size={20} aria-hidden="true" />
              ) : (
                <RiMenu4Line size={20} aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer overlay */}
      {menuOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="fixed inset-0 z-30 flex flex-col bg-[var(--color-bg)] pt-14 sm:hidden"
        >
          <ul className="flex flex-col gap-1 p-4" role="list">
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.slice(1);
              const isActive = activeId === id;
              return (
                <li key={href}>
                  <a
                    href={href}
                    onClick={closeMenu}
                    className={cn(
                      'block rounded-lg px-4 py-3 text-base font-medium transition-colors',
                      isActive
                        ? 'bg-[var(--color-surface)] text-[var(--color-accent)]'
                        : 'text-[var(--color-text-muted)] hover:bg-[var(--color-surface)] hover:text-[var(--color-text-primary)]',
                    )}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}
