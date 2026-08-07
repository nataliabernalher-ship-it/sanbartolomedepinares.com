import type { Metadata } from "next";
import { Section2ColTextImage } from "@/components/sections/Section2ColTextImage";
import { SectionBackToCategory } from "@/components/sections/SectionBackToCategory";
import { SectionCajaColor } from "@/components/sections/SectionCajaColor";
import { SectionHeroImage } from "@/components/sections/SectionHeroImage";

export const metadata: Metadata = {
  title: "Estructura urbana | San Bartolomé de Pinares",
  description:
    "Análisis de la estructura y desarrollo urbano de San Bartolomé de Pinares: tipología, materiales, edificios singulares, red viaria y vías pecuarias.",
};

export default function EstructuraUrbanaPage() {
  return (
    <main className="flex flex-1 flex-col">
      <SectionHeroImage
        accentText="Estructura y desarrollo urbano"
        title="Análisis del municipio"
        imageSrc="/images/el-municipio/estructura-urbana/hero.png"
        imageAlt="Vista aérea del casco urbano de San Bartolomé de Pinares"
      />

      <Section2ColTextImage
        title="Análisis de la estructura y desarrollo urbano"
        imageSrc="/images/el-municipio/estructura-urbana/1.png"
        imageAlt="Calle del casco antiguo con casas de piedra"
        layout="default"
      >
        <p>
          El desarrollo se ha producido, como se ha señalado, de forma natural,
          adaptándose al terreno y a las zonas mas adecuadas. El ensanche se ha
          situado sobre prados, como el del Molinillo, donde existen unos
          problemas de topografía. Intentos como el de Mantijierro, de
          construcción en zonas separadas del núcleo, y con fuertes
          dificultades.
        </p>
      </Section2ColTextImage>

      <SectionCajaColor
        title="Tipología, estado y usos"
        imageSrc="/images/el-municipio/estructura-urbana/2.png"
        imageAlt="Fachada tradicional con balcones de madera"
        color="green"
      >
        <p>
          La tipología de la edificación en el casco urbano ha ido evolucionando
          a través de los años. Las casas oscilan entre una y dos plantas (las
          mas antiguas), y tres en las de reciente construcción.
        </p>
        <p>
          Predominan las casas largas y estrechas, en manzana cerrada, con una
          ocupación muy alta, debido a lo estrecho de las manzanas.
        </p>
        <p>
          En el barrio de Juan Chico y arrabales del Sur, la tipología es menos
          uniforme, con edificación aislada sobre parcela, sin un orden
          concreto.
        </p>
        <p>
          En las nuevas zonas predominan los grupos de viviendas unifamiliares
          adosadas o las viviendas aisladas.
        </p>
        <p>
          Existen escasos ejemplos de vivienda colectiva, que en todo caso
          quedan aislados unos de otros.
        </p>
        <p>
          El estado de la edificación, es en general aceptable, con escasas
          edificaciones en ruina.
        </p>
        <p>
          Los usos del núcleo urbano, son los los que se señalen en las
          Dotaciones, no existen apenas naves en el interior del nucleo
          urbano.
        </p>
      </SectionCajaColor>

      <Section2ColTextImage
        title="Materiales"
        imageSrc="/images/el-municipio/estructura-urbana/3.png"
        imageAlt="Calle empinada con fachadas de piedra y enfoscado"
        layout="default"
      >
        <p>
          En el Nomenclator de 1863, se recoge la siguiente descripción:
        </p>
        <p>
          “El sistema general de construcciones en los partidos de Avila, Barco,
          Cebreros y Piedrahita, se distingue por su rusticidad y la mala clase
          de los materiales, pues consisten en piedra unida en barro y en
          cajones de tierra, o sea tapiales, enlazados con machones de adobes,
          cubiertas a teja vana, resultando que la mayor parte de las casas solo
          tienen un piso y que muchas solo reciben luz por la puerta de
          entrada, y por algunas aberturas irregulares practicadas en la pared
          o en el tejado”.
        </p>
        <p>
          En la actualidad, las construcciones están realizadas de materiales
          muy heterogéneos, siendo los mas tradicionales en el casco antiguo,
          los edificios enfoscados, y de piedra o mixtos, con cubierta realizada
          con teja árabe, construcción que se mantiene únicamente en piedra en
          la zona del entorno de la Iglesia.
        </p>
        <p>
          Por ello, se cree conveniente limitar el uso de determinados
          materiales, según la zona donde se ubique la construcción.
        </p>
      </Section2ColTextImage>

      <SectionCajaColor
        title="Edificios singulares"
        imageSrc="/images/el-municipio/estructura-urbana/4.png"
        imageAlt="Torre de la iglesia parroquial entre árboles"
        color="coral"
      >
        <p>
          La Iglesia Parroquial de San Bartolomé, tiene como partes mas
          antiguas la sencilla torre y la portada del cementerio o compás,
          identifica a la de la iglesia vieja de Cebreros, aunque sin escudo.
          Data de finales del siglo XV.
        </p>
        <p>
          La cabecera de la iglesia es de mediados del siglo XVI, y forma un
          espacio cuadrado con dos colaterales de la mitad de ancho y ábside
          con tres paños. Las naves son muy modestas y modernas.
        </p>
        <p>
          Las Ermitas del Santo Cristo y de la Visitación, son dos elementos
          arquitectónicos de considerable valor, dentro de la arquitectura
          popular.
        </p>
      </SectionCajaColor>

      <Section2ColTextImage
        title="Características de la red viaria"
        imageSrc="/images/el-municipio/estructura-urbana/5.png"
        imageAlt="Calle adoquinada del casco antiguo"
        layout="default"
      >
        <p>
          El casco antiguo está pavimentado casi en su totalidad con adoquín
          granítico y losas de piedra granítica.
        </p>
        <p>
          En la zona del ensanche y el barrio de Juan Chico, se ha llevado a
          cabo pavimentación con hormigón.
        </p>
        <p>La carretera y alguna otra zona se encuentran asfaltadas.</p>
        <p>
          En toda la zona del casco antiguo, existen unas fuertes pendientes en
          las rasantes de las vías, que llegan a alcanzar el 15%.
        </p>
        <p>
          Por otro lado, el tipo de sección de las vías es variable, por las
          especiales características topográficas, con aceras estrechas en
          general en la mayor parte de las calles. Si bien, en zonas como Juan
          Chico, se carece en algunos casos de las mismas.
        </p>
      </Section2ColTextImage>

      <SectionCajaColor
        title="Vías pecuarias"
        imageSrc="/images/el-municipio/estructura-urbana/6.png"
        imageAlt="Ganado abrevando en un pilón de piedra"
        color="blue"
      >
        <p>
          El proyecto de clasificación de vías pecuarias, en el termino
          municipal de San Bartolome de Pinares, fue aprobado por Orden
          Ministerial de fecha 30 de Julio de 1946.
        </p>
        <p>
          En el mismo, se recogen como Vias Pecuarias, cuya conservación se
          considera necesaria en su totalidad, y que atraviesan el termino
          municipal, las siguientes:
        </p>
        <ol className="list-decimal space-y-1 pl-6">
          <li>Cañada Real Leonesa</li>
          <li>Colada del camino viejo de Madrid</li>
          <li>Colada de las Eras de la Gazanata</li>
          <li>Colada del camino viejo de Cebreros</li>
        </ol>
      </SectionCajaColor>

      <Section2ColTextImage
        title="Estructura urbanística del termino municipal"
        imageSrc="/images/el-municipio/estructura-urbana/7.png"
        imageAlt="Plano esquemático del núcleo urbano"
        layout="default"
        imageFit="contain"
      >
        <p>
          El termino municipal de San Bartolome de Pinares tiene una forma
          irregular, con dos zonas muy claras separadas por el río Beceas; la
          zona Este, que queda limitada en su dirección Norte-Sur por el rio o
          arroyo de la Gaznata y por el rio Beceas; y la zona Oeste constituida
          por el monte Quintanar de propiedad municipal desde el siglo XVI, y
          con gran valor natural y paisajístico. En el dominan las variedades
          de pino piñonero, pino negral y jara, y en las riberas del Arroyo,
          fresnos, alisios y en menos cantidad chopos y juncos.
        </p>
        <p>
          En la primera zona, la parte norte, la ocupan el monte Pinar de las
          Viñas, en cuyo centro se encuentra el nucleo urbano, y la dehesa
          Boyal, con un gran y extenso robledal.
        </p>
        <p>
          El nucleo urbano se encuentra mal comunicado por vías pavimentadas,
          con el único trazado de la carretera Avila-Cebreros que cruza el
          núcleo, y la carretera de la Cañada a Cebreros, que cruza la primera
          zona en dirección Norte Sur, por el centro de la misma.
        </p>
        <p>
          El desarrollo urbano de San Bartolome queda limitado en el casco
          antiguo po la fuerte topografía, siendo su única zona de ensanche la
          situada junto a la carretera Avila-Cebreros, que sirvió como limite
          durante muchos años, y que ha sido sobrepasada por el crecimiento
          sufrido en los últimos años.
        </p>
      </Section2ColTextImage>

      <SectionBackToCategory
        href="/el-municipio"
        label="Volver al municipio"
      />
    </main>
  );
}
