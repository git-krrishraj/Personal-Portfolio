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
    org: 'National Institute of Technology Jamshedpur',
    role: 'B.Tech — Electrical Engineering',
    period: 'Aug 2025 – present',
    location: 'Jamshedpur, India',
    bullets: [
      'GPA- 9.26',
      'DSA, Competative Programming and core Electrical Engineering subjects.',
    ],
  },
  {
    id: 'work-1',
    type: 'work',
    org: 'Industry & International Relations Club',
    role: 'Web Developer',
    period: 'August 2026 – present',
    location: 'Jamshedpur, India',
    bullets: [
      
    ],
  },
  // Add more entries as needed — they render in order, newest first recommended
];
