import { site } from "@/data/site";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="hero-bg relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            Available for freelance projects · {site.location} &amp; remote
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="font-display mt-6 max-w-4xl text-4xl leading-[1.08] font-bold text-zinc-900 sm:text-6xl dark:text-white">
            I turn manual, repetitive operations into{" "}
            <span className="text-emerald-600 dark:text-emerald-400">AI systems that run themselves.</span>
          </h1>
        </Reveal>

        <Reveal delay={120}>
          <p className="font-display mt-5 text-lg font-semibold text-zinc-800 sm:text-xl dark:text-zinc-200">
            {site.role}
          </p>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-600 sm:text-xl dark:text-zinc-400">
            {site.subheadline}
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={site.calendarLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-emerald-500 px-7 py-3.5 text-sm font-semibold text-emerald-950 shadow-lg shadow-emerald-500/25 transition hover:-translate-y-0.5 hover:bg-emerald-400"
            >
              Book a call
            </a>
            <a
              href="#projects"
              className="rounded-full border border-zinc-300 px-7 py-3.5 text-sm font-semibold text-zinc-700 transition hover:-translate-y-0.5 hover:border-emerald-500/60 hover:text-emerald-600 dark:border-zinc-700 dark:text-zinc-300 dark:hover:text-emerald-400"
            >
              See the work →
            </a>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <dl className="mt-16 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-zinc-200 pt-10 sm:grid-cols-4 dark:border-zinc-800">
            {site.stats.map((s) => (
              <div key={s.label}>
                <dt className="order-2 mt-1 text-sm text-zinc-500 dark:text-zinc-400">{s.label}</dt>
                <dd className="font-display order-1 text-3xl font-bold text-zinc-900 sm:text-4xl dark:text-white">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
