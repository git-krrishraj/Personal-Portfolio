// src/components/sections/ContactForm.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Contact form using Web3Forms API.
// Fields: name, email, message + hidden honeypot.
// States: idle | sending | success | error.
// Access key from VITE_WEB3FORMS_KEY env var.
// ─────────────────────────────────────────────────────────────────────────────

import { useState } from 'react';
import { RiSendPlaneLine, RiLoader4Line } from 'react-icons/ri';
import { Button } from '../ui/Button';
import { site } from '../../data/site';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function FieldError({ message }) {
  if (!message) return null;
  return (
    <p role="alert" className="mt-1 text-xs text-red-500">
      {message}
    </p>
  );
}

export function ContactForm() {
  const [fields, setFields] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const isConfigured = Boolean(ACCESS_KEY);

  function validate() {
    const e = {};
    if (!fields.name.trim())          e.name    = 'Name is required.';
    if (!fields.email.trim())         e.email   = 'Email is required.';
    else if (!EMAIL_RE.test(fields.email)) e.email = 'Enter a valid email address.';
    if (!fields.message.trim())       e.message = 'Message is required.';
    return e;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFields((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: '' }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setStatus('sending');

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: fields.name.trim(),
          email: fields.email.trim(),
          message: fields.message.trim(),
          botcheck: '',           // must be empty string — non-empty = bot
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus('success');
        setFields({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  const inputClass =
    'w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2.5 text-sm ' +
    'text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] ' +
    'focus:border-[var(--color-accent)] focus:outline-none transition-colors';

  if (!isConfigured) {
    return (
      <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 text-sm text-[var(--color-text-muted)]">
        <p>
          Contact form is not configured yet.{' '}
          <a
            href={`mailto:${site.email}`}
            className="text-[var(--color-accent)] underline underline-offset-2 hover:no-underline"
          >
            Email me directly
          </a>{' '}
          or set <code className="font-mono text-xs bg-[var(--color-surface-hover)] px-1 rounded">VITE_WEB3FORMS_KEY</code> in your <code className="font-mono text-xs bg-[var(--color-surface-hover)] px-1 rounded">.env</code> file.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-4"
      aria-label="Contact form"
    >
      {/* Honeypot — must be hidden from real users */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      {/* Name */}
      <div>
        <label htmlFor="cf-name" className="block mb-1 text-sm font-medium text-[var(--color-text-primary)]">
          Name
        </label>
        <input
          id="cf-name"
          type="text"
          name="name"
          value={fields.name}
          onChange={handleChange}
          autoComplete="name"
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'cf-name-err' : undefined}
          placeholder="Your name"
          className={inputClass}
        />
        <FieldError message={errors.name} />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="cf-email" className="block mb-1 text-sm font-medium text-[var(--color-text-primary)]">
          Email
        </label>
        <input
          id="cf-email"
          type="email"
          name="email"
          value={fields.email}
          onChange={handleChange}
          autoComplete="email"
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'cf-email-err' : undefined}
          placeholder="you@example.com"
          className={inputClass}
        />
        <FieldError message={errors.email} />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="cf-message" className="block mb-1 text-sm font-medium text-[var(--color-text-primary)]">
          Message
        </label>
        <textarea
          id="cf-message"
          name="message"
          value={fields.message}
          onChange={handleChange}
          rows={5}
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'cf-message-err' : undefined}
          placeholder="Hi Krrish, I'd love to chat about…"
          className={`${inputClass} resize-none`}
        />
        <FieldError message={errors.message} />
      </div>

      {/* Submit */}
      <Button
        type="submit"
        variant="primary"
        disabled={status === 'sending'}
        className="self-start"
      >
        {status === 'sending' ? (
          <>
            <RiLoader4Line className="animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            <RiSendPlaneLine aria-hidden="true" />
            Send message
          </>
        )}
      </Button>

      {/* Status messages */}
      <div aria-live="polite" aria-atomic="true">
        {status === 'success' && (
          <p className="text-sm text-green-600 dark:text-green-400 font-medium">
            ✓ Message sent! I'll get back to you soon.
          </p>
        )}
        {status === 'error' && (
          <p className="text-sm text-red-500">
            Something went wrong.{' '}
            <a
              href={`mailto:${site.email}`}
              className="underline underline-offset-2 hover:no-underline"
            >
              Email me directly
            </a>{' '}
            instead.
          </p>
        )}
      </div>
    </form>
  );
}
