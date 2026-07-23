import { services } from "@/data/services";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-28 dark:bg-zinc-950/60">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="How I work"
            title="One engagement. The complete lifecycle."
            intro="Most freelancers hand you code. I hand you a live product. Every project moves through the same four stages — so you always know where things stand and there's never a gap someone else has to fill."
          />
        </Reveal>

        <div className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
          {/* connecting line (desktop) */}
          <div
            aria-hidden
            className="absolute top-6 right-0 left-0 hidden h-px bg-gradient-to-r from-emerald-500/60 via-zinc-300 to-zinc-200 md:block dark:via-zinc-700 dark:to-zinc-800"
          />
          {services.map((s, i) => (
            <Reveal key={s.step} delay={i * 100}>
              <div className="relative">
                <div className="font-display relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-emerald-500/40 bg-emerald-50 text-sm font-bold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
                  {s.step}
                </div>
                <h3 className="font-display mt-5 text-lg font-semibold text-zinc-900 dark:text-white">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{s.description}</p>
                <ul className="mt-4 space-y-1.5">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-zinc-500 dark:text-zinc-500">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-500" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
