import type { Metadata } from "next";
import { Section2ColTextImage } from "@/components/sections/Section2ColTextImage";
import { SectionHeroImage } from "@/components/sections/SectionHeroImage";

export const metadata: Metadata = {
  title: "San Antonio de Padua | San Bartolomé de Pinares",
  description:
    "Fiesta de San Antonio de Padua en San Bartolomé de Pinares: ofrenda de animales, procesión y subasta del «Santo más rico».",
};

export default function AntonioPaduaPage() {
  return (
    <main className="flex flex-1 flex-col">
      <SectionHeroImage
        accentText="“El Santo más rico”"
        title="SAN ANTONIO PADUA"
        description="Cada 13 de junio se celebra en San Bartolomé de Pinares la fiesta en honor a San Antonio de Padua, y son los ganaderos del pueblo los que la reciben con mayor entusiasmo y sentir religioso."
        imageSrc="/images/fiestas-tradiciones/antonio-padua/hero.png"
        imageAlt="Corderos en la fiesta de San Antonio de Padua"
      />

      <Section2ColTextImage
        imageSrc="/images/fiestas-tradiciones/antonio-padua/ofrenda.png"
        imageAlt="Subasta y ofrenda de animales a San Antonio"
        layout="reverse"
      >
        <p>
          Pastores de ovejas y cabras ofrecen corderos o chivos principalmente,
          aunque en la antigüedad se ofrecían hasta chotos, todos ellos en
          cumplimiento de alguna promesa o petición. Otra gente ofrece gallinas,
          conejos, hámster o cualquier otro animal. Antiguamente se metían
          dentro de la iglesia en teleras de madera, pero por higiene en la
          actualidad se sitúan en la puerta y allí permanecen mientras se
          ofrece la misa.
        </p>
        <p>
          Al acabar la ceremonia se saca el Santo en procesión subiendo por la
          Calle de la Virgen y bajando por la Calle Mayor, mientras los hijos o
          familiares de los ganaderos acompañan a San Antonio de Padua portando
          los animales, que con sus balidos, cacareos y bramidos acompañan al
          tambor y la dulzaina. También es tradición cantar la canción de “El
          niño y los Pajaritos” que relata un milagro de San Antonio de Padua
          con animales.
        </p>
      </Section2ColTextImage>

      <Section2ColTextImage
        imageSrc="/images/fiestas-tradiciones/antonio-padua/procesion.png"
        imageAlt="Procesión con animal ofrecido a San Antonio"
        layout="default"
      >
        <p>
          Tras la procesión y en ambiente de fiesta se realiza un convite en la
          puerta de la casa del cura, donde se va a realizar la subasta. Todos
          los presentes pueden pujar por los animales que se ofrecen al Santo,
          y el dinero es para la Cofradía de San Antonio, similar a la de la
          Virgen de la Visitación o la de Santo Cristo de la Veracruz, pero sus
          ingresos respecto a estas son mayores, por ello comúnmente se le
          denomina a San Antonio como “el Santo más rico”. Las pujas admitían,
          y aún lo hacen, aportaciones en especies: arrobas de vino, cajas de
          cerveza, rosquillas, galletas…, allí mismo consumidas por los
          presentes.
        </p>
      </Section2ColTextImage>
    </main>
  );
}
