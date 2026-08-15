import type { Metadata } from "next";
import { SectionPageTitle } from "@/components/sections/SectionPageTitle";
import { ImageWithTitle } from "@/components/ui/ImageWithTitle";

export const metadata: Metadata = {
  title: "Historia | San Bartolomé de Pinares",
  description:
    "Conoce la historia de San Bartolomé de Pinares: primeros pobladores, la guerra de Napoleón y la figura de Cascorro.",
};

const historias = [
  {
    title: "Primeros pobladores",
    description: "Párrafo introductorio de la subcategoría",
    imageSrc: "/images/historia/primeros-pobladores.png",
    imageAlt: "Vista histórica del municipio",
    href: "/historia/primeros-pobladores",
  },
  {
    title: "La guerra de Napoleón",
    description: "Párrafo introductorio de la subcategoría",
    imageSrc: "/images/historia/guerra-napoleon.png",
    imageAlt: "Grabado de la guerra de la Independencia",
    href: "/historia/guerra-napoleon",
  },
  {
    title: "Cascorro",
    description: "Párrafo introductorio de la subcategoría",
    imageSrc: "/images/historia/cascorro.png",
    imageAlt: "Estatua de Cascorro",
    href: "/historia/cascorro",
  },
] as const;

export default function HistoriaPage() {
  return (
    <main className="flex flex-1 flex-col">
      <SectionPageTitle
        accentText="Viva San Bartolo"
        title="La historia de San Bartolo"
        description="Conocer la historia de San Bartolomé de Pinares es comprender la evolución de un municipio marcado por su patrimonio, sus tradiciones y el carácter de sus vecinos. Un recorrido por su pasado permite entender la identidad que hoy define a la localidad."
      />

      <section className="flex w-full flex-col items-center bg-background-grey-light px-12 pt-section-xl-top pb-[calc(var(--section-spacing-xl-bottom)*2)]">
        <div className="flex w-full max-w-[1260px] flex-wrap content-start items-start justify-center gap-20">
          {historias.map((item) => (
            <ImageWithTitle
              key={item.title}
              title={item.title}
              description={item.description}
              imageSrc={item.imageSrc}
              imageAlt={item.imageAlt}
              href={item.href}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
