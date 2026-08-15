"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";

export type SectionColorVariant = "orange" | "green" | "blue" | "white";

export type SectionColorImage = {
  src: string;
  alt?: string;
};

export type SectionColorProps = {
  title: string;
  description: string;
  color?: SectionColorVariant;
  /** 1–4 imágenes; el gap se ajusta según el número (Figma) */
  images: SectionColorImage[];
  buttonLabel?: string;
  buttonHref?: string;
  className?: string;
};

const backgroundByColor: Record<SectionColorVariant, string> = {
  orange: "bg-background-coral",
  green: "bg-background-green",
  blue: "bg-background-blue",
  white: "bg-background-white",
};

/** Gap entre imágenes según cantidad — Figma ImageWrapper */
function gapForImageCount(count: number): string {
  if (count >= 4) return "gap-12";
  if (count === 3) return "gap-20";
  return "gap-32";
}

/** Sección coloreada — Figma node 38:214 (`section-color`) */
export function SectionColor({
  title,
  description,
  color = "orange",
  images,
  buttonLabel = "Saber más",
  buttonHref,
  className,
}: SectionColorProps) {
  const visibleImages = images.slice(0, 4);

  return (
    <section
      className={[
        "flex w-full flex-col items-center justify-center gap-32 px-12 py-section-xl",
        backgroundByColor[color],
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Reveal className="w-full max-w-[1000px]">
        <div className="flex w-full flex-col items-center justify-center gap-16 text-center text-neutral-600">
          <h2 className="font-montserrat w-full text-[length:var(--title-h2-size-mobile)] leading-[var(--line-height-32)] font-normal tracking-[var(--letter-spacing-4)] uppercase sm:text-[length:var(--title-h2-size-desktop)]">
            {title}
          </h2>
          <p className="font-lora w-full text-[length:var(--size-16)] leading-[var(--line-height-26)] font-normal tracking-[var(--letter-spacing-0)]">
            {description}
          </p>
        </div>
      </Reveal>

      {visibleImages.length > 0 ? (
        <div
          className={[
            "grid w-full max-w-[1200px]",
            visibleImages.length === 1
              ? "grid-cols-1"
              : visibleImages.length === 2
                ? "grid-cols-1 sm:grid-cols-2"
                : visibleImages.length === 3
                  ? "grid-cols-1 sm:grid-cols-3"
                  : "grid-cols-2 lg:grid-cols-4",
            gapForImageCount(visibleImages.length),
          ].join(" ")}
        >
          {visibleImages.map((image, index) => (
            <Reveal
              key={`${image.src}-${index}`}
              delayMs={100 + index * 90}
              className="min-w-0"
            >
              <div className="section-color-image relative h-[240px] min-w-0 overflow-hidden rounded-s sm:h-[360px] lg:h-[437px]">
                <Image
                  src={image.src}
                  alt={image.alt ?? ""}
                  fill
                  className="object-cover"
                  sizes={
                    visibleImages.length === 1
                      ? "(max-width: 1200px) 100vw, 1200px"
                      : `(max-width: 1200px) ${Math.round(100 / visibleImages.length)}vw, ${Math.round(1200 / visibleImages.length)}px`
                  }
                />
              </div>
            </Reveal>
          ))}
        </div>
      ) : null}

      <Reveal delayMs={220}>
        {buttonHref ? (
          <Button href={buttonHref}>{buttonLabel}</Button>
        ) : (
          <Button>{buttonLabel}</Button>
        )}
      </Reveal>
    </section>
  );
}
