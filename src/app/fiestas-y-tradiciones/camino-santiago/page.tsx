import type { Metadata } from "next";
import { Section2ColTextImage } from "@/components/sections/Section2ColTextImage";
import { SectionHeroImage } from "@/components/sections/SectionHeroImage";

export const metadata: Metadata = {
  title: "El Camino de Santiago | San Bartolomé de Pinares",
  description:
    "San Bartolomé de Pinares en el Camino de Santiago: ruta cicloturista de Valencia a Santiago por el Camino de Levante.",
};

export default function CaminoSantiagoPage() {
  return (
    <main className="flex flex-1 flex-col">
      <SectionHeroImage
        accentText="De Valencia a Santiago por San Bartolo"
        title="el camino de santiago"
        description="Somos punto en el camino de Levante."
        imageSrc="/images/fiestas-tradiciones/camino-santiago/hero.png"
        imageAlt="Cartel de entrada a San Bartolomé de Pinares"
      />

      <Section2ColTextImage
        imageSrc="/images/fiestas-tradiciones/camino-santiago/mapa.png"
        imageAlt="Mapa del Camino de Santiago desde Valencia"
        layout="reverse"
      >
        <p>
          Ruta cicloturista en bicicleta de montaña con alforjas que recorre el
          Camino de Santiago desde Valencia.
        </p>
        <p>
          Este recorrido cruza toda la península Ibérica pasando por varios
          caminos históricos: saliendo de Valencia recorre parte de la Vía
          Augusta que recorre todo el Mediterráneo; en Castilla la Mancha
          atraviesa algunas de las rutas del Quijote; uniendo Ávila con Toro
          transita el camino al enterramiento de Isabel la Católica; y de
          Zamora a Santiago recupera otro Camino de Santiago, el camino
          mozárabe.
        </p>
        <p>
          Visita interesantes capitales como Albacete, Toledo, Ávila, Zamora y
          Orense. Y es en su paso por Ávila donde atraviesa nuestro pueblo, San
          Bartolomé de Pinares.
        </p>
      </Section2ColTextImage>
    </main>
  );
}
