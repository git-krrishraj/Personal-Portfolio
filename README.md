# Portfolio — Krrish Raj

A minimal, fast, single-page personal portfolio built with **React + Vite**, **Tailwind CSS v4**, and a lazily-loaded **Spline** 3D hero.

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env
# → open .env and fill in your values (see "Environment Variables" below)

# 3. Start the dev server
npm run dev

# 4. Open http://localhost:5173
```

---

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `VITE_WEB3FORMS_KEY` | For contact form | Get your free key at [web3forms.com](https://web3forms.com) |
| `VITE_SPLINE_SCENE_URL` | For 3D hero | Publish your scene in Spline → copy the URL. Leave blank and the site shows a static poster. |

> **Never commit `.env`** — it is in `.gitignore`. Only `.env.example` is committed.

---

## Editing Content

All site content lives in `src/data/`. You never need to touch component files to update text.

| File | What to edit |
|---|---|
| [`src/data/site.js`](src/data/site.js) | Name, role, tagline, email, social links, about paragraphs |
| [`src/data/skills.js`](src/data/skills.js) | Skill categories and tags (add/remove freely) |
| [`src/data/projects.js`](src/data/projects.js) | Project cards (title, description, stack, links, image) |
| [`src/data/experience.js`](src/data/experience.js) | Education and work timeline entries |

### Adding Your Resume

Drop your PDF at:
```
public/resume.pdf
```
The "Download resume" button in the hero automatically serves it. The filename in the download dialog is controlled by the `download` attribute in `Hero.jsx` (`"Resume.pdf"`).

### Adding Project Screenshots

1. Place images in `public/images/` (e.g. `public/images/project-1.webp`).
2. Set the `image` field in `src/data/projects.js` to `"/images/project-1.webp"`.
3. Recommended size: **800 × 450 px** (16:9), WebP format.

### Replacing the OG Image and Hero Poster

| File | Purpose |
|---|---|
| `public/og-image.png` | Social share preview (1200 × 630 px recommended) |
| `public/images/hero-poster.webp` | Static fallback for the Spline hero (520 × 520 px) |
| `public/favicon.svg` | Browser tab icon (edit the SVG to change the letter/color) |

---

## Deploying

The site is a static Vite build (`npm run build` → `dist/`). Deploy anywhere that serves static files.

### Vercel (recommended)
```bash
npx vercel
# Follow prompts. Set env vars in the Vercel dashboard under Settings → Environment Variables.
```

### Netlify
```bash
npx netlify deploy --prod --dir=dist
# Or connect your repo in the Netlify dashboard.
# Build command: npm run build   Publish directory: dist
```

### Cloudflare Pages
```bash
npx wrangler pages deploy dist
# Or connect your repo in the Cloudflare dashboard.
# Build command: npm run build   Build output directory: dist
```

> Set `VITE_WEB3FORMS_KEY` and `VITE_SPLINE_SCENE_URL` as environment variables in your hosting provider's dashboard — **not** in a committed `.env` file.

---

## TODO — Fill in Before Launch

Replace every item below with your real information:

### In `src/data/site.js`
- [ ] `name` — your full name
- [ ] `tagline` — one-line description of what you build
- [ ] `email` — your contact email
- [ ] `siteUrl` — your deployed domain
- [ ] `ogDescription` — short description for search / social
- [ ] `aboutParagraphs` — 1–2 paragraphs about you

### In `src/data/skills.js`
- [ ] Fill in your actual skills per category

### In `src/data/projects.js`
- [ ] Replace all 3 placeholder entries with real projects
- [ ] Add project screenshots to `public/images/` and reference them

### In `src/data/experience.js`
- [ ] Fill in your university name, degree, period, location
- [ ] Add real work / internship experience

### In `public/`
- [ ] `resume.pdf` — your actual resume
- [ ] `og-image.png` — 1200 × 630 px social preview image
- [ ] `images/hero-poster.webp` — 520 × 520 px poster for the hero

### In `index.html`
- [ ] Update `<title>` and all `og:*` / `twitter:*` meta tags with your real name and URL
- [ ] Update the JSON-LD `Person` block

### Environment Variables
- [ ] `VITE_WEB3FORMS_KEY` — get from [web3forms.com](https://web3forms.com)
- [ ] `VITE_SPLINE_SCENE_URL` — once you build your Spline scene

---

## Project Structure

```
portfolio/
  public/
    resume.pdf                 ← add your real PDF here
    favicon.svg                ← edit to match your initials/brand
    og-image.png               ← 1200×630 social preview
    images/hero-poster.webp    ← 520×520 hero fallback image
  src/
    components/
      layout/   Navbar.jsx, Footer.jsx
      sections/ Hero.jsx, About.jsx, Skills.jsx, Projects.jsx,
                Experience.jsx, Contact.jsx, ContactForm.jsx
      ui/       Button.jsx, SectionHeading.jsx, Reveal.jsx,
                ThemeToggle.jsx, ProjectCard.jsx
      three/    SplineHero.jsx
    data/       site.js, skills.js, projects.js, experience.js
    hooks/      useCanRender3D.js, useTheme.js, useActiveSection.js
    lib/        cn.js
    App.jsx, main.jsx, index.css
  index.html
  vite.config.js
  .env.example
```

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React + Vite | UI framework + build tool |
| Tailwind CSS v4 | Styling (CSS-first, `@theme` tokens in `index.css`) |
| `motion` | Scroll-reveal animations (`LazyMotion` + `domAnimation`) |
| `@splinetool/react-spline` | 3D hero (lazily loaded, gated, fully optional) |
| `react-icons` | Icons (tree-shaken, individual imports) |
| `@fontsource-variable/inter` | Self-hosted Inter variable font |
| Web3Forms | Contact form backend (no server required) |

No TypeScript, no `tailwind.config.js`, no extra libraries.
