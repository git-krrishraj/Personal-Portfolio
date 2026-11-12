// src/data/skills.js
// ─────────────────────────────────────────────────────────────────────────────
// Skills are grouped by category and displayed as tags — NO bars or percentages.
// Add/remove items freely. Each item needs a `label`; `icon` is optional (a
// react-icons component reference imported and used in Skills.jsx).
// ─────────────────────────────────────────────────────────────────────────────

export const skills = [
  {
    id: 'languages',
    category: 'Languages',
    items: [
      { label: 'Python' },
      { label: 'JavaScript' },
      { label: 'C' },
      { label: 'C++' },
      // TODO — add or remove languages
    ],
  },
  {
    id: 'frontend',
    category: 'Frontend',
    items: [
      { label: 'React' },
      { label: 'HTML & CSS' },
      { label: 'Tailwind CSS' },
      // TODO — add or remove
    ],
  },
  {
    id: 'backend',
    category: 'Backend',
    items: [
      { label: 'Node.js' },
      { label: 'Express' },
      // TODO — add or remove
    ],
  },
  {
    id: 'databases',
    category: 'Databases',
    items: [
      { label: 'MongoDB' },
      { label: 'PostgreSQL' },
      // TODO — add or remove
    ],
  },
  {
    id: 'tools',
    category: 'Tools & Platforms',
    items: [
      { label: 'Git & GitHub' },
      { label: 'VS Code' },
      { label: 'Linux' },
      // TODO — add or remove
    ],
  },
];
