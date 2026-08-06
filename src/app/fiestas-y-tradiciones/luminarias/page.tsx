import type { Metadata } from "next";
import { Section2ColTextImage } from "@/components/sections/Section2ColTextImage";
import { SectionHeroImage } from "@/components/sections/SectionHeroImage";

export const metadata: Metadata = {
  title: "Las Luminarias | San Bartolomé de Pinares",
  description:
    "Las Luminarias de San Bartolomé de Pinares: la fiesta del 16 de enero en honor a San Antonio Abad, con hogueras, jinetes y la carrera de cintas.",
};

export default function LuminariasPage() {
  return (
    <main className="flex flex-1 flex-col">
      <SectionHeroImage
        accentText="Las luminarias"
        title="LAS LUMINARIAS"
        description="Como cada 16 de Enero, San Bartolomé de Pinares celebra las fiestas en honor a San Antonio Abad, patrón de los animales, más conocida como fiesta de Las Luminarias."
        imageSrc="/images/fiestas-tradiciones/luminarias/hero.png"
        imageAlt="Jinetes atravesando las hogueras en Las Luminarias"
      />

      <Section2ColTextImage
        imageSrc="/images/fiestas-tradiciones/luminarias/intro.png"
        imageAlt="Caballo adornado durante Las Luminarias"
        layout="default"
      >
        <p>
          La fiesta consiste en la propagación de grandes hogueras por las que
          los jinetes “bartolos” y otros jinetes llegados de pueblos de
          alrededor, atraviesen con sus burros o caballos las hogueras con el
          fin de purificar sus bestias y que el santo les de salud y les prive
          de enfermedades durante todo el año.
        </p>
        <p>
          Nadie consta de orígenes, ni si quiera escritos, pero se dice que es
          una tradición que lleva con nosotros desde el siglo XVIII., y sus
          orígenes se basan en la necesidad de tener sus animales con salud
          para su subsistencia, y posiblemente de años malos de epidemias en
          los que morían abundantemente estos animales. También la gente
          comenta, que antiguamente no solo eran caballos y burros los que
          sacaban al acto de purificación, si no también otros tipos de ganado,
          como bovino, ovino…
        </p>
        <p>
          Supongo que para la mayoría de los “bartolos”, esta sea la fiesta más
          bonita y vistosa, y la que atrae mayor turismo, para mí también lo
          es. A continuación les voy a explicar todo el procedimiento y el
          desarrollo de la fiesta:
        </p>
      </Section2ColTextImage>

      <Section2ColTextImage
        title="DIAS DE LOS RAMOS"
        imageSrc="/images/fiestas-tradiciones/luminarias/ramos.png"
        imageAlt="Recogida de ramos en el monte para Las Luminarias"
        layout="reverse"
      >
        <p>
          Cada grupo de amigos, familia o peñas de “San Bartolo” suelen ir el
          fin de semana anterior al día 16 al monte cargados de herramienta,
          comida y de un buen vino de la tierra para amenizar el día.
        </p>
        <p>
          Todos se reúnen para recoger todo tipo de ramos, piornos o jaras para
          luego quemarlas durante la noche del 16 y la mañana del 17 de enero.
          Normalmente se suelen repartir las tareas, mientras que unos cortan
          (con picos, petas y actualmente con motosierras o desbrozadoras),
          otros los amontonan preparando los haces o gavillas, que antes fueron
          atados y cargados al camión , dumper o furgoneta, por otros cuantos.
        </p>
        <p>
          Es un día duro de trabajo al que los “bartolos” le es indiferente, ya
          que preparan con mucho empeño su tradicional fiesta. A pesar de ser
          duro, la gente se lo pasa en grande, ya que luego cada grupo suele
          comer en el campo con una gran parrillada y el vino, que no falte.
        </p>
        <p>
          Cuando empieza a atardecer cada grupo vuelve al pueblo para descargar
          los ramos, cada uno suele poner su luminaria en el sitio del año
          anterior. Antiguamente, los maestros dejaban a los niños salir un
          poco antes para que fueran a por ramos, y cada uno ponía una pequeña
          luminaria en la puerta de su casa.
        </p>
      </Section2ColTextImage>

      <Section2ColTextImage
        title="Día de Las Luminarias"
        imageSrc="/images/fiestas-tradiciones/luminarias/dia-luminarias-1.png"
        imageAlt="Jinete recorriendo las calles durante Las Luminarias"
        layout="default"
      >
        <p>
          Comienza el día 16 de Enero por la tarde, en el que el mayordomo y
          sus dos jurados se acercan al salón parroquial a recoger las varas
          que dejaron allí los mayordomos del año anterior.
        </p>
        <p>
          El mayordomo es la persona que organiza la fiesta y deberá pagar
          todos los gastos de esta, y también es la persona que deberá estar
          presidiendo las misas y dirigir el recorrido de Las Luminarias,
          también portando las varas. Las varas son tres estandartes que
          llevarán los mayordomos durante toda la fiesta, una de ellas es la
          del mayordomo, que es la que lleva la imagen de San Antonio Abad, más
          conocido como San Antón y lleva atada un lazo rojo, las otras dos
          varas las portarán los jurados, que terminan en forma de cruz.
        </p>
        <p>
          Al recoger las varas, se reúnen con los representantes del
          ayuntamiento, con Don Marino, que es el párroco de la localidad, y
          acompañados por Paulino y “tío David Moro”, que acompañarán la fiesta
          con la dulzaina y el tambor. Y con todo esto y el acompañamiento, se
          dirigen desde la casa del cura hacia la iglesia, donde comienzan las
          vísperas.
        </p>
        <p>
          Después de la misa, todos vuelven al salón parroquial, donde se da un
          convite con unos dulces y unos litros de limonada y buen vino de la
          tierra, y se echan unos bailes al ritmo de la gaita y del tambor. Y
          poco después se enciende la luminaria del mayordomo, que es la
          primera en encenderse.
        </p>
      </Section2ColTextImage>

      <Section2ColTextImage
        imageSrc="/images/fiestas-tradiciones/luminarias/dia-luminarias-2.png"
        imageAlt="Caballos saltando las hogueras en Las Luminarias"
        layout="reverse"
      >
        <p>
          Mientras, los jinetes terminan de aparejar a sus caballos y burros, y
          recoger las crines y las colas de los equinos, para evitar que se
          quemen.
        </p>
        <p>
          Comienzan a arder los ramos y a encenderse todas las hogueras,
          aproximadamente unas veinte por todo el pueblo. Para que echen más
          humo, si no están húmedos, los ramos se mojan bastante para el acto
          de purificación. Comienza a llenarse el pueblo de gente, sobre todo
          de forasteros, turistas, medios de comunicación, bomberos, cruz roja
          y fuerzas de seguridad. Y como decimos en San Bartolo “YA HUELE A
          HUMO!!!”
        </p>
        <p>
          Hacia las ocho y media de la tarde, ya se empiezan a llegar las
          caballerías, y se escucha el peculiar sonido renqueante de las
          herraduras sobre los adoquines de las calles de la localidad.
        </p>
        <p>
          Y llegan las nueve de la noche, comienzan a repicar las campanas, y
          comienza el recorrido por el pueblo, saliendo desde el ayuntamiento,
          y encabezado por la gaita , el tambor ,y por los mayordomos, que
          llevan en sus caballos las varas que identifican la fiesta. Justo
          detrás, aproximadamente un centenar de jinetes a lomos de sus
          caballos y algún que otro asno, recorren las calles del pueblo al son
          de una pegadiza canción tocada por los músicos.
        </p>
      </Section2ColTextImage>

      <Section2ColTextImage
        imageSrc="/images/fiestas-tradiciones/luminarias/dia-luminarias-3.png"
        imageAlt="Jinete junto a una hoguera durante Las Luminarias"
        layout="default"
      >
        <p>
          Poco después se vuelven a reunir todas las caballerías en el
          ayuntamiento , y desde la casa del cura, se procede a la bendición de
          los animales, donde el sacerdote desde el balcón bendice a los
          animales y los rocía con agua bendita . La gente disfrutará de un
          rápido convite de pastas y vino de la tierra, para luego continuar el
          recorrido.
        </p>
        <p>
          Los caballos pasan por las hogueras atravesando una tras otra dando
          lugar a unas imágenes muy vistosas y así para que el fuego y el humo
          los purifiquen y estén libres de enfermedades para otro año más.
        </p>
        <p>
          Alrededor de las 11 de la noche se llega al punto de partida , donde
          se termina esta parte de la fiesta.
        </p>
        <p>
          Los jinetes vuelven a sus cuadras, para dar de cenar a sus tan
          queridos animales. Mientras, la gente de a pie, van preparando las
          ascuas para continuar la fiesta y cada grupo de amigos se reúne en
          las hogueras, para asar chuletas , chorizo, sardinas…y luego a seguir
          la fiesta por distintos locales de la localidad hasta altas horas de
          la madrugada.
        </p>
      </Section2ColTextImage>

      <Section2ColTextImage
        title="Día de San Antón"
        imageSrc="/images/fiestas-tradiciones/luminarias/san-anton.png"
        imageAlt="Caballos adornados el Día de San Antón"
        layout="default"
      >
        <p>
          Comienza el día 17, volviéndose a encender las hogueras, y a llenar
          el pueblo de humo, desde muy temprano.
        </p>
        <p>
          Los mayordomos vuelven a salir por la mañana con los caballos
          adornados con flores de papel y con unos ropones con mucho colorido.
          Siguen llevando consigo las varas, que esta vez son besadas por los
          lugareños y a la misma vez se le da un donativo a los mayordomos para
          ayudar a pagar los gastos que supone la fiesta. Acompañados de la
          gaita y el tambor, vuelven a recorrer todo el pueblo, en el que los
          bartolos continúan la fiesta , sin perderse el tradicional desayuno
          de cada hoguera , abundando el chocolate, la bollería, y sin que
          falte la botella de orujo. Sobre el mediodía comienza la Santa Misa
          en honor a San Antón, y después de ella, se saca la estatua del santo
          en procesión, para que también se ahume. Una vez terminada la misa,
          el mayordomo invita a los asistentes a pastas y limonada en la puerta
          del salón parroquial, donde la gaita y el tambor amenizará el
          convite a los asistentes para que bailen unas jotas.
        </p>
        <p>
          La gente regresa a sus respectivas hogueras para comer allí. A las
          cinco de la tarde vuelven a salir las caballerías. Se reúnen todos en
          la plaza, donde va a comenzar la carrera de cintas.
        </p>
      </Section2ColTextImage>

      <Section2ColTextImage
        title="La carrera de cintas"
        imageSrc="/images/fiestas-tradiciones/luminarias/carrera-cintas.png"
        imageAlt="Público asistiendo a la carrera de cintas"
        layout="reverse"
      >
        <p>
          La carrera de cintas suele ser más peculiar y se realiza en bastantes
          sitios de nuestro país.
        </p>
        <p>
          Consiste en ir montado a caballo o burro e introducir un lapicero por
          una anilla, que a su vez está enrollada en un cilindro de madera y
          prendida con un alfiler. Las cintas se colocan en los cilindros y se
          cuelgan de una cuerda, de un extremo en una pared y de otro en una
          argolla, para que una persona la afloje o tire de ella depende de la
          altura del animal y la gente llegue mejor. Cada cinta tiene dentro un
          premio en metálico que al finalizar el concurso sea abonado por el
          mayordomo a cada afortunado jinete. Antiguamente se corrían los
          gallos, que era igual que las cintas pero con un gallo colgado boca
          abajo. Cada jinete ponía un gallo y a lomos de su caballo le tenía
          que arrancar la cabeza a cuajo, el que más cabezas cogiera más gallos
          se llevaban. Pero la brutal y sangrienta fiesta se suprimió.
          Normalmente se realizaban en el atapao y esta fiesta se cambió por
          las cintas aproximadamente hace más de 30 años.
        </p>
        <p>
          Sin dejar de sonar la gaita y el tambor ante una gran expectación,
          San Bartolomé de Pinares despide por un año más sus ansiadas fiestas
          de San Antón.
        </p>
      </Section2ColTextImage>
    </main>
  );
}
