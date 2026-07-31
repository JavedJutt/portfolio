# Javed A. — Portfolio

Modern, responsive portfolio built with **Next.js (App Router) + Tailwind CSS v4**. Dark/light mode, scroll animations, SEO meta tags, and fully data-driven content.

## Run locally

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Deploy

**Vercel (recommended):** push this folder to a GitHub repo, then "Import Project" on vercel.com. Zero config needed.

**Netlify:** import the repo; Netlify auto-detects Next.js. Zero config needed.

## Editing content — no component changes required

All content lives in `data/`:

| File | What it controls |
|---|---|
| `data/site.ts` | Name, role, email, links, hero copy, stats, Formspree endpoint |
| `data/projects.ts` | Project cards (problem / solution / impact / stack / links) |
| `data/services.ts` | The 4-step "How I Work" process |
| `data/skills.ts` | Skill groups and tags |
| `data/testimonials.ts` | Testimonial cards (empty = shows Upwork-reviews fallback) |

## Optional improvements

1. **`data/site.ts` → `formspreeEndpoint`** — empty. Without it the contact form opens the visitor's email client (works, but less smooth). Create a free form at formspree.io and paste the endpoint for direct submission.
2. **`data/testimonials.ts`** — currently holds the two real public Upwork (agency) reviews. Append more real quotes as you collect them (e.g. from SyncFounder stakeholders).

## Structure

```
app/          layout (fonts, SEO, theme), page, global styles, favicon
components/   one component per section + shared primitives (Reveal, ThemeToggle…)
data/         all editable content (see table above)
```
