// src/data/projects.js
// ─────────────────────────────────────────────────────────────────────────────
// Add your real projects here. All fields that say "TODO" need your content.
//
// Fields:
//   id          — unique string slug
//   title       — project name
//   problem     — one sentence: what problem does it solve?
//   description — 2-3 sentences about what you built and how
//   stack       — array of technology strings shown as tags
//   githubUrl   — link to repo (required)
//   liveUrl     — link to live demo (optional, omit or set null)
//   video       — path relative to /public, e.g. "/videos/project-1.mp4" (optional)
//   image       — path relative to /public, e.g. "/images/project-1.webp" or imported asset
//                 (optional; acts as poster if video is present, or fallback)
// ─────────────────────────────────────────────────────────────────────────────
export const projects = [
  {
    id: 'project-1',
    title: 'Resume-AI',
    problem: 'AI powered resume analysis and preperation planner for targeted job roles.',
    description:
      'Gemini powered application which allows users to compare their CVs with their desired job profiles and find out the areas they are lacking in along with suggested help,  currently in development.',
    stack: ['ReactJS', 'MongoDB', 'ExpressJS', 'NodeJS', 'Gemini API'],
    githubUrl: 'https://github.com/git-krrishraj/Resume-AI',
    liveUrl: null,
    video: '/videos/resume-video.mp4',
    image: null,
  },
  {
    id: 'project-2',
    title: 'Banking-System-Backend-Environment',
    problem: 'Secure backend infrastructure mimicking real-world banking operations, account ledgers, and funds transfers.',
    description:
      'Robust banking engine featuring user account management, double-entry style transaction ledgers, JWT cookie-based authorization, and real-time transaction receipt emails via Nodemailer.',
    stack: ['NodeJS', 'ExpressJS', 'MongoDB', 'JWT', 'Bcrypt', 'Nodemailer'],
    githubUrl: 'https://github.com/git-krrishraj/Banking-System-Backend-Environment',
    liveUrl: null,
    video: '/videos/banking-video.mp4',
    image: null,
  },
  {
    id: 'project-3',
    title: 'Employee-Management-System',
    problem: 'Role-based task delegation and lifecycle tracking platform for organizations.',
    description:
      'Dynamic task tracking application with dual-role authentication (Admin vs Employee), enabling admins to assign work while employees manage live task transitions (Active, Completed, Failed).',
    stack: ['ReactJS', 'Tailwind CSS', 'Vite', 'JavaScript', 'Local Storage'],
    githubUrl: 'https://github.com/git-krrishraj/Employee-Management-System',
    liveUrl: null,
    video: '/videos/employee-video.mp4',
    image: null,
  },
];
