import type { ReactNode } from "react";

export type Section1ColTextOnlyProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

/** Una columna solo texto — Figma node 72:832 (`section-1col-TextOnly`) */
export function Section1ColTextOnly({
  title,
  children,
  className,
}: Section1ColTextOnlyProps) {
  return (
    <section
      className={[
        "flex w-full flex-wrap content-center items-center justify-center gap-32 bg-neutral-100 px-12 py-section-l",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="flex w-full max-w-[900px] flex-col items-start justify-center gap-24">
        <h2 className="font-montserrat max-w-[612px] text-[length:var(--title-h2-size-mobile)] leading-[var(--line-height-32)] font-normal tracking-[var(--letter-spacing-4)] text-text-title uppercase sm:text-[length:var(--title-h2-size-desktop)]">
          {title}
        </h2>
        <div className="font-lora w-full text-[length:var(--size-16)] leading-[var(--line-height-24)] font-normal tracking-[var(--letter-spacing-0)] text-text-paragraph [&>*+*]:mt-6 [&_h3]:font-montserrat [&_h3]:text-[length:var(--size-16)] [&_h3]:leading-[var(--line-height-24)] [&_h3]:tracking-[var(--letter-spacing-4)] [&_h3]:text-text-title [&_h3]:uppercase">
          {children}
        </div>
      </div>
    </section>
  );
}
