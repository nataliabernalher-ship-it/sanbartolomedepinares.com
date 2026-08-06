import type { Metadata } from "next";
import { Section2ColTextOnly } from "@/components/sections/Section2ColTextOnly";
import { SectionHeroImage } from "@/components/sections/SectionHeroImage";

export const metadata: Metadata = {
  title: "Peregrinación a Sonsoles | San Bartolomé de Pinares",
  description:
    "Peregrinación desde San Bartolomé de Pinares al Santuario de Sonsoles: la Ofrenda Grande, el camino y la tradición de las mandas.",
};

export default function SonsolesPage() {
  return (
    <main className="flex flex-1 flex-col">
      <SectionHeroImage
        accentText="Peregrinación desde San Bartolomé a Sonsoles."
        title="PEREGRINACIÓN A SONSOLES"
        description="El Santuario de Sonsoles dista más o menos 20 kilómetros de San Bartolomé por lo que el peregrino ha de salir alrededor de las 4 de la mañana para llegar sin prisa a la Misa, los peregrinos que realizan el recorrido a caballo salen a primera hora de la madrugada."
        imageSrc="/images/fiestas-tradiciones/sonsoles/hero.png"
        imageAlt="Santuario de Nuestra Señora de Sonsoles"
      />

      <Section2ColTextOnly
        left={
          <>
            <p>
              Se trata de una Virgen muy venerada en el municipio de San
              Bartolomé. Una prueba de ello es que el Santuario es visitado con
              bastante frecuencia por los lugareños, además de ser bastante
              común que las parejas de novios decidan contraer matrimonio en
              dicha iglesia o la costumbre de poner el nombre de Sonsoles a las
              recién nacidas.
            </p>
            <p>
              Tal es el caso que se tiene de costumbre la realización de mandas
              (Voto o promesa hechos a Dios, a la Virgen o a un santo) por lo
              que los habitantes de San Bartolomé realizan una peregrinación al
              Santuario en la denominada Ofrenda Grande (en la que acude la
              Cofradía del Valle Amblés), siendo siempre el segundo domingo de
              octubre, para asistir a la Misa del Peregrino ofrecida a las 10 de
              la mañana.
            </p>
          </>
        }
        right={
          <>
            <p>
              Es bastante numeroso el grupo de personas que cada año realizan
              este camino. Incluso con fenómenos atmosféricos adversos muchos
              son los que con un buen abrigo o chubasquero, termo de café en la
              mochila y linterna en mano deciden que no es suficiente la lluvia
              o el frio para no realizar dicho sacrificio.
            </p>
            <p>
              Se trata de 20 kilómetros que recorridos a través de carretera
              comarcal y más tarde a través de campo se tarda en realizar entre
              cuatro y cinco horas dependiendo del ritmo que uno se proponga.
              Se sube el Puerto del Boquerón camino de Ávila para luego
              desviarse al campo al poco de pasar Las Canteras. Muy emotivo
              sentir el amanecer mientras uno recorre los campos abulenses.
            </p>
          </>
        }
      />
    </main>
  );
}
