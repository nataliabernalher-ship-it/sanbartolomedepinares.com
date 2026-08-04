import Image from "next/image";

export type HeroHomeProps = {
  imageSrc: string;
  imageAlt?: string;
  className?: string;
};

/** Hero full-bleed de la home — Figma node 75:1026 (`hero-image-home`) */
export function HeroHome({
  imageSrc,
  imageAlt = "Vista aérea de San Bartolomé de Pinares",
  className,
}: HeroHomeProps) {
  return (
    <section
      className={[
        "relative h-[280px] w-full overflow-hidden sm:h-[400px] lg:h-[520px]",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
      aria-label="Portada"
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
    </section>
  );
}
