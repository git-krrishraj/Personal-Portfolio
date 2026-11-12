// src/components/ui/ThemeToggle.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Icon button that switches between light and dark theme.
// ─────────────────────────────────────────────────────────────────────────────

import { RiSunLine, RiMoonLine } from 'react-icons/ri';
import { useTheme } from '../../hooks/useTheme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className="rounded-lg p-2 text-[var(--color-text-muted)] hover:bg-[var(--color-surface)] hover:text-[var(--color-text-primary)] transition-colors duration-150"
    >
      {theme === 'dark' ? (
        <RiSunLine size={20} aria-hidden="true" />
      ) : (
        <RiMoonLine size={20} aria-hidden="true" />
      )}
    </button>
  );
}
