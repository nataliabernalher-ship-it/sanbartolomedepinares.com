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
        "flex w-full flex-wrap content-center items-center justify-center gap-32 bg-neutral-100 px-12 py-40",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="flex w-full max-w-[900px] flex-col items-start justify-center gap-24">
        <h2 className="font-montserrat max-w-[612px] text-[length:var(--size-24)] leading-[var(--line-height-32)] font-normal tracking-[var(--letter-spacing-4)] text-text-title uppercase">
          {title}
        </h2>
        <div className="font-lora w-full text-[length:var(--size-16)] leading-[var(--line-height-24)] font-normal tracking-[var(--letter-spacing-0)] text-text-paragraph [&_p+_p]:mt-6">
          {children}
        </div>
      </div>
    </section>
  );
}
