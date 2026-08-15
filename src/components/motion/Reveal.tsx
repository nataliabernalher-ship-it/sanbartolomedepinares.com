"use client";

import {
  useEffect,
  useRef,
  type CSSProperties,
  type ReactNode,
} from "react";

export type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Retraso en ms tras entrar en viewport */
  delayMs?: number;
  /** Solo animar una vez (por defecto true) */
  once?: boolean;
};

/** Fade-up al entrar en viewport — respeta prefers-reduced-motion */
export function Reveal({
  children,
  className,
  delayMs = 0,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) {
      el.dataset.visible = "true";
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        el.dataset.visible = "true";
        if (once) observer.disconnect();
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      className={["reveal", className ?? ""].filter(Boolean).join(" ")}
      style={
        delayMs
          ? ({ "--reveal-delay": `${delayMs}ms` } as CSSProperties)
          : undefined
      }
    >
      {children}
    </div>
  );
}
