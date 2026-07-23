import { testimonials } from "@/data/testimonials";
import { site } from "@/data/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading eyebrow="Testimonials" title="What clients say." />
        </Reveal>

        {testimonials.length === 0 ? (
          // Shown until real testimonials are added in data/testimonials.ts —
          // deliberately honest instead of fabricated quotes.
          <Reveal delay={80}>
            <div className="mt-12 rounded-2xl border border-dashed border-zinc-300 p-10 text-center dark:border-zinc-700">
              <p className="mx-auto max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
                Client reviews live on my Upwork profile — read them there while I bring them over.
              </p>
              <a
                href={site.links.upwork}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-full border border-emerald-500/50 px-6 py-3 text-sm font-semibold text-emerald-600 transition hover:bg-emerald-500 hover:text-emerald-950 dark:text-emerald-400"
              >
                View reviews on Upwork ↗
              </a>
            </div>
          </Reveal>
        ) : (
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.author} delay={i * 90}>
                <figure className="card-lift h-full rounded-2xl border border-zinc-200 bg-white p-7 dark:border-zinc-800 dark:bg-zinc-900/40">
                  <blockquote className="leading-relaxed text-zinc-700 dark:text-zinc-300">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5">
                    <p className="font-semibold text-zinc-900 dark:text-white">{t.author}</p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      {t.role}
                      {t.project ? ` · ${t.project}` : ""}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
