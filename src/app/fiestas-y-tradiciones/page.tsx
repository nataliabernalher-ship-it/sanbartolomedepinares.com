import type { Metadata } from "next";
import { SectionPageTitle } from "@/components/sections/SectionPageTitle";
import { ImageWithTitle } from "@/components/ui/ImageWithTitle";

export const metadata: Metadata = {
  title: "Fiestas y tradiciones | San Bartolomé de Pinares",
  description:
    "Fiestas y tradiciones de San Bartolomé de Pinares: Luminarias, fiestas patronales, Semana Santa y costumbres centenarias del municipio.",
};

const fiestas = [
  {
    title: "Luminarias",
    description: "Se celebra cada 16 de enero",
    imageSrc: "/images/fiestas-tradiciones/luminarias.png",
    imageAlt: "Jinete atravesando las hogueras en las Luminarias",
    href: "/fiestas-y-tradiciones/luminarias",
  },
  {
    title: "San Bartolomé",
    description: "Las fiestas patronales del pueblo",
    imageSrc: "/images/fiestas-tradiciones/san-bartolome.png",
    imageAlt: "Procesión de las fiestas de San Bartolomé",
    href: "/fiestas-y-tradiciones/san-bartolome",
  },
  {
    title: "San Antonio de Padua",
    description: "Fiesta en honor a «El Santo más rico»",
    imageSrc: "/images/fiestas-tradiciones/antonio-padua.png",
    imageAlt: "Celebración de San Antonio de Padua con el ganado",
    href: "/fiestas-y-tradiciones/antonio-padua",
  },
  {
    title: "Semana Santa",
    description: "Párrafo introductorio de la subcategoría",
    imageSrc: "/images/fiestas-tradiciones/semana-santa.png",
    imageAlt: "Procesión de Semana Santa por el pueblo",
    href: "/fiestas-y-tradiciones/semana-santa",
  },
  {
    title: "Las Águedas",
    description: "Párrafo introductorio de la subcategoría",
    imageSrc: "/images/fiestas-tradiciones/aguedas.png",
    imageAlt: "Mujeres con traje tradicional en las Águedas",
  },
  {
    title: "El Belén",
    description: "Párrafo introductorio de la subcategoría",
    imageSrc: "/images/fiestas-tradiciones/belen.png",
    imageAlt: "Belén tradicional del municipio",
    href: "/fiestas-y-tradiciones/el-belen",
  },
  {
    title: "Camino de Santiago",
    description: "Somos punto en el camino de Levante",
    imageSrc: "/images/fiestas-tradiciones/camino-santiago.png",
    imageAlt: "Mapa del Camino de Levante",
    href: "/fiestas-y-tradiciones/camino-santiago",
  },
  {
    title: "Sonsoles",
    description: "Párrafo introductorio de la subcategoría",
    imageSrc: "/images/fiestas-tradiciones/sonsoles/hero.png",
    imageAlt: "Santuario de Sonsoles",
    href: "/fiestas-y-tradiciones/sonsoles",
  },
  {
    title: "Gastronomía",
    description: "Párrafo introductorio de la subcategoría",
    imageSrc: "/images/fiestas-tradiciones/gastronomia.png",
    imageAlt: "Rosquillas tradicionales",
    href: "/fiestas-y-tradiciones/gastronomia",
  },
] as const;

export default function FiestasYTradicionesPage() {
  return (
    <main className="flex flex-1 flex-col">
      <SectionPageTitle
        accentText="Qué hacer en San Bartolo"
        title="Fiestas y tradiciones"
        description="En San Bartolomé de Pinares las tradiciones no solo se recuerdan, se viven. A lo largo del año, sus fiestas reúnen a vecinos y visitantes para celebrar costumbres centenarias que mantienen viva la esencia del municipio."
      />

      <section className="flex w-full flex-col items-center bg-background-grey-light px-12 py-40">
        <div className="flex w-full max-w-[1264px] flex-wrap content-start items-start justify-center gap-24">
          {fiestas.map((fiesta) => (
            <ImageWithTitle
              key={fiesta.title}
              title={fiesta.title}
              description={fiesta.description}
              imageSrc={fiesta.imageSrc}
              imageAlt={fiesta.imageAlt}
              href={"href" in fiesta ? fiesta.href : undefined}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
