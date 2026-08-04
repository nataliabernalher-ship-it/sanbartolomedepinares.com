import Image from "next/image";

export type SectionHeroImageProps = {
  accentText?: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  className?: string;
};

/** Hero de páginas internas — Figma node 38:315 (`section-heroImagePages`) */
export function SectionHeroImage({
  accentText,
  title,
  description,
  imageSrc,
  imageAlt = "",
  className,
}: SectionHeroImageProps) {
  return (
    <section
      className={[
        "flex w-full flex-col items-center gap-7 bg-neutral-150 py-24",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="relative h-[280px] w-full max-w-[1280px] overflow-hidden rounded-m sm:h-[360px] lg:h-[420px]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 1280px) 100vw, 1280px"
          priority
        />
      </div>

      <div className="flex w-full max-w-[1280px] flex-col items-center gap-[19px] px-12">
        {accentText ? (
          <p className="font-bad-script w-full text-center text-[24px] leading-[var(--line-height-32)] tracking-[var(--letter-spacing-0)] text-accent-100">
            {accentText}
          </p>
        ) : null}
        <h1 className="font-montserrat max-w-[800px] text-center text-[length:var(--size-32)] leading-[var(--line-height-32)] font-normal tracking-[var(--letter-spacing-4)] text-text-title uppercase">
          {title}
        </h1>
        <p className="font-lora max-w-[800px] text-center text-[length:var(--size-16)] leading-[var(--line-height-26)] font-normal tracking-[var(--letter-spacing-0)] text-text-paragraph">
          {description}
        </p>
      </div>
    </section>
  );
}
