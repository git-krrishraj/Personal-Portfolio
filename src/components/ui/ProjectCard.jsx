// src/components/ui/ProjectCard.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Card for a single project. Receives a project object from projects.js.
// Shows a gradient placeholder when no image is provided.
// ─────────────────────────────────────────────────────────────────────────────

import { RiGithubLine, RiExternalLinkLine } from 'react-icons/ri';

export function ProjectCard({ project }) {
  const { title, problem, description, stack, githubUrl, liveUrl, image } = project;

  return (
    <article className="flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] overflow-hidden transition-all duration-200 hover:shadow-lg hover:border-[var(--color-accent)]/40">
      {/* Image / Placeholder */}
      <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
        {image ? (
          <img
            src={image}
            alt={`${title} screenshot`}
            loading="lazy"
            width={800}
            height={450}
            className="h-full w-full object-cover"
          />
        ) : (
          <div
            className="h-full w-full"
            style={{
              background:
                'linear-gradient(135deg, var(--color-accent) 0%, var(--color-surface-hover) 100%)',
              opacity: 0.4,
            }}
            aria-hidden="true"
          />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3.5 p-6 sm:p-7">
        <h3 className="text-base sm:text-lg font-bold text-[var(--color-text-primary)]">{title}</h3>
        <p className="text-sm font-semibold text-[var(--color-accent)]">{problem}</p>
        <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{description}</p>

        {/* Stack tags */}
        <div className="flex flex-wrap gap-2 mt-auto pt-3">
          {stack.map((tech) => (
            <span
              key={tech}
              className="rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] px-2.5 py-1 text-xs font-medium text-[var(--color-text-muted)]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-2">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} on GitHub`}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
            >
              <RiGithubLine size={16} aria-hidden="true" />
              Code
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} live demo`}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
            >
              <RiExternalLinkLine size={16} aria-hidden="true" />
              Live
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
