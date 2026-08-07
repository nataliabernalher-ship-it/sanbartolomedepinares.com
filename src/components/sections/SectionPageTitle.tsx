export type SectionPageTitleProps = {
  accentText?: string;
  title: string;
  description: string;
  className?: string;
};

/** Título de página sin imagen — Figma node `title` (p. ej. 55:1810) */
export function SectionPageTitle({
  accentText,
  title,
  description,
  className,
}: SectionPageTitleProps) {
  return (
    <section
      className={[
        "flex w-full flex-col items-center gap-16 bg-background-grey-light px-12 pt-section-l-top",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {accentText ? (
        <p className="font-bad-script w-full text-center text-[length:var(--accent-text-size-mobile)] leading-[var(--line-height-32)] tracking-[var(--letter-spacing-0)] text-accent-100 sm:text-[length:var(--accent-text-size-desktop)]">
          {accentText}
        </p>
      ) : null}
      <h1 className="font-montserrat max-w-[800px] text-center text-[length:var(--title-h1-size-mobile)] leading-[var(--line-height-32)] font-normal tracking-[var(--letter-spacing-4)] text-text-title uppercase sm:text-[length:var(--title-h1-size-desktop)]">
        {title}
      </h1>
      <p className="font-lora max-w-[800px] text-center text-[length:var(--size-16)] leading-[var(--line-height-26)] font-normal tracking-[var(--letter-spacing-0)] text-text-paragraph">
        {description}
      </p>
    </section>
  );
}
