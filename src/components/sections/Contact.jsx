// src/components/sections/Contact.jsx

import { RiMailLine, RiGithubLine, RiLinkedinBoxLine } from 'react-icons/ri';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { ContactForm } from './ContactForm';
import { site } from '../../data/site';

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--color-surface)]"
    >
      <div className="mx-auto max-w-[var(--max-content)]">
        <Reveal>
          <SectionHeading
            id="contact-heading"
            title="Get in touch"
            subtitle="Open to internships, collaborations, and interesting conversations."
          />
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left — blurb + links */}
          <Reveal delay={0.05}>
            <div className="flex flex-col gap-6">
              <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
                Whether you have a project in mind, want to collaborate, or just want to say hi — my inbox is always open.
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
                >
                  <RiMailLine size={16} aria-hidden="true" />
                  {site.email}
                </a>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
                >
                  <RiGithubLine size={16} aria-hidden="true" />
                  github.com/git-krrishraj
                </a>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
                >
                  <RiLinkedinBoxLine size={16} aria-hidden="true" />
                  linkedin.com/in/krrish-raj-78a665364
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right — form */}
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
