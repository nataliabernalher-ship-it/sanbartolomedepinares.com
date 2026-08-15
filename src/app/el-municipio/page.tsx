import type { Metadata } from "next";
import { IconBoxSection } from "@/components/sections/IconBoxSection";
import { Section2ColBtn } from "@/components/sections/Section2ColBtn";
import { Section2ColTextImage } from "@/components/sections/Section2ColTextImage";
import { SectionHeroImage } from "@/components/sections/SectionHeroImage";

export const metadata: Metadata = {
  title: "El municipio | San Bartolomé de Pinares",
  description:
    "Análisis urbanístico y social de San Bartolomé de Pinares: demografía, encuadre municipal, estructura urbana y actividades socioeconómicas.",
};

export default function ElMunicipioPage() {
  return (
    <main className="flex flex-1 flex-col">
      <SectionHeroImage
        title="El municipio"
        description="Es necesario un breve análisis urbanístico y social para conocer el municipio de San Bartolomé de Pinares. El lugar en el que se halla, a que se dedica su gente y las actividades que en él se desarrollan nos hará tener un conocimiento de la situación actual de nuestro pueblo."
        imageSrc="/images/el-municipio/hero.png"
        imageAlt="Vista del municipio de San Bartolomé de Pinares"
      />

      <IconBoxSection
        items={[
          {
            label: "Datos demográficos",
            color: "green",
          },
          {
            label: "Encuadre municipal",
            color: "blue",
            href: "/el-municipio/encuadre-municipal",
          },
          {
            label: "Estructura urbana",
            color: "coral",
            href: "/el-municipio/estructura-urbana",
          },
          {
            label: "Actividades socioeconómicas",
            color: "grey",
          },
        ]}
      />

      <Section2ColTextImage
        title="Características del municipio"
        imageSrc="/images/el-municipio/caracteristicas-1.jpg"
        imageAlt="Vista aérea del municipio"
        layout="default"
      >
        <p>
          La comarca en la que se asienta el municipio es la zona
          centro-sur-este de la provincia, denominada de varias formas según
          textos y autores. Se la conoce como Tierra de Pinares, si bien dentro
          de una clasificación mas ajustada, se encuadraría dentro de la Comarca
          V (Valle del Alberche), que con una superficie de 1.070,06 km²,
          comprende 14 municipios, con poblaciones que en el año 1950,
          superaban los 1.000 habitantes, en número de 12 y que en la que en la
          actualidad solo superan 7.
        </p>
        <p>
          La población en el año 50 era de 30.894, y en el año 81 de 23.583.
          Representa en la actualidad el 13,2% del total provincial.
        </p>
        <p>La altura media de la comarca es de 1.008 m.</p>
      </Section2ColTextImage>

      <Section2ColTextImage
        imageSrc="/images/el-municipio/caracteristicas-2.jpg"
        imageAlt="Paisaje y caserío del municipio"
        layout="reverse"
      >
        <p>
          El clima es frío y seco, con largos inviernos, veranos fuertes y
          secos, primaveras destempladas y otoños tibios. La pluviosidad es
          media.
        </p>
        <p>
          La riqueza de la zona es el cultivo de la vid (58,3% del total
          provincial) y huerta (34,5% de la provincia), así como la ganadería en
          régimen semiextensivo.
        </p>
        <p>La industria es superior a la existente en otras comarcas.</p>
        <p>
          Tiene gran extensión de montes, predominando los pinares, robles y
          encinas.
        </p>
        <p>
          Hidrográficamente, como su nombre indica, está regada por el río
          Alberche (cuenca del Tajo), nace en la cadena central. Su cauce forma
          una gran curva, semejante a una parábola de 167 km de longitud. El
          desnivel existente entre su nacimiento y la desembocadura es de 1.500
          m.
        </p>
      </Section2ColTextImage>

      <Section2ColBtn
        accentText="La Comarca"
        title="Tierra de Pinares"
        backgroundClassName="bg-background-green"
        imageSrc="/images/el-municipio/comarca.jpg"
        imageAlt="Paisaje de la Tierra de Pinares"
        buttonHref="/el-municipio/la-comarca"
        description={
          <>
            <p>
              La comarca en la que se asienta el municipio es la zona
              centro-sur-este de la provincia, denominada de varias formas según
              textos y autores.
            </p>
            <p>
              Se la conoce como Tierra de Pinares, si bien dentro de una
              clasificación mas ajustada, se encuadraría dentro de la Comarca V
              (Valle del Alberche), que con una superficie de 1.070,06 km²,
              comprende 14 municipios.
            </p>
          </>
        }
      />
    </main>
  );
}
