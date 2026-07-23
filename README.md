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

## ⚠️ Placeholders to review before going live

1. **`data/site.ts` → `url`** — currently `https://javed.dev`. Set your real domain (used in SEO/OG tags).
2. **`data/site.ts` → `formspreeEndpoint`** — empty. Without it the contact form opens the visitor's email client (works, but less smooth). Create a free form at formspree.io and paste the endpoint for direct submission.
3. **`data/site.ts` → `stats`** — "50+ systems", "500k+ users", "8 industries" are taken from your Upwork bio and project claims. Confirm you're comfortable publishing them.
4. **`data/testimonials.ts`** — empty by design (no invented quotes). Paste real Upwork review snippets here.
5. **Project copy** in `data/projects.ts` — written from your Upwork case studies and repo analysis. Skim for client-confidentiality issues (e.g. the "AI CEO" description).

## Structure

```
app/          layout (fonts, SEO, theme), page, global styles, favicon
components/   one component per section + shared primitives (Reveal, ThemeToggle…)
data/         all editable content (see table above)
```
