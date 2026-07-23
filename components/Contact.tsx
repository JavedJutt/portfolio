"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/data/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");

    // With a Formspree endpoint configured, submit directly.
    if (site.formspreeEndpoint) {
      try {
        setStatus("sending");
        const res = await fetch(site.formspreeEndpoint, {
          method: "POST",
          headers: { Accept: "application/json", "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message }),
        });
        if (!res.ok) throw new Error("failed");
        form.reset();
        setStatus("sent");
      } catch {
        setStatus("error");
      }
      return;
    }

    // No endpoint configured: fall back to the visitor's email client.
    const subject = encodeURIComponent(`Project inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  const inputClasses =
    "w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 transition outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:placeholder-zinc-500";

  return (
    <section id="contact" className="bg-white py-20 sm:py-28 dark:bg-zinc-950/60">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-2">
          <Reveal>
            <div>
              <SectionHeading
                eyebrow="Contact"
                title="Got a process your team does by hand? Let's automate it."
                intro="Tell me what's eating your team's time. I'll reply with an honest take on whether it's automatable, what it would cost, and how long it would take."
              />
              <div className="mt-8 space-y-3 text-sm">
                <a
                  href={site.calendarLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-medium text-zinc-700 transition hover:text-emerald-600 dark:text-zinc-300 dark:hover:text-emerald-400"
                >
                  📅 Book a call with me
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="block font-medium text-zinc-700 transition hover:text-emerald-600 dark:text-zinc-300 dark:hover:text-emerald-400"
                >
                  ✉ {site.email}
                </a>
                <a
                  href={site.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-medium text-zinc-700 transition hover:text-emerald-600 dark:text-zinc-300 dark:hover:text-emerald-400"
                >
                  🟢 WhatsApp: {site.whatsapp}
                </a>
                <a
                  href={site.links.upwork}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-medium text-zinc-700 transition hover:text-emerald-600 dark:text-zinc-300 dark:hover:text-emerald-400"
                >
                  ↗ Hire me on Upwork
                </a>
                <a
                  href={site.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-medium text-zinc-700 transition hover:text-emerald-600 dark:text-zinc-300 dark:hover:text-emerald-400"
                >
                  ↗ GitHub
                </a>
                {site.links.linkedin && (
                  <a
                    href={site.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block font-medium text-zinc-700 transition hover:text-emerald-600 dark:text-zinc-300 dark:hover:text-emerald-400"
                  >
                    ↗ LinkedIn
                  </a>
                )}
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input required name="name" placeholder="Your name" className={inputClasses} />
                <input required name="email" type="email" placeholder="Your email" className={inputClasses} />
              </div>
              <textarea
                required
                name="message"
                rows={6}
                placeholder="What would you like to build or automate?"
                className={inputClasses}
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-400 disabled:opacity-60 sm:w-auto"
              >
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
              {status === "sent" && (
                <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                  Thanks — your message is on its way. I usually reply within 24 hours.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm font-medium text-red-500">
                  Something went wrong. Email me directly at {site.email}.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
