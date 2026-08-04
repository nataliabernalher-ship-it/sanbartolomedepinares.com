import Image from "next/image";

export type FirstSectionProps = {
  accentText?: string;
  title?: string;
  description?: string;
  backgroundSrc?: string;
  className?: string;
};

/** Bienvenida home — Figma node 55:1563 (`first-section`) */
export function FirstSection({
  accentText = "Os damos la bienvenida",
  title = "San Bartolomé de Pinares en Ávila",
  description = "Entre extensos pinares, tradiciones centenarias y un valioso patrimonio, San Bartolomé de Pinares te invita a descubrir un municipio con identidad propia. Esta web es la puerta de entrada para conocer su historia, sus fiestas, sus lugares de interés y toda la información útil para vecinos y visitantes.",
  backgroundSrc,
  className,
}: FirstSectionProps) {
  return (
    <section
      className={[
        "relative flex w-full flex-col items-center justify-center gap-24 px-12 py-60 sm:py-80",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {backgroundSrc ? (
        <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-50">
          <Image
            src={backgroundSrc}
            alt=""
            fill
            className="object-cover object-[center_40%]"
            sizes="100vw"
          />
        </div>
      ) : null}

      <p className="font-bad-script relative z-10 w-full text-center text-[22px] leading-[var(--line-height-24)] text-accent-100 sm:text-[24px]">
        {accentText}
      </p>
      <h1 className="font-montserrat relative z-10 max-w-[900px] text-center text-[length:var(--size-24)] leading-[var(--line-height-32)] font-normal tracking-[var(--letter-spacing-4)] text-text-title uppercase sm:text-[length:var(--size-32)]">
        {title}
      </h1>
      <p className="font-lora relative z-10 max-w-[820px] text-center text-[length:var(--size-16)] leading-[var(--line-height-26)] font-normal tracking-[var(--letter-spacing-0)] text-text-paragraph">
        {description}
      </p>
    </section>
  );
}
