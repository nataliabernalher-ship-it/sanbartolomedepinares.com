import type { Metadata } from "next";
import { Section2ColTextImage } from "@/components/sections/Section2ColTextImage";
import { SectionHeroImage } from "@/components/sections/SectionHeroImage";

export const metadata: Metadata = {
  title: "El Belén | San Bartolomé de Pinares",
  description:
    "El Belén de la Iglesia de San Bartolomé de Pinares: una tradición navideña mantenida por la familia Martín durante décadas.",
};

export default function ElBelenPage() {
  return (
    <main className="flex flex-1 flex-col">
      <SectionHeroImage
        accentText="Cuando llega la navidad..."
        title="el belén de la iglesia"
        description="El Belén de la Iglesia de San Bartolomé de Pinares es una de las tradiciones navideñas más queridas del municipio. Desde hace décadas, la familia Martín, encabezada por Paco Martín, se encarga de su montaje de forma completamente altruista, manteniendo viva una tradición en la que ya participan tres generaciones."
        imageSrc="/images/fiestas-tradiciones/belen/hero.png"
        imageAlt="Belén de la Iglesia de San Bartolomé de Pinares"
      />

      <Section2ColTextImage
        imageSrc="/images/fiestas-tradiciones/belen/creador.png"
        imageAlt="Paco Martín junto al Belén de la iglesia"
        layout="reverse"
      >
        <p>
          El Belén es una representación plástica del nacimiento de Jesucristo,
          y es tradición su construcción y exhibición en hogares, iglesias o
          centros públicos en países de tradición católica.
        </p>
        <p>
          Desde hace muchos años en San Bartolomé de Pinares se viene montando
          el Nacimiento en la Iglesia, en la actualidad de esta labor se
          encarga de forma altruista la Familia Martín con Paco a la cabeza. Y
          son tres generaciones las que trabajan conjuntamente para que este
          laborioso trabajo se lleve a cabo. Las mujeres ayudan en el tema
          decorativo y ellos en la infraestructura para que el Belén cobre
          vida.
        </p>
      </Section2ColTextImage>
    </main>
  );
}
