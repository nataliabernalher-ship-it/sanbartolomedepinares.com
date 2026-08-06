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
        "flex w-full flex-wrap content-start items-start justify-center gap-[39px] bg-neutral-100 px-12 py-80",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="font-lora w-full max-w-[612px] text-[length:var(--size-16)] leading-[var(--line-height-24)] font-normal tracking-[var(--letter-spacing-0)] text-text-paragraph [&_p+_p]:mt-6">
        {left}
      </div>
      <div className="font-lora w-full max-w-[612px] text-[length:var(--size-16)] leading-[var(--line-height-24)] font-normal tracking-[var(--letter-spacing-0)] text-text-paragraph [&_p+_p]:mt-6">
        {right}
      </div>
    </section>
  );
}
