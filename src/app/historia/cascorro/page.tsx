import type { Metadata } from "next";
import { Section2ColTextImage } from "@/components/sections/Section2ColTextImage";
import { SectionBackToCategory } from "@/components/sections/SectionBackToCategory";
import { SectionCajaColor } from "@/components/sections/SectionCajaColor";
import { SectionHeroImage } from "@/components/sections/SectionHeroImage";

export const metadata: Metadata = {
  title: "Eloy Gonzalo «Cascorro» | San Bartolomé de Pinares",
  description:
    "Biografía de Eloy Gonzalo García, el Héroe de Cascorro: infancia en San Bartolomé de Pinares, la Guerra de Cuba y su legado.",
};

export default function CascorroPage() {
  return (
    <main className="flex flex-1 flex-col">
      <SectionHeroImage
        accentText="Personaje ilustre"
        title="Eloy gonzalo “cascorro”"
        imageSrc="/images/historia/eloy-gonzalo/hero.png"
        imageAlt="Estatua de Eloy Gonzalo Cascorro"
      />

      <Section2ColTextImage
        title="Infancia y adopción"
        imageSrc="/images/historia/eloy-gonzalo/plaza.png"
        imageAlt="Plaza de Cascorro en San Bartolomé de Pinares"
        layout="default"
      >
        <p>
          Eloy Gonzalo García nació en Madrid en 1876 y fue abandonado en la
          Inclusa pocos días después de nacer. Con apenas cinco días fue
          adoptado por Francisco Díaz y Braulia Miguel, un matrimonio de San
          Bartolomé de Pinares, donde pasó sus primeros años de vida.
        </p>
        <h3>Su vida entre San Bartolomé y Madrid</h3>
        <p>
          El trabajo de su padre adoptivo como guardia civil llevó a la familia
          a trasladarse a Robledo de Chavela y posteriormente a Chapinería.
          Tras la jubilación de Francisco Díaz y el empeoramiento de la
          situación económica, la familia regresó a San Bartolomé de Pinares,
          donde Eloy vivió su adolescencia.
        </p>
      </Section2ColTextImage>

      <Section2ColTextImage
        title="EXPANSIÓN TERRITORIAL"
        imageSrc="/images/historia/eloy-gonzalo/mapa.png"
        imageAlt="Mapa de Cuba con la localidad de Cascorro"
        layout="reverse"
      >
        <p>
          Tras el fallecimiento de su madre adoptiva y las dificultades
          familiares, Eloy regresó a Chapinería, donde trabajó como pastor y
          labrador. A los 21 años decidió alistarse voluntario en el Ejército
          español, iniciando una brillante carrera militar que le llevó a
          ascender rápidamente a cabo e incorporarse posteriormente al Cuerpo
          de Carabineros.
        </p>
        <h3>La Guerra de Cuba</h3>
        <p>
          Tras diversos acontecimientos personales y militares, Eloy fue
          destinado a la Guerra de Cuba, donde protagonizó la acción que le
          convertiría en uno de los héroes más recordados del ejército español.
        </p>
      </Section2ColTextImage>

      <SectionCajaColor
        title="La hazaña de Cascorro"
        imageSrc="/images/historia/eloy-gonzalo/hazana.png"
        imageAlt="Ilustración de la hazaña de Eloy Gonzalo en Cascorro"
        color="coral"
      >
        <p>
          Durante el asedio de Cascorro, en octubre de 1896, Eloy Gonzalo se
          ofreció voluntario para incendiar la fortificación enemiga. Pidió que
          lo ataran con una cuerda para poder recuperar su cuerpo si moría en
          la misión. Logró prender fuego al refugio de los insurrectos y
          regresó ileso, permitiendo a las tropas españolas romper el asedio y
          convirtiéndose en símbolo de valentía y sacrificio.
        </p>
      </SectionCajaColor>

      <Section2ColTextImage
        title="FALLECIMIENTO Y LEGADO"
        imageSrc="/images/historia/eloy-gonzalo/ayuntamiento.png"
        imageAlt="Ayuntamiento y estatua de Cascorro"
        layout="reverse"
      >
        <p>
          Eloy Gonzalo falleció en 1897, en Matanzas (Cuba), pocos meses
          después de su heroica actuación. Su figura fue reconocida en toda
          España y, en 1940, el Ayuntamiento de San Bartolomé de Pinares erigió
          un monumento en su honor y dio su nombre a una de las principales
          calles del municipio.
        </p>
        <h3>Un héroe para la historia</h3>
        <p>
          Hoy, Eloy Gonzalo es recordado como el Héroe de Cascorro, ejemplo de
          valor, entrega y servicio. Su memoria permanece viva tanto en San
          Bartolomé de Pinares como en Madrid, donde una estatua conmemora su
          heroica gesta, y su nombre continúa ligado para siempre a uno de los
          episodios más emblemáticos de la historia militar española.
        </p>
      </Section2ColTextImage>

      <SectionBackToCategory href="/historia" label="Volver a historia" />
    </main>
  );
}
