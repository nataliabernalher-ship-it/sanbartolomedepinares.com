import type { Metadata } from "next";
import Image from "next/image";
import { Section2ColTextImage } from "@/components/sections/Section2ColTextImage";
import { Section2ColTextOnly } from "@/components/sections/Section2ColTextOnly";
import { SectionBackToCategory } from "@/components/sections/SectionBackToCategory";
import { SectionCajaColor } from "@/components/sections/SectionCajaColor";
import { SectionHeroImage } from "@/components/sections/SectionHeroImage";

export const metadata: Metadata = {
  title: "Encuadre municipal | San Bartolomé de Pinares",
  description:
    "Características demográficas, hidrografía, topografía, climatología y geología del término municipal de San Bartolomé de Pinares.",
};

export default function EncuadreMunicipalPage() {
  return (
    <main className="flex flex-1 flex-col">
      <SectionHeroImage
        title="Encuadre Municipal"
        imageSrc="/images/el-municipio/encuadre-municipal/hero.png"
        imageAlt="Mapa histórico del término municipal de San Bartolomé de Pinares"
        description={
          <>
            <p>
              El término municipal de San Bartolomé de Pinares, comprende
              únicamente la entidad de población de San Bartolomé de Pinares,
              con categoría de Villa, y cuya existencia data de varios siglos.
            </p>
            <p>
              En el archivo histórico de la Villa, existe un documento del año
              1396, en el que el Alcalde entregado de la Mesta, concede al
              Concejo de San Bartolomé, una Dehesa Boyal, con facultad para
              poder enajenarla.
            </p>
            <p>Pertenece al partido judicial de Cebreros.</p>
          </>
        }
      />

      <Section2ColTextImage
        title="Datos demográficos"
        imageSrc="/images/el-municipio/encuadre-municipal/1.png"
        imageAlt="Mapa de límites municipales con San Bartolomé de Pinares destacado"
        layout="default"
        imageFit="contain"
      >
        <p>
          El pueblo, situado en la zona de Pinares, en la parte baja del
          Alberche, con una altitud del núcleo urbano es de 1.042 m. sobre el
          nivel del mar, y 86 m. por debajo de la capital de provincia; San
          Bartolomé pertenece a la Provincia y Obispado de Avila, dista de la
          capital 25 km y, aproximadamente, 103 km de la capital de España,
          Madrid.
        </p>
        <p>La extensión del termino municipal es de 73,20 km².</p>
        <p>
          El término municipal se encuentra localizado en las hojas nº 531,532,566
          y 577 del mapa de España del Instituto Geográfico y Catastral a
          escala 1:50.000.
        </p>
        <p>
          Tiene limites con los siguientes términos:
          <br />
          Norte – El Herradón, Navalperal de Pinares y las Navas del Marqués.
          <br />
          Este – Valdemaqueda (Madrid).
          <br />
          Sur – Barraco, cebreros y Hoyo de Pinares.
          <br />
          Oeste – Santa Cruz de Pinares.
        </p>
      </Section2ColTextImage>

      <SectionCajaColor
        title="Hidrografía"
        imageSrc="/images/el-municipio/encuadre-municipal/2.png"
        imageAlt="Mapa topográfico con la red fluvial del término municipal"
        color="blue"
      >
        <p>
          La red fluvial que recorre el término municipal, corresponde a la
          cuenca del rio Alberche: El rio o arroyo de la Gaznata, separa en su
          recorrido los términos de San Bartolome y Santa Cruz; el arroyo
          Majalobos, limita con Navalperal de Pinares; el rio Beceas, separa el
          monte Quintanar del resto del término, asi como con parte del de Hoyo
          de Pinares; el arroyo de la Hoz, con el término municipal de
          Valdemaqueda. El resto de la red es de menor importancia.
        </p>
      </SectionCajaColor>

      <Section2ColTextImage
        imageSrc="/images/el-municipio/encuadre-municipal/3.png"
        imageAlt="Vista aérea del relieve del término municipal"
        layout="default"
      >
        <h3>Topografía</h3>
        <p>
          El término municipal es accidentado, oscilando las alturas entre
          1.000 y 1.340 m de altitud, en la Dehesa Boyal.
        </p>
        <h3>Climatología</h3>
        <p>
          Se puede considerar al término municipal de San Bartolomé de Pinares
          con las mismas características de la Meseta, con un clima bastante
          homogéneo.
        </p>
        <p>
          El clima es frio y seco, con largos inviernos, veranos fuertes y
          secos, primaveras destempladas y otoños tibios. La pluviosidad es
          media.
        </p>
        <p>El clima es extremado, mediterráneo.</p>
      </Section2ColTextImage>

      <Section2ColTextOnly
        className="!py-40"
        left={
          <>
            <h2>Geología y edafología</h2>
            <p>
              El término municipal en su extensión tiene distintos tipos de
              suelo.
            </p>
            <p>
              La parte más oriental, así como la más occidental, está
              compuesta por tierras pardas meridionales, sobre granitos con
              afloramientos rocosos. La parte central, está compuesta por
              tierras pardas meridionales, sobre pizarras y pizarras
              metamórficas.
            </p>
            <p>
              El primer tipo corresponde al complejo granito-gneiss, siendo los
              granitos las rocas dominantes. La nota mas acusada del paisaje
              la forman los numerosos afloramientos de roca desnuda que en
              murallones, peñascales y planicies rocosas cubren gran parte del
              territorio. Lo accidentado del terreno, el predominio de
              temperaturas bajas que faciliten la permanencia del hielo y la
              nieve, y el carácter grosero de los detritos graníticos, han
              contribuido a realzar los efectos de la erosión física.
            </p>
          </>
        }
        right={
          <>
            <p>
              Son suelos de profundidad variable debido a las variaciones de
              relieve y a los afloramientos rocosos; contenido en humus pequeño
              y medio, conforme a la vegetación; estructura suelta; pequeño
              poder de retención de humedad.
            </p>
            <p>
              El segundo tipo corresponde a suelos desarrollados sobre
              pizarras.
            </p>
            <p>
              Son suelos de profundidad variable, con predominio de los de
              profundidad media; se asientan en parajes de topografía suave o
              fuertemente ondulada, ocasionalmente montañosa; tienen
              generalmente pequeño poder de retención de humedad, pero se
              encuentran diferencias notables debidas a topografía,
              profundidad, textura y contenido en materia orgánica.
            </p>
            <p>
              Se acompaña un plano del termino municipal, del Estudio sobre los
              suelos de la Provincia de Avila, donde se señalan las zonas
              ocupadas por los distintos tipos de suelo.
            </p>
          </>
        }
      />

      <section className="flex w-full items-center justify-center bg-neutral-100 px-12 py-40">
        <div className="relative aspect-[691/715] w-full max-w-[691px]">
          <Image
            src="/images/el-municipio/encuadre-municipal/4.png"
            alt="Plano de uso del suelo del término municipal de San Bartolomé de Pinares"
            fill
            className="object-contain"
            sizes="(max-width: 691px) 100vw, 691px"
          />
        </div>
      </section>

      <SectionBackToCategory
        href="/el-municipio"
        label="Volver al municipio"
      />
    </main>
  );
}
