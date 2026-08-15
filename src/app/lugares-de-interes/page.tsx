import type { Metadata } from "next";
import { SectionPageTitle } from "@/components/sections/SectionPageTitle";
import { ImageWithTitle } from "@/components/ui/ImageWithTitle";

export const metadata: Metadata = {
  title: "Lugares de interés | San Bartolomé de Pinares",
  description:
    "Descubre los lugares más representativos de San Bartolomé de Pinares: iglesia, ermitas, plazas, parques y espacios naturales.",
};

const lugares = [
  {
    title: "Iglesia",
    description:
      "La Iglesia de San Bartolomé Apóstol de estilo herreriano",
    imageSrc: "/images/lugares-de-interes/iglesia.png",
    imageAlt: "Iglesia de San Bartolomé Apóstol",
    href: "/lugares-de-interes/iglesia",
  },
  {
    title: "Ermitas",
    description: "Las ermitas en la montaña que “guardan” el pueblo",
    imageSrc: "/images/lugares-de-interes/ermitas.png",
    imageAlt: "Ermita de piedra en la ladera",
    href: "/lugares-de-interes/ermitas",
  },
  {
    title: "Plaza",
    description: "La plaza de España lugar principal de reunión",
    imageSrc: "/images/lugares-de-interes/plaza.png",
    imageAlt: "Plaza de España",
  },
  {
    title: "Ayuntamiento",
    description: "El ayuntamiento está en la plaza de Cascorro",
    imageSrc: "/images/lugares-de-interes/ayuntamiento.png",
    imageAlt: "Ayuntamiento de San Bartolomé de Pinares",
  },
  {
    title: "Fuente de Cascorro",
    description: "La estatua dedicada a Eloy Gonzalo",
    imageSrc: "/images/lugares-de-interes/fuente-cascorro.png",
    imageAlt: "Estatua de Eloy Gonzalo en la plaza de Cascorro",
  },
  {
    title: "Tripa Ituero",
    description: "Formación geológica símbolo del pueblo",
    imageSrc: "/images/lugares-de-interes/tripa-ituero.png",
    imageAlt: "Formación geológica Tripa Ituero",
  },
  {
    title: "Jardín hogar de los jubilados",
    description: "También llamado parquecillo",
    imageSrc: "/images/lugares-de-interes/jardin-jubilados.png",
    imageAlt: "Jardín hogar de los jubilados",
  },
  {
    title: "Parque de Espinillos",
    description: "También llamado parquezote",
    imageSrc: "/images/lugares-de-interes/parque-espinillos.png",
    imageAlt: "Parque de Espinillos",
  },
  {
    title: "Piscina",
    description: "Piscina para el recreo abierta en los meses de verano",
    imageSrc: "/images/lugares-de-interes/piscina.png",
    imageAlt: "Piscina municipal",
  },
  {
    title: "Pista Deportiva",
    description: "Dentro del recinto del colegio",
    imageSrc: "/images/lugares-de-interes/pista-deportiva.png",
    imageAlt: "Pista deportiva municipal",
  },
  {
    title: "Jardín Casa de la Cultura",
    description: "Parque infantil en la plaza",
    imageSrc: "/images/lugares-de-interes/jardin-casa-cultura.png",
    imageAlt: "Jardín de la casa de la cultura",
  },
  {
    title: "Centro de Enseñanzas",
    description: "También conocido como las escuelas",
    imageSrc: "/images/lugares-de-interes/centro-ensenanzas.png",
    imageAlt: "Centro de enseñanzas",
  },
  {
    title: "La Bodega",
    description: "Centro del vino local en los 60",
    imageSrc: "/images/lugares-de-interes/bodega.png",
    imageAlt: "La Bodega",
  },
] as const;

export default function LugaresDeInteresPage() {
  return (
    <main className="flex flex-1 flex-col">
      <SectionPageTitle
        accentText="Qué ver en San Bartolo"
        title="Lugares de interés"
        description="Descubre los lugares más representativos de San Bartolomé de Pinares y adéntrate en un municipio donde historia, patrimonio y naturaleza se unen para ofrecer una experiencia auténtica."
      />

      <section className="flex w-full flex-col items-center bg-neutral-200/20 px-12 pt-40 pb-80">
        <div className="flex w-full max-w-[1264px] flex-wrap content-start items-start justify-center gap-24">
          {lugares.map((lugar) => (
            <ImageWithTitle
              key={lugar.title}
              title={lugar.title}
              description={lugar.description}
              imageSrc={lugar.imageSrc}
              imageAlt={lugar.imageAlt}
              href={"href" in lugar ? lugar.href : undefined}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
