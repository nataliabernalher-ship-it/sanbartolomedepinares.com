import Image from "next/image";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";

export type Section2ColBtnProps = {
  accentText: string;
  title: string;
  description: ReactNode;
  imageSrc: string;
  imageAlt?: string;
  buttonLabel?: string;
  buttonHref?: string;
  /** Fondo de sección; por defecto blanco */
  backgroundClassName?: string;
  className?: string;
};

/** Dos columnas: texto + botón | imagen — Figma node 38:145 (`section-2col-btn`) */
export function Section2ColBtn({
  accentText,
  title,
  description,
  imageSrc,
  imageAlt = "",
  buttonLabel = "Saber más",
  buttonHref,
  backgroundClassName = "bg-background-white",
  className,
}: Section2ColBtnProps) {
  return (
    <section
      className={[
        "flex w-full flex-wrap content-center items-center justify-center gap-[42px] px-12 py-80",
        backgroundClassName,
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="flex w-full max-w-[618px] flex-col items-start gap-[19px]">
        <p className="font-bad-script w-full text-[24px] leading-[var(--line-height-32)] tracking-[var(--letter-spacing-0)] text-accent-100">
          {accentText}
        </p>
        <h2 className="font-montserrat w-full text-[length:var(--size-24)] leading-[var(--line-height-32)] font-normal tracking-[var(--letter-spacing-4)] text-text-title uppercase">
          {title}
        </h2>
        <div className="font-lora w-full text-[length:var(--size-16)] leading-[var(--line-height-24)] font-normal tracking-[var(--letter-spacing-0)] text-text-paragraph [&_p+_p]:mt-4">
          {typeof description === "string" ? <p>{description}</p> : description}
        </div>
        {buttonHref ? (
          <Button href={buttonHref}>{buttonLabel}</Button>
        ) : (
          <Button>{buttonLabel}</Button>
        )}
      </div>

      <div className="relative h-[280px] w-full max-w-[620px] shrink-0 overflow-hidden sm:h-[360px] lg:h-[420px]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 620px) 100vw, 620px"
        />
      </div>
    </section>
  );
}
