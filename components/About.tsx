import { site } from "@/data/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const points = [
  {
    title: "Built for business outcomes",
    text: "Every system I ship exists to save time or make money: automating document review from hours to seconds, unifying scattered company knowledge, or replacing manual data entry entirely.",
  },
  {
    title: "One engineer, whole lifecycle",
    text: "Planning, architecture, development, CI/CD, cloud, go-live. You won't need a second freelancer to \"finish\" what I hand over. The deliverable is a running production system.",
  },
  {
    title: "Real production mileage",
    text: "My work is live in healthcare (500k+ practitioners), trade finance, sustainability compliance, e-commerce operations, and SaaS, not toy demos.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="Systems that move your business forward, not just code."
            intro={`I'm ${site.name}, a full-stack and AI engineer with 5+ years of experience and 50+ production-grade systems delivered for startups and growing companies. I specialise in AI automation, RAG systems, and AI agents, and I work directly with clients worldwide.`}
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <div className="card-lift h-full rounded-2xl border border-zinc-200 bg-white p-7 dark:border-zinc-800 dark:bg-zinc-900/40">
                <h3 className="font-display text-lg font-semibold text-zinc-900 dark:text-white">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-400">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-12 max-w-3xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            If your team is copy-pasting between tools, reviewing documents by hand, or sitting on data nobody can
            query, that&apos;s exactly the kind of problem I remove. I&apos;ll tell you honestly where AI helps, where
            plain automation is cheaper, and what it takes to run either in production.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
