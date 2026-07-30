import { testimonials } from "@/data/testimonials";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading eyebrow="Testimonials" title="What clients say." />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 90}>
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
      </div>
    </section>
  );
}
