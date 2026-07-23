// ─────────────────────────────────────────────────────────────
// PLACEHOLDER SECTION — no fabricated quotes.
//
// Add real client testimonials here (e.g. copied from your
// Upwork reviews). Each entry appears as a card. While this
// array is empty, the site shows a tasteful "testimonials
// coming soon" block instead of fake quotes.
// ─────────────────────────────────────────────────────────────

export type Testimonial = {
  quote: string;
  author: string;
  role: string; // e.g. "CEO, Acme Inc."
  project?: string; // optional: which project it relates to
};

export const testimonials: Testimonial[] = [
  // Example (replace with a real one):
  // {
  //   quote: "Javed delivered exactly what he promised, on time.",
  //   author: "Jane Doe",
  //   role: "COO, Example Corp",
  //   project: "AI Executive Co-pilot",
  // },
];
