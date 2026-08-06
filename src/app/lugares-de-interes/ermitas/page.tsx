import type { Metadata } from "next";
import { Section1ColTextOnly } from "@/components/sections/Section1ColTextOnly";
import { Section2ColTextImage } from "@/components/sections/Section2ColTextImage";
import { SectionBackToCategory } from "@/components/sections/SectionBackToCategory";
import { SectionHeroImage } from "@/components/sections/SectionHeroImage";
import { SectionPageTitle } from "@/components/sections/SectionPageTitle";

export const metadata: Metadata = {
  title: "Ermitas | San Bartolomé de Pinares",
  description:
    "Las ermitas de San Bartolomé de Pinares: San Roque, Santísimo Cristo de la Vera Cruz, Nuestra Señora de la Visitación y otras ermitas históricas.",
};

export default function ErmitasPage() {
  return (
    <main className="flex flex-1 flex-col">
      <SectionHeroImage
        accentText="Conoce nuestras ermitas"
        title="Las ermitas de San Bartolo"
        description="A lo largo de los siglos, estas ermitas han sido lugar de peregrinación, encuentro y celebración, conservando un importante valor cultural para la comunidad."
        imageSrc="/images/lugares-de-interes/ermitas/hero.png"
        imageAlt="Ermita en el paisaje de San Bartolomé de Pinares"
      />

      <Section2ColTextImage
        title="San Roque"
        imageSrc="/images/lugares-de-interes/ermitas/san-roque.png"
        imageAlt="Ermita de San Roque"
        layout="reverse"
      >
        <p>
          La ermita de San Roque situada en el lugar del “Atapao”, tiene gran
          importancia para la vida de este pueblo. De los “frades de la
          Cofradía de San Roque” tenemos noticias desde 1618. En 1623 el
          Concejo, en su esfuerzo por rehabilitar las ermitas, paga los gastos
          de una importante obra. Se remozaron los muros y se hizo nuevo el
          tejado.
        </p>
        <p>
          Desde 1682 podemos rastrear su incidencia en la vida de la Villa en
          los libros de la cofradía, que en ese año se funda de nuevo. Con ello,
          la fiesta del santo, que se venía celebrando desde el siglo XVI con
          regularidad, va a experimentar un impulso notable. En el primer
          capítulo de los nuevos estatutos se describe la fiesta:
          “Primeramente acordaron el día 16 de agosto de cada un año, que es el
          día del glorioso San Roque, se celebre la festividad con sus
          vísperas, misa y procesión con el santo que está en su ermita, a la
          salida de esta villa, muy cerca de ella, y que se paguen a los
          señores cura, beneficiado y sacristán once reales”. Posteriormente se
          celebra un convite a base de confitura y vino amenizado por un
          tamborilero.
        </p>
        <p>
          La ermita estuvo en pie hasta los primeros años de 1950, en los que
          se fue arruinando y ante la falta de reparaciones terminó
          desplomándose. En el año 1997 la ermita se restauró gracias a la
          iniciativa del párroco Don Teodosio y la mano de obra de los
          jubilados y en la actualidad se sigue celebrando dicha fiesta en
          honor a San Roque.
        </p>
      </Section2ColTextImage>

      <Section2ColTextImage
        title="Santísimo Cristo de la Vera Cruz"
        imageSrc="/images/lugares-de-interes/ermitas/cristo-vera-cruz.png"
        imageAlt="Ermita del Santísimo Cristo de la Vera Cruz"
        layout="default"
      >
        <p>
          La ermita dedicada al Cristo es una pequeña edificación en estilo
          barroco popular del siglo XVIII, que alberga las imágenes relativas
          al momento de la Pasión y Muerte de Jesucristo. Destaca el grupo
          escultórico del Calvario, del siglo XVI. El Crucificado original de
          este grupo fue mutilado de ambos brazos para ser utilizado como el
          Paso del Santo Entierro en las procesiones de Semana Santa. De gran
          belleza es el Cristo atado a la columna, barroco de la escuela
          castellana del siglo XVII.
        </p>
        <p>
          Tiene esta ermita una leyenda que se ha transmitido por la tradición
          oral hasta nuestros días. Según ella, la ermita era la capilla de un
          palacio de un rico señor del pueblo, que solía acceder a ella por una
          puerta que en un lateral existía. Este señor según la leyenda, fue el
          mismo que donó la dehesa Boyal a los ganaderos del lugar.
        </p>
        <p>
          Sabemos que los marqueses de Villasierra poseían un palacio en la
          Villa, aunque no hay datos para ubicarlo junto a la ermita. El
          palacio era residencia de los marqueses cuando pasaban alguna
          temporada en San Bartolomé y era visitado cuando algún nuevo marqués
          venía a tomar posesión de su título.
        </p>
      </Section2ColTextImage>

      <Section2ColTextImage
        title="Nuestra Señora de la Visitación"
        imageSrc="/images/lugares-de-interes/ermitas/visitacion.png"
        imageAlt="Ermita de Nuestra Señora de la Visitación"
        layout="reverse"
      >
        <p>
          De los siglos XVII-XVIII es la ermita de la Visitación. Es reseñable
          la bóveda circular que copa la sacristía y el sencillo y bello
          alfarje que sirve de techumbre a la nave. Desde el punto de vista
          decorativo destaca un ciclo de pinturas de pequeño tamaño en tabla
          con motivo de la vida de la Virgen, así como un pequeño retablo
          barroco, donde se encuentra la imagen de Nuestra Señora, del siglo
          XVI, patrona de la Villa junto a San Bartolomé.
        </p>
        <p>
          No obstante, la actual edificación tuvo un antecedente mucho más
          antiguo, al menos del siglo XVI. Se conserva aún un inventario de la
          ermita de Nuestra Señora de 1550. Posteriormente debió de ser rehecha
          y ampliada.
        </p>
        <p>
          Desde tiempos inmemoriales se venía celebrando la fiesta de Nuestra
          Señora de la Visitación el día dos de julio, con la solemnidad propia
          de la patrona de la Villa, sus vísperas, Misa y procesión. Por las
          tardes se tenían capeas y novilladas, al menos desde 1678. Por la
          premura de las faenas agrícolas durante esas fechas, a mediados del
          siglo pasado se cambió la celebración de la Visitación al 25 de
          agosto para unirla a la de San Bartolomé.
        </p>
        <p>
          La fiesta de San Bartolomé quedaba en segundo plano respecto a la de
          la Visitación, aunque se celebraba con su Misa de vigilia, vísperas,
          Misa Mayor y procesión.
        </p>
      </Section2ColTextImage>

      <SectionPageTitle
        accentText="Esto es texto decorativo"
        title="Otras ermitas que existieron"
        description="Párrafo introductorio descriptivo de una sección"
        className="bg-neutral-100"
      />

      <Section1ColTextOnly title="San Juan de Peñaparda">
        <p>
          La ermita de San Juan de Peñaparda se hallaba situada el paraje que
          hoy conocemos con el nombre de las Eras de San Juan muy próxima al
          Vallejo de la Herrera, en el límite occidental del la Dehesa Boyal.
          Aunque el origen de la ermita sea probablemente medieval, es en el
          siglo XVI cuando comenzamos a tener noticias de ella. Este lugar fue
          testigo en 1543 de los excepcionales acuerdos llevados a cabo entre
          representantes de Navalperal y San Bartolomé para resolver los
          problemas que en la linde pudieran ocasionarse.
        </p>
        <p>
          Entre los años 1622 al 1624 el Concejo acomete una obra que debió
          suponer una renovación casi absoluta del edificio. Pronto se fue
          embelleciendo esta ermita merced a los donativos de los fieles, y, de
          esta forma, se pudo comprar un pequeño retablo para la imagen de San
          Juan. Se construyó por estos años una vivienda para el ermitaño Pablo
          Blas, que comenzó a vivir en aquel lugar de forma permanente. Él era
          el encargado del buen adorno y decoro del edificio, así como de dar
          cuenta a los alcaldes de los diversos bienes que en él había.
        </p>
        <p>
          Entre los años 1746 al 1749 se ejecutó una obra importante que afectó
          a los muros y al tejado. Durante todo el siglo XVIII aparecen en los
          libros de cuentas el coste de la fiesta que pagaba el Concejo. En los
          primeros años del siglo XIX la ermita debió de arruinarse, por lo que
          la talla de San Juan fue traída al templo parroquial, donde se halla
          esperando restauración.
        </p>
      </Section1ColTextOnly>

      <Section1ColTextOnly title="San Ildefonso">
        <p>
          Hubo otra ermita dedicada a San Ildefonso, a quien se veneraba en el
          pueblo desde antiguo. Se hallaba junto a Los Pilares, en el inicio
          del camino de Mantigierro.
        </p>
        <p>
          Los Pilares, abrevadero de ganados y lavandería de amas de casa
          durante siglos, estaban en el recinto de la ermita y a ella
          pertenecían.
        </p>
        <p>
          Esta ermita debió de desaparecer después de la primera mitad del
          siglo XIX, ya que todavía aparece en una descripción de la Villa del
          año 1848.
        </p>
      </Section1ColTextOnly>

      <Section1ColTextOnly title="San Sebastián">
        <p>
          Esta ermita se encontraba en la zona alta de la Atalaya, y tenemos
          constancia de su existencia a lo largo de todo el siglo XVII, por la
          curiosa fiesta que en ella se celebraba.
        </p>
        <p>
          En 1622 el Concejo costea el arreglo del tejado y paga al visitador
          del libro de la ermita. A partir de este año se descuidó su arreglo,
          tanto que en el año 1701 debía de ser deplorable el estado en que se
          encontraba.
        </p>
        <p>
          El día de San Sebastián tenía lugar una fiesta que protagonizaban los
          pobres y menesterosos del lugar y de los pueblos cercanos. Tras la
          celebración de la Misa el Concejo hacía una caridad de pan y vino
          para todos ellos.
        </p>
        <p>
          La desaparición del edificio debió de acaecer en los años anteriores
          a 1866, ya que en este año la fiesta deja de celebrarse en la ermita
          y pasa a celebrarse en la Iglesia.
        </p>
      </Section1ColTextOnly>

      <SectionBackToCategory
        href="/lugares-de-interes"
        label="Volver a lugares de interés"
      />
    </main>
  );
}
