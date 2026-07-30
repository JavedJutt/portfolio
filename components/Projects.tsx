"use client";

import { useState } from "react";
import Image from "next/image";
import { categories, projects } from "@/data/projects";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

// Case-study screenshot with a graceful fallback while the real
// image file hasn't been dropped into /public/images/case-studies yet.
function CardImage({ src, title }: { src: string; title: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="mt-5 flex aspect-video items-center justify-center rounded-xl border border-dashed border-zinc-300 bg-zinc-100/60 dark:border-zinc-700 dark:bg-zinc-800/40">
        <span className="text-xs font-medium tracking-wide text-zinc-400 uppercase dark:text-zinc-500">
          Screenshot coming soon
        </span>
      </div>
    );
  }

  return (
    <div className="relative mt-5 aspect-video overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800">
      <Image
        src={src}
        alt={`${title} — screenshot`}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover"
        onError={() => setFailed(true)}
      />
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const visible = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="bg-white py-20 sm:py-28 dark:bg-zinc-950/60">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="AI & automation projects"
            title="Real problems. Measured outcomes."
            intro="Every project below shipped to production for a real client — AI agents, RAG systems, document AI, and full-stack SaaS. Framed the way I approach them: the problem, what I built, and what changed."
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                  active === c
                    ? "bg-emerald-500 text-emerald-950"
                    : "border border-zinc-200 text-zinc-600 hover:border-emerald-500/50 hover:text-emerald-600 dark:border-zinc-700 dark:text-zinc-400 dark:hover:text-emerald-400"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {visible.map((p) => (
            <article
              key={p.title}
              className="card-lift group flex h-full flex-col rounded-2xl border border-zinc-200 bg-zinc-50 p-7 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/5 dark:border-zinc-800 dark:bg-zinc-900/40"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold tracking-widest text-emerald-600 uppercase dark:text-emerald-400">
                    {p.category}
                  </p>
                  <h3 className="font-display mt-2 text-xl font-bold text-zinc-900 dark:text-white">{p.title}</h3>
                </div>
                {p.metric && (
                  <span className="shrink-0 rounded-full border border-emerald-500/30 bg-emerald-50 px-3 py-1 text-xs font-semibold whitespace-nowrap text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
                    {p.metric}
                  </span>
                )}
              </div>

              <p className="mt-2 text-sm font-medium text-zinc-500 italic dark:text-zinc-400">{p.tagline}</p>

              {p.image && <CardImage src={p.image} title={p.title} />}

              <dl className="mt-5 space-y-4 text-sm leading-relaxed">
                <div>
                  <dt className="font-semibold text-zinc-900 dark:text-zinc-200">The problem</dt>
                  <dd className="mt-1 text-zinc-600 dark:text-zinc-400">{p.problem}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-zinc-900 dark:text-zinc-200">What I built</dt>
                  <dd className="mt-1 text-zinc-600 dark:text-zinc-400">{p.solution}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-zinc-900 dark:text-zinc-200">The impact</dt>
                  <dd className="mt-1 text-zinc-600 dark:text-zinc-400">{p.impact}</dd>
                </div>
              </dl>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md bg-zinc-200/60 px-2 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex flex-wrap gap-4 pt-6">
                {p.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-emerald-600 transition group-hover:underline dark:text-emerald-400"
                  >
                    {l.label} ↗
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
