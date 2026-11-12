// src/data/experience.js
// ─────────────────────────────────────────────────────────────────────────────
// Education and work experience entries, rendered as a vertical timeline.
//
// Fields:
//   id      — unique string
//   type    — 'education' | 'work'
//   org     — institution or company name
//   role    — degree / job title
//   period  — e.g. "Aug 2022 – Present"
//   location — city / remote (optional)
//   bullets — array of strings; short achievement / responsibility lines
// ─────────────────────────────────────────────────────────────────────────────

export const experience = [
  {
    id: 'edu-1',
    type: 'education',
    org: 'TODO — University / College Name',
    role: 'B.Tech — Electrical Engineering',
    period: 'TODO — e.g. Aug 2022 – May 2026',
    location: 'TODO — City, India',
    bullets: [
      'TODO — Relevant coursework, GPA, honours, or anything notable.',
      'TODO — Club memberships, hackathons, or academic projects.',
    ],
  },
  {
    id: 'work-1',
    type: 'work',
    org: 'TODO — Company / Organisation Name',
    role: 'TODO — Intern / Developer / Research Assistant',
    period: 'TODO — e.g. May 2024 – Jul 2024',
    location: 'TODO — City or Remote',
    bullets: [
      'TODO — What did you build or contribute? Start with an action verb.',
      'TODO — Quantify impact where possible (e.g. "reduced load time by 40%").',
    ],
  },
  // Add more entries as needed — they render in order, newest first recommended
];
