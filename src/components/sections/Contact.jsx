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
      className="py-28 lg:py-36 px-4 sm:px-6 lg:px-8 bg-[var(--color-surface)]"
    >
      <div className="mx-auto w-full max-w-[var(--max-content)]">
        <Reveal>
          <SectionHeading
            id="contact-heading"
            title="Get in touch"
            subtitle="Open to internships, collaborations, and interesting conversations."
            center={true}
          />
        </Reveal>

        <div className="mx-auto max-w-4xl grid gap-10 lg:gap-14 lg:grid-cols-2 lg:items-start">
          {/* Left — blurb + links */}
          <Reveal delay={0.05}>
            <div className="flex flex-col gap-6">
              <p className="text-base leading-relaxed text-[var(--color-text-muted)]">
                Whether you have a project in mind, want to collaborate, or just want to say hi — my inbox is always open.
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-3.5 text-sm font-medium text-[var(--color-text-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all shadow-xs"
                >
                  <RiMailLine size={18} className="text-[var(--color-accent)] shrink-0" aria-hidden="true" />
                  <span className="truncate">{site.email}</span>
                </a>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-3.5 text-sm font-medium text-[var(--color-text-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all shadow-xs"
                >
                  <RiGithubLine size={18} className="text-[var(--color-accent)] shrink-0" aria-hidden="true" />
                  <span className="truncate">github.com/git-krrishraj</span>
                </a>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-3.5 text-sm font-medium text-[var(--color-text-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all shadow-xs"
                >
                  <RiLinkedinBoxLine size={18} className="text-[var(--color-accent)] shrink-0" aria-hidden="true" />
                  <span className="truncate">linkedin.com/in/krrish-raj-78a665364</span>
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
