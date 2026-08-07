import Image from "next/image";
import type { ReactNode } from "react";

export type Section2ColTextImageLayout = "default" | "reverse";

export type Section2ColTextImageProps = {
  title?: string;
  children: ReactNode;
  imageSrc: string;
  imageAlt?: string;
  /** `default`: texto | imagen · `reverse`: imagen | texto */
  layout?: Section2ColTextImageLayout;
  /** Ajuste del object-fit de la imagen (mapas: `contain`) */
  imageFit?: "cover" | "contain";
  className?: string;
};

/** Dos columnas texto + imagen — Figma node 38:461 (`section-2col-Text+image`) */
export function Section2ColTextImage({
  title,
  children,
  imageSrc,
  imageAlt = "",
  layout = "default",
  imageFit = "cover",
  className,
}: Section2ColTextImageProps) {
  const isReverse = layout === "reverse";

  return (
    <section
      className={[
        "flex w-full flex-col content-center items-center justify-center bg-neutral-100 px-12 py-section-l lg:flex-row lg:flex-wrap",
        isReverse ? "gap-[39px] lg:flex-row-reverse" : "gap-32",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="flex w-full max-w-[612px] flex-col items-start justify-center gap-24">
        {title ? (
          <h2 className="font-montserrat w-full text-[length:var(--title-h2-size-mobile)] leading-[var(--line-height-32)] font-normal tracking-[var(--letter-spacing-4)] text-text-title uppercase sm:text-[length:var(--title-h2-size-desktop)]">
            {title}
          </h2>
        ) : null}
        <div className="font-lora w-full text-[length:var(--size-16)] leading-[var(--line-height-24)] font-normal tracking-[var(--letter-spacing-0)] text-text-paragraph [&>*+*]:mt-6 [&_h3]:font-montserrat [&_h3]:text-[length:var(--title-h2-size-mobile)] [&_h3]:leading-[var(--line-height-32)] [&_h3]:tracking-[var(--letter-spacing-4)] [&_h3]:text-text-title [&_h3]:uppercase sm:[&_h3]:text-[length:var(--title-h2-size-desktop)]">
          {children}
        </div>
      </div>

      <div
        className={[
          "relative h-[320px] w-full max-w-[612px] shrink-0 overflow-hidden rounded-s sm:h-[400px] lg:h-[488px]",
          imageFit === "contain" ? "bg-neutral-100" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className={imageFit === "contain" ? "object-contain" : "object-cover"}
          sizes="(max-width: 612px) 100vw, 612px"
        />
      </div>
    </section>
  );
}
