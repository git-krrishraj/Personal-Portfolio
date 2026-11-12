// src/components/ui/ProjectCard.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Card for a single project. Receives a project object from projects.js.
// Shows a gradient placeholder when no image is provided.
// ─────────────────────────────────────────────────────────────────────────────

import { RiGithubLine, RiExternalLinkLine } from 'react-icons/ri';

export function ProjectCard({ project }) {
  const { title, problem, description, stack, githubUrl, liveUrl, image } = project;

  return (
    <article className="flex flex-col rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden transition-shadow duration-200 hover:shadow-lg">
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
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-base font-bold text-[var(--color-text-primary)]">{title}</h3>
        <p className="text-sm font-medium text-[var(--color-accent)]">{problem}</p>
        <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{description}</p>

        {/* Stack tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-[var(--color-surface-hover)] px-2 py-0.5 text-xs font-medium text-[var(--color-text-muted)]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-1">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} on GitHub`}
              className="inline-flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
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
              className="inline-flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
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
