// src/lib/cn.js
// Tiny class-name helper — joins strings and filters falsy values.
// No external library required.

export const cn = (...classes) => classes.filter(Boolean).join(' ');
