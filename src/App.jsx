// src/App.jsx
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// Section placeholders — filled in Phase 2
function PlaceholderSection({ id, label }) {
  return (
    <section id={id} className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[var(--max-content)]">
        <p className="text-[var(--color-text-muted)] text-sm">[{label} — coming in Phase 2]</p>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PlaceholderSection id="hero"       label="Hero" />
        <PlaceholderSection id="about"      label="About" />
        <PlaceholderSection id="skills"     label="Skills" />
        <PlaceholderSection id="projects"   label="Projects" />
        <PlaceholderSection id="experience" label="Experience" />
        <PlaceholderSection id="contact"    label="Contact" />
      </main>
      <Footer />
    </>
  );
}
