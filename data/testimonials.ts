// ─────────────────────────────────────────────────────────────
// Real client reviews, quoted from the public Upwork work
// history of the Mergestack agency (client names are not
// public on Upwork). "[They]" marks a neutral editorial
// substitution — the rest is verbatim.
//
// Source: https://www.upwork.com/agencies/~018eb6e26cacde09d8
// To add more, append entries here — quote, author, role.
// ─────────────────────────────────────────────────────────────

export type Testimonial = {
  quote: string;
  author: string;
  role: string; // e.g. "CEO, Acme Inc."
  project?: string; // optional: which project it relates to
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "[They] demonstrated strong expertise in LLM file processing, prompt engineering and application deployment. This was our first AI pilot project which automates a rather complicated workflow which requires both extensive business knowledge and technical implementation. [They] supported us throughout the process and worked closely with us. Thank you very much again.",
    author: "Upwork client — ★ 5.0",
    role: "AI Multi-Level Regulatory Reporting · MVP",
    project: "AI Regulatory Reporting Engine",
  },
  {
    quote: "It has been incredible working with Ahmad, I would suggest him and his team to anyone.",
    author: "Upwork client — ★ 5.0",
    role: "Next.js Platform Migration · 244 hours",
  },
];
