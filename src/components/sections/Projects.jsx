// src/components/sections/Projects.jsx
// Responsive card grid: 1 col → 2 col (sm) → 3 col (lg)

import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { ProjectCard } from '../ui/ProjectCard';
import { projects } from '../../data/projects';

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-28 lg:py-36 px-4 sm:px-6 lg:px-8 bg-[var(--color-surface)]"
    >
      <div className="mx-auto w-full max-w-[var(--max-content)]">
        <Reveal>
          <SectionHeading
            id="projects-heading"
            title="Projects"
            subtitle="Things I've built."
            center={true}
          />
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
