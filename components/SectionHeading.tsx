export default function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
        {eyebrow}
      </p>
      <h2 className="font-display mt-3 text-3xl font-bold text-zinc-900 sm:text-4xl dark:text-white">{title}</h2>
      {intro && <p className="mt-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">{intro}</p>}
    </div>
  );
}
