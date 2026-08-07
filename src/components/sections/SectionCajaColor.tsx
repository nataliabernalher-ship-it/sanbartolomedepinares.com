import Image from "next/image";
import type { ReactNode } from "react";

export type SectionCajaColorLayout = "default" | "reverse";

export type SectionCajaColorVariant = "coral" | "green" | "blue" | "grey" | "white";

export type SectionCajaColorProps = {
  title?: string;
  children: ReactNode;
  imageSrc: string;
  imageAlt?: string;
  /** `default`: texto | imagen · `reverse`: imagen | texto */
  layout?: SectionCajaColorLayout;
  color?: SectionCajaColorVariant;
  className?: string;
};

const backgroundByColor: Record<SectionCajaColorVariant, string> = {
  coral: "bg-background-coral",
  green: "bg-background-green",
  blue: "bg-background-blue",
  grey: "bg-background-grey",
  white: "bg-background-white",
};

/**
 * Caja de color con texto + imagen — Figma `seccion-cajaColor`
 * (nodo 139:1923 en eloy-gonzalo-cascorro)
 */
export function SectionCajaColor({
  title,
  children,
  imageSrc,
  imageAlt = "",
  layout = "default",
  color = "coral",
  className,
}: SectionCajaColorProps) {
  const isReverse = layout === "reverse";

  return (
    <section
      className={[
        "flex w-full justify-center bg-neutral-100 px-12 py-40",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div
        className={[
          "flex w-full max-w-[1320px] flex-col content-center items-center justify-center rounded-m px-12 py-40 lg:flex-row lg:flex-wrap",
          backgroundByColor[color],
          isReverse ? "gap-[39px] lg:flex-row-reverse" : "gap-32",
        ].join(" ")}
      >
        <div className="flex w-full max-w-[612px] flex-col items-start justify-center gap-24">
          {title ? (
            <h2 className="font-montserrat w-full text-[length:var(--title-h2-size-mobile)] leading-[var(--line-height-32)] font-normal tracking-[var(--letter-spacing-4)] text-text-title uppercase sm:text-[length:var(--title-h2-size-desktop)]">
              {title}
            </h2>
          ) : null}
          <div className="font-lora w-full text-[length:var(--size-16)] leading-[var(--line-height-24)] font-normal tracking-[var(--letter-spacing-0)] text-text-paragraph [&>*+*]:mt-6">
            {children}
          </div>
        </div>

        <div className="relative h-[320px] w-full max-w-[612px] shrink-0 overflow-hidden rounded-s sm:h-[400px] lg:h-[488px]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 612px) 100vw, 612px"
          />
        </div>
      </div>
    </section>
  );
}
