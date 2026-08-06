import type { Metadata } from "next";
import { Section2ColTextImage } from "@/components/sections/Section2ColTextImage";
import { SectionBackToCategory } from "@/components/sections/SectionBackToCategory";
import { SectionHeroImage } from "@/components/sections/SectionHeroImage";

export const metadata: Metadata = {
  title: "Gastronomía | San Bartolomé de Pinares",
  description:
    "Platos y postres tradicionales de San Bartolomé de Pinares: flores, bodigo, retorcidos, rosquillas y bolla.",
};

export default function GastronomiaPage() {
  return (
    <main className="flex flex-1 flex-col">
      <SectionHeroImage
        accentText="Gastronomía Bartola"
        title="platos y postres tradicionales"
        description="La mejor manera de conocer un lugar es también a través de su cocina."
        imageSrc="/images/fiestas-tradiciones/gastronomia/hero.png"
        imageAlt="Cocina tradicional con batería de cobre"
      />

      <Section2ColTextImage
        title="FLORES"
        imageSrc="/images/fiestas-tradiciones/gastronomia/flores.png"
        imageAlt="Flores fritas espolvoreadas con azúcar"
        layout="reverse"
      >
        <p>
          Fino dulce de masa frita con forma de flor, característico de la
          Semana Santa y otras celebraciones. Se espolvorea con azúcar o se
          acompaña de miel, destacando por su textura ligera y crujiente.
        </p>
        <p>Ingredientes:</p>
        <p>
          12 huevos
          <br />
          12 cucharadas de azúcar
          <br />1 kilo de harina
          <br />1 vaso de zumo de naranja
          <br />3 flanines
          <br />1 vasito de anís
          <br />
          Medio bote de canela
          <br />1 litro de leche
        </p>
      </Section2ColTextImage>

      <Section2ColTextImage
        title="BODIGO"
        imageSrc="/images/fiestas-tradiciones/gastronomia/bodigo.png"
        imageAlt="Bodigo tradicional de pan"
        layout="reverse"
      >
        <p>
          Pan o bollo tradicional elaborado de forma artesanal, muy ligado a
          las celebraciones religiosas y fiestas populares. Es una receta
          sencilla que forma parte del patrimonio gastronómico de San Bartolomé
          de Pinares.
        </p>
        <p>Ingredientes:</p>
        <p>
          Masa para hacer pan
          <br />
          Chorizo y lomo frito
          <br />1 huevo cocido
          <br />
          Aceite del chorizo frito
        </p>
      </Section2ColTextImage>

      <Section2ColTextImage
        title="RETORCIDOS"
        imageSrc="/images/fiestas-tradiciones/gastronomia/retorcidos.png"
        imageAlt="Retorcidos dulces tradicionales"
        layout="reverse"
      >
        <p>
          Dulce típico elaborado con una masa aromatizada, trenzada o retorcida
          antes de su horneado o fritura. Su textura crujiente y su sabor
          tradicional lo convierten en una elaboración muy apreciada en las
          festividades locales.
        </p>
        <p>Ingredientes:</p>
        <p>
          1 Litro de vino blanco
          <br />½ l de aceite
          <br />3 cucharadas de azúcar
          <br />4 papelillos de anís
          <br />3 papelillos de canela
          <br />3 levadurinas
          <br />3 raspaduras de naranja y el zumo
        </p>
      </Section2ColTextImage>

      <Section2ColTextImage
        title="ROSQUILLAS"
        imageSrc="/images/fiestas-tradiciones/gastronomia/rosquillas.png"
        imageAlt="Rosquillas tradicionales"
        layout="reverse"
      >
        <p>
          Dulce tradicional elaborado con harina, huevos y aceite de oliva,
          aromatizado con anís o limón. Su textura tierna y su sabor casero las
          convierten en uno de los postres más populares de la repostería local.
        </p>
        <p>Ingredientes:</p>
        <p>
          3 Huevos
          <br />3 cucharadas de aceite por cada huevo
          <br />3 cucharadas de leche por cada huevo
          <br />3 cucharadas de azúcar por cada huevo
          <br />1 levadurina
          <br />1 vasito pequeño de anís
          <br />1 raspadura de un limón y el zumo
        </p>
      </Section2ColTextImage>

      <Section2ColTextImage
        title="bolla"
        imageSrc="/images/fiestas-tradiciones/gastronomia/bolla.png"
        imageAlt="Bolla tradicional espolvoreada con azúcar"
        layout="reverse"
      >
        <p>
          La bolla es uno de los dulces tradicionales más representativos de San
          Bartolomé de Pinares. Elaborada de forma artesanal y ligada a las
          celebraciones del municipio, esta receta, transmitida de generación
          en generación, forma parte del patrimonio gastronómico local y refleja
          la riqueza de la repostería tradicional abulense.
        </p>
      </Section2ColTextImage>

      <SectionBackToCategory
        href="/fiestas-y-tradiciones"
        label="Volver a fiestas y tradiciones"
      />
    </main>
  );
}
