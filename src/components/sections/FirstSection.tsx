"use client";

import { useEffect, useRef } from "react";

export type FirstSectionProps = {
  accentText?: string;
  title?: string;
  description?: string;
  backgroundSrc?: string;
  className?: string;
};

/** Bienvenida home — Figma node 55:1563 (`first-section`) */
export function FirstSection({
  accentText = "Os damos la bienvenida",
  title = "San Bartolomé de Pinares en Ávila",
  description = "Entre extensos pinares, tradiciones centenarias y un valioso patrimonio, San Bartolomé de Pinares te invita a descubrir un municipio con identidad propia. Esta web es la puerta de entrada para conocer su historia, sus fiestas, sus lugares de interés y toda la información útil para vecinos y visitantes.",
  backgroundSrc,
  className,
}: FirstSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    if (!section || !image) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let rafId = 0;

    const update = () => {
      rafId = 0;
      if (mediaQuery.matches) {
        image.style.transform = "";
        return;
      }

      const rect = section.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      const progress = (viewHeight - rect.top) / (viewHeight + rect.height);
      const offset = (progress - 0.5) * 320;
      image.style.transform = `translate3d(0, ${offset}px, 0)`;
    };

    const onScroll = () => {
      if (!rafId) rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    mediaQuery.addEventListener("change", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      mediaQuery.removeEventListener("change", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [backgroundSrc]);

  return (
    <section
      ref={sectionRef}
      className={[
        "relative flex w-full flex-col items-center justify-center gap-24 overflow-hidden px-12 py-150",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {backgroundSrc ? (
        <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-50">
          {/* Móvil: object-cover. Desktop: escala Figma. Extra altura para el recorrido parallax. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            ref={imageRef}
            src={backgroundSrc}
            alt=""
            className="absolute top-[-20%] left-0 h-[140%] w-full object-cover object-[center_35%] will-change-transform lg:top-[-25%] lg:h-[240%] lg:max-w-none lg:object-fill lg:object-center"
          />
        </div>
      ) : null}

      <p className="font-bad-script relative z-10 w-full text-center text-[length:var(--accent-text-size-mobile)] leading-[var(--line-height-24)] text-accent-100 sm:text-[length:var(--accent-text-size-desktop)]">
        {accentText}
      </p>
      <h1 className="font-montserrat relative z-10 max-w-[900px] text-center text-[length:var(--title-h1-size-mobile)] leading-[var(--line-height-32)] font-normal tracking-[var(--letter-spacing-4)] text-text-title uppercase sm:text-[length:var(--title-h1-size-desktop)]">
        {title}
      </h1>
      <p className="font-lora relative z-10 max-w-[820px] text-center text-[length:var(--size-16)] leading-[var(--line-height-26)] font-normal tracking-[var(--letter-spacing-0)] text-text-paragraph">
        {description}
      </p>
    </section>
  );
}
