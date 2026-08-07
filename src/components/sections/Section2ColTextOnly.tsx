import type { ReactNode } from "react";

export type Section2ColTextOnlyProps = {
  left: ReactNode;
  right: ReactNode;
  className?: string;
};

/** Dos columnas solo texto — Figma `section-2col-Textonly` */
export function Section2ColTextOnly({
  left,
  right,
  className,
}: Section2ColTextOnlyProps) {
  return (
    <section
      className={[
        "flex w-full flex-wrap content-start items-start justify-center gap-[39px] bg-neutral-100 px-12 py-section-l",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="font-lora w-full max-w-[612px] text-[length:var(--size-16)] leading-[var(--line-height-24)] font-normal tracking-[var(--letter-spacing-0)] text-text-paragraph [&>*+*]:mt-6 [&_h2]:font-montserrat [&_h2]:text-[length:var(--title-h2-size-mobile)] [&_h2]:leading-[var(--line-height-32)] [&_h2]:tracking-[var(--letter-spacing-4)] [&_h2]:text-text-title [&_h2]:uppercase sm:[&_h2]:text-[length:var(--title-h2-size-desktop)]">
        {left}
      </div>
      <div className="font-lora w-full max-w-[612px] text-[length:var(--size-16)] leading-[var(--line-height-24)] font-normal tracking-[var(--letter-spacing-0)] text-text-paragraph [&>*+*]:mt-6 [&_h2]:font-montserrat [&_h2]:text-[length:var(--title-h2-size-mobile)] [&_h2]:leading-[var(--line-height-32)] [&_h2]:tracking-[var(--letter-spacing-4)] [&_h2]:text-text-title [&_h2]:uppercase sm:[&_h2]:text-[length:var(--title-h2-size-desktop)]">
        {right}
      </div>
    </section>
  );
}
