"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Wraps children in a container that fades/slides in when scrolled
 * into view. Elements already on screen at mount reveal immediately,
 * so nothing above the fold ever sits at reduced opacity waiting for
 * a scroll event. Respects prefers-reduced-motion via CSS.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const show = () => el.classList.add("is-visible");

    // Already (even partially) within the viewport: reveal right away.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      show();
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      show();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            show();
            observer.unobserve(el);
          }
        });
      },
      // Low threshold: start revealing as soon as the element edges in,
      // so tall blocks never linger half-faded.
      { threshold: 0.05 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </div>
  );
}
