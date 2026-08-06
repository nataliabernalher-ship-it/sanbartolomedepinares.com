import type { Metadata } from "next";
import { Section2ColTextImage } from "@/components/sections/Section2ColTextImage";
import { SectionBackToCategory } from "@/components/sections/SectionBackToCategory";
import { SectionHeroImage } from "@/components/sections/SectionHeroImage";

export const metadata: Metadata = {
  title: "Fiestas de San Bartolomé | San Bartolomé de Pinares",
  description:
    "Fiestas patronales de San Bartolomé: el pregón, las peñas, el Festival de los Abuelos, la maratón y el campeonato de fútbol.",
};

export default function SanBartolomePage() {
  return (
    <main className="flex flex-1 flex-col">
      <SectionHeroImage
        accentText="San Bartolomé es el patrón de nuestra villa"
        title="fiestas de san bartolomé"
        description="Para la mayoría de los Bartolos el 24 de agosto es el día más esperado del año, el que marca el principio de un año nuevo que finaliza de nuevo en las vísperas de San Bartolo."
        imageSrc="/images/fiestas-tradiciones/san-bartolome/hero.png"
        imageAlt="Plaza llena durante las fiestas de San Bartolomé"
      />

      <Section2ColTextImage
        imageSrc="/images/fiestas-tradiciones/san-bartolome/intro.png"
        imageAlt="Procesión durante las fiestas de San Bartolomé"
        layout="default"
      >
        <p>
          San Bartolomé es el patrón de nuestra villa, su festividad se
          conmemora el 24 de Agosto. Para la mayoría de los Bartolos es ese día
          el más esperado del año, el que marca el principio de un año nuevo
          que finaliza de nuevo en las vísperas de San Bartolo. Y es por
          nuestro patrón por lo que festejamos principalmente esos días y todo
          el mes de agosto con una serie de actos y festejos, esto produce una
          gran participación de todos los ciudadanos, que aprovechan sus
          vacaciones veraniegas para pasar unos días en nuestro municipio,
          disfrutando de tranquilidad, descanso, armonía y unos pocos días de
          fiesta.
        </p>
      </Section2ColTextImage>

      <Section2ColTextImage
        title="el pregón"
        imageSrc="/images/fiestas-tradiciones/san-bartolome/pregon.png"
        imageAlt="Pregón de fiestas desde el ayuntamiento"
        layout="reverse"
      >
        <p>
          El día 23 de agosto de cada año y justo antes de la misa de las
          Vísperas de San Bartolomé, nos reunimos todas las peñas del pueblo
          acompañados del resto de los habitantes del municipio frente al
          balcón del ayuntamiento esperando que se oficialicen las fiestas en
          honor a nuestro patrón.
        </p>
        <p>
          Botella de sidra en mano (tradición comenzada por la peña Los
          Ilegales) todos esperamos impacientes el discurso de las Mises de ese
          año, que al finalizar con un “Viva San Bartolo” produce un momento
          de éxtasis en todas las peñas. Todos empezamos a descorchar las
          botellas para verterlas sobre el resto, a cantar vitoreando el
          nombre de los nuestros y a bailar junto a la banda de música o a
          alguna charanga improvisada por alguna de las peñas. Se trata de un
          desborde de felicidad porque con dicho pregón se dan paso a varios
          días de fiesta y jolgorio. El momento ha llegado, por fin empiezan
          las Fiestas del Pueblo.
        </p>
      </Section2ColTextImage>

      <Section2ColTextImage
        title="las peñas"
        imageSrc="/images/fiestas-tradiciones/san-bartolome/penas.png"
        imageAlt="Peñas con camisetas de colores en las fiestas"
        layout="default"
      >
        <p>
          Se acerca el 24 de Agosto, y las peñas preparan con nerviosismo lo
          que van a ser las fiestas. Se enfundan sus camisetas, cada uno de
          los grupos de distinto color, para que así yendo todos los miembros
          juntos se les vea y diferencie a distancia, unos azules, otros rojos,
          otros verdes, todos ellos vistiendo de colores las calles de San
          Bartolomé.
        </p>
        <p>
          Las peñas están formadas por grupos de amigos que se reúnen para
          vivir de forma distinta estos días. Existen peñas de muy distintas
          edades, unas formadas por matrimonios con sus hijos pequeños, otras
          y la gran mayoría son gente algo más joven que intentan no perderse
          ni un segundo de fiesta, y también grupos de chavalillos más pequeños
          que preparan con la misma ilusión estos días. Las peñas son el
          principal elemento de nuestras fiestas, las que dan vida a cada
          rincón de nuestro municipio, las que ponen la alegría por allá a
          donde vayan ya sea por sus canticos, por sus atuendos o simplemente
          por la ilusión de pasar unos días de diversión.
        </p>
        <p>
          Muchas son las peñas que van todas las tardes a ver la corrida de
          toros a la plaza situada en Mantigierro, para animar también el
          espectáculo taurino. Suelen ir bastante equipados para evitar pasar
          sed o hambre durante el tiempo que duran los toros, tanto ellos como
          la gente que se sienta alrededor.
        </p>
        <p>
          El número de peñas crece considerablemente cada año, ya que cada vez
          aparecen grupos de gente más joven dispuestos a pasárselo en grande
          estos días. Muchas son las peñas que han existido, pero he de
          destacar a la Peña el Pitorro que durante muchos años ha sido la que
          más ha animado y mas ha promovido para que se sienta que son las
          fiestas en nuestro pueblo.
        </p>
      </Section2ColTextImage>

      <Section2ColTextImage
        title="FESTIVAL DE LOS ABUELOS"
        imageSrc="/images/fiestas-tradiciones/san-bartolome/festival-abuelos.png"
        imageAlt="Actuación del Festival de los Abuelos"
        layout="reverse"
      >
        <p>
          Se celebra habitualmente el 22 de agosto, y para muchos supone el
          comienzo de las principales fiestas de nuestra villa, ya que es un
          día que reúne a un gran número de ciudadanos, y es el día siguiente
          cuando se conmemora las vísperas de San Bartolomé.
        </p>
        <p>
          El festival se realiza desde 1983 y se trata de una representación
          en la que los protagonistas no son los que se suben al escenario esa
          noche, sino nuestros abuelos, que se dirigen todos los años en este
          día 22 a la plaza del pueblo, un poco antes de que el reloj del
          ayuntamiento marque las 10 de la noche, con una silla en la mano para
          situarse en las primeras filas ante el tablado para poder ver así
          mejor la actuación que sus nietos y familiares les dedican.
        </p>
        <p>
          En un principio se representaban obras cortas teatrales, y el tema
          ha ido evolucionando, representándose en la actualidad actuaciones
          de baile, playbacks, actuaciones de humor, y hasta algún directo.
        </p>
        <p>
          “Es un día importante para los que allí salen, hay gente que lleva
          todo el mes ensayando, y muchos días nerviosos pensando si lo harán
          bien, y son estos días los que uno guarda como gran recuerdo cuando
          pasan los años y echas una miradita atrás, son parte de los que luego
          hace tan especial los días de verano en San Bartolo. Momentos antes
          de la actuación ves como a todo el mundo a tu alrededor corre de un
          lado para otro, se vive en un ambiente de nerviosismo, la gente
          cambiándose rápidamente ayudándose los unos a los otros, y algunos
          alterados no paran de preguntar si falta mucho para su actuación, si
          hay mucha gente fuera…” Alrededor de dos horas de disfrute de todos,
          que finaliza con todos los jóvenes subidos al escenario y todos los
          asistentes aplaudiendo, y en el que los presentadores dan finalizado
          el festival con un VIVA SAN BARTOLO!!!
        </p>
      </Section2ColTextImage>

      <Section2ColTextImage
        title="LA MARATÓN"
        imageSrc="/images/fiestas-tradiciones/san-bartolome/maraton.png"
        imageAlt="Participantes en la maratón del pueblo"
        layout="default"
      >
        <p>
          Todos los años unos días antes de las fiestas se celebra la Maratón
          del pueblo. Ésta consta de tres carreras diferenciadas en categorías
          por edad. Una primera para los más pequeños que dan una vuelta a
          varias manzanas de nuestro pueblo. Luego se celebra la de los jóvenes
          siendo el recorrido de éstos algo más costoso que el anterior. Y por
          último se celebra la carrera sénior, que siguiendo a una moto que
          sirve de guía para los corredores, recorren todo el casco urbano y
          sus alrededores hasta finalizar en el lugar de inicio, la plaza del
          pueblo. Tras las tres carreras se procede a la entrega de premios,
          medallas y refrescos para todos y copas para los ganadores de cada
          categoría.
        </p>
      </Section2ColTextImage>

      <Section2ColTextImage
        title="CAMPEONATO DE FÚTBOL"
        imageSrc="/images/fiestas-tradiciones/san-bartolome/campeonato-futbol.png"
        imageAlt="Campeonato de fútbol durante las fiestas"
        layout="reverse"
      >
        <p>
          Todos los años unos días antes de las fiestas se celebra la Maratón
          del pueblo. Ésta consta de tres carreras diferenciadas en categorías
          por edad. Una primera para los más pequeños que dan una vuelta a
          varias manzanas de nuestro pueblo. Luego se celebra la de los jóvenes
          siendo el recorrido de éstos algo más costoso que el anterior. Y por
          último se celebra la carrera sénior, que siguiendo a una moto que
          sirve de guía para los corredores, recorren todo el casco urbano y
          sus alrededores hasta finalizar en el lugar de inicio, la plaza del
          pueblo. Tras las tres carreras se procede a la entrega de premios,
          medallas y refrescos para todos y copas para los ganadores de cada
          categoría.
        </p>
      </Section2ColTextImage>

      <SectionBackToCategory
        href="/fiestas-y-tradiciones"
        label="Volver a fiestas y tradiciones"
      />
    </main>
  );
}
