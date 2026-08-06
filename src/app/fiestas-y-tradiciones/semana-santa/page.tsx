import type { Metadata } from "next";
import { Section2ColTextImage } from "@/components/sections/Section2ColTextImage";
import { Section2ColTextOnly } from "@/components/sections/Section2ColTextOnly";
import { SectionHeroImage } from "@/components/sections/SectionHeroImage";

export const metadata: Metadata = {
  title: "Semana Santa | San Bartolomé de Pinares",
  description:
    "Semana Santa en San Bartolomé de Pinares: del Domingo de Ramos al Domingo de Resurrección, procesiones y tradiciones del municipio.",
};

export default function SemanaSantaPage() {
  return (
    <main className="flex flex-1 flex-col">
      <SectionHeroImage
        accentText="En San Bartolo es especial"
        title="SEMANA SANTA"
        description={
          <>
            <p>
              La Semana Santa es la conmemoración anual en que el calendario
              cristiano recuerda la Pasión, Muerte y Resurrección de Jesús de
              Nazaret. Es por ello que en San Bartolomé de Pinares sea unos días
              que se viven con bastante fervor religioso.
            </p>
            <p>
              La fecha de las Semana Santa es variable, se proyecta para el
              primer domingo después de la primera luna llena de la primavera
              boreal (21 de marzo), de esta manera, la Semana Santa es una
              celebración movible que puede tener lugar en fechas tan dispares
              como el 22 de marzo o el 25 de abril. Dicho domingo será el
              Domingo de Pascua, día en el que culmina y sitúa el comienzo en el
              domingo previo, Domingo de Ramos.
            </p>
          </>
        }
        imageSrc="/images/fiestas-tradiciones/semana-santa/hero.png"
        imageAlt="Procesión de Semana Santa en San Bartolomé de Pinares"
      />

      <Section2ColTextImage
        title="DOMINGO DE RAMOS"
        imageSrc="/images/fiestas-tradiciones/semana-santa/ramos-1.png"
        imageAlt="Bendición de ramos en Domingo de Ramos"
        layout="default"
      >
        <p>
          Es el primer día de la semana y representa la llegada de Jesús a
          Jerusalén. Los escritos cuentan que Jesús llego a Tierra Santa
          montado en un borrico y todos los fieles le recibieron con gran
          fervor y entusiasmo portando palmas simbolizando la aceptación de
          Jesús como Rey.
        </p>
        <p>
          En nuestro pueblo se celebra la ceremonia por la mañana en la
          iglesia. Se entregan ramos de romero representando las palmas que
          portaban en Jerusalén y que simboliza la proclamación de Jesús como
          Rey del Cielo y la Tierra. Antiguamente el Sacerdote era el
          encargado de bendecir el romero en el altar y se entregaba en mano a
          los feligreses. En la actualidad se bendicen y cada uno coge su ramo
          en la entrada del recinto religioso y lo introduce en él creando una
          atmosfera de agradable olor.
        </p>
      </Section2ColTextImage>

      <Section2ColTextImage
        imageSrc="/images/fiestas-tradiciones/semana-santa/ramos-2.png"
        imageAlt="Procesión del Domingo de Ramos"
        layout="reverse"
      >
        <p>
          Se realiza una pequeña procesión que rodea la Iglesia saliendo por la
          puerta norte y entrando de nuevo por la situada al sur.
        </p>
        <p>
          Tras la ceremonia muchos de los asistentes construye una cruz con los
          ramos y la sitúa en lugar visible en sus casas para que ésta sea
          bendecida.
        </p>
        <p>
          Los ramos sobrantes se queman y son la fuente de las cenizas usadas
          en los servicios del Miércoles de Ceniza.
        </p>
        <p>
          A las cuatro de la tarde se realiza una procesión en la que cuatro
          mujeres sacan la imagen de la Virgen Dolorosa, y la portan haciendo
          cada uno de pasos del Viacrucis situados en distintos lugares
          alrededor de todo el municipio. Al llegar a la ermita de la Virgen de
          la Visitación sale a la procesión la imagen de la Virgen de la
          Visitación a hombros de mozos del pueblo y las mujeres dejan allí a
          la Virgen Dolorosa. Tras esto se dirigen a la ermita del Santo
          Cristo, de donde salen las imágenes del Santo Cristo, el Nazareno y
          en la actualidad también el “Atado”. Con ellos y cantando “Por tu
          pasión Jesús mío” se vuelve al recinto parroquial.
        </p>
      </Section2ColTextImage>

      <Section2ColTextImage
        title="LUNES SANTO"
        imageSrc="/images/fiestas-tradiciones/semana-santa/lunes-santo.png"
        imageAlt="Procesión del Lunes Santo"
        layout="default"
      >
        <p>
          El Lunes Santo es un día crucial, no tanto en los festejos y
          liturgias, sino en su significado histórico. Luego de haber pasado la
          noche en Betania, Jesús vuelve a la cercana Jerusalén y se dirige al
          templo, pero lo encuentra convertido en un mercado, lleno de
          comerciantes dispuestos a hacer negocios entre ellos. Viendo el
          fatídico espectáculo que tenía frente, Jesús se enfrenta a los
          vendedores y los echa del lugar, argumentando que era un lugar
          sagrado al que había que respetar; un lugar donde se iba a rendir
          culto.
        </p>
      </Section2ColTextImage>

      <Section2ColTextImage
        title="MARTES SANTO"
        imageSrc="/images/fiestas-tradiciones/semana-santa/martes-santo.png"
        imageAlt="Procesión del Silencio de las Mujeres"
        layout="default"
      >
        <p>
          Ese día se hallaba Jesús en casa de Simón, el leproso al que había
          curado milagrosamente. Durante la cena una mujer hace su entrada en
          la casa, era María. La mítica mujer arroja un perfume sobre los pies
          de Jesús, luego los besa y seca con sus cabellos. Al ver esta escena,
          las personas de la casa se encolerizan con ella, diciendo que el
          perfume podría haber servido como mercancía para vender y beneficiar
          luego a los pobres. Sin embargo, ante el asombro general, el Señor
          defiende a María diciendo: &quot;Esto ha sido como una preparación
          para mi entierro&quot;. El mito cristiano sostiene que es en este
          momento en el cual anuncia Jesús su muerte.
        </p>
        <p>
          En San Bartolo se realiza la Procesión del Silencio de las Mujeres,
          celebrada a las diez de la noche y en la que se porta la imagen de la
          Virgen de las Angustias. El recorrido sale desde la iglesia y se sube
          el pueblo por la calle de la Virgen y se baja por la calle Mayor
          hasta la iglesia de nuevo.
        </p>
      </Section2ColTextImage>

      <Section2ColTextImage
        title="MIÉRCOLES SANTO"
        imageSrc="/images/fiestas-tradiciones/semana-santa/miercoles-santo.png"
        imageAlt="Procesión de los Hombres el Miércoles Santo"
        layout="default"
      >
        <p>
          El Miércoles Santo es el día de la entrega y la traición. Este día se
          recuerda el momento en que Judas, uno de los doce discípulos del
          Señor, se pone de acuerdo con los enemigos de Jesús y se ofrece a
          entregarlo a cambio de 30 monedas de plata. Es el comienzo de la
          mortal confabulación.
        </p>
        <p>
          Es el día de la Procesión de los Hombres, realizándose al igual que
          la de Mujeres a las diez de la Noche. En ella se lleva la imagen del
          Nazareno. El recorrido de nuevo es el de subir por la calle de la
          Virgen y bajando por la Calle Mayor.
        </p>
      </Section2ColTextImage>

      <Section2ColTextOnly
        left={
          <>
            <h2>JUEVES SANTO</h2>
            <p>
              El Jueves Santo, celebrado el jueves anterior al Domingo de
              Resurrección, se trata del primer día del Triduo Pascual. En este
              día la Iglesia Católica conmemora la institución de la Eucaristía
              en la Última Cena de Cristo.
            </p>
            <p>
              A las cinco de la tarde se realizan “Los oficios” Al comienzo de
              la misa repican las campanas y desde entonces éstas permanecerán
              muertas hasta el Domingo de Resurrección. Su sonido es sustituido
              por el bronco y grave de las “carracas” que portan los
              monaguillos y que hacen sonar para llamar a la oración a los
              devotos anunciando la hora santa, los oficios, el entierro del
              viernes, así como la vigilia del sábado. También se utilizan en
              lugar de las campanillas en la consagración produciendo un
              estruendo en forma de luto.
            </p>
            <p>
              En “Los Oficios” el sacerdote simbólicamente lava los pies de los
              niños que van a tomar ese mismo año la comunión y a algún
              voluntario.
            </p>
            <p>
              El lavatorio de pies representa el momento en que Jesús llega al
              Cenáculo y lava los pies de sus discípulos uno a uno. Una vez en
              la mesa se celebra la misa, donde el Señor ordena a sus apóstoles
              sacerdotes y les indica que de ese momento en adelante ellos
              celebrarían la misa.
            </p>
          </>
        }
        right={
          <>
            <p>
              Cuando finaliza la cena, Jesús se despide de su madre y sale en
              dirección a un huerto de olivos, acompañado de algunos
              discípulos. Esa misma noche, Jesús es entregado por Judas y
              puesto en prisión donde lo interrogan durante toda la noche.
            </p>
            <p>
              Tras la misa se celebra la “Procesión de los Pasos” en la que se
              acompaña a la imagen del Nazareno camino de la ermita de la
              Visitación. Una vez allí, sale la Virgen de la Dolorosa, de color
              negro y con la cara cubierta (que permanece allí desde el Domingo
              de Ramos). En la puerta de la ermita se realizan “los pasos”, en
              el que la imagen de la Virgen sale al encuentro de Cristo
              Crucificado. Las dos imágenes se colocan de frente y se van
              acercando dando tres pasos y agachándose los costaleros hasta
              quedar una imagen junto a la otra. Se sigue la procesión hasta la
              ermita del Santo Cristo, donde se dejaba la efigie de Jesús
              Crucificado, que el domingo se llevo al templo parroquial
              trasladando ahora la del sepulcro para tenerla dispuesta a los
              fines del Santo Entierro en la noche del viernes.
            </p>
            <p>
              En la noche del jueves se rememora la Oración en el Huerto de los
              Olivos en la “Hora Santa”, y después la iglesia permanece toda la
              noche abierta para que los devotos puedan velar la imagen del
              Santísimo.
            </p>
          </>
        }
      />

      <Section2ColTextImage
        title="VIERNES SANTO"
        imageSrc="/images/fiestas-tradiciones/semana-santa/viernes-santo.png"
        imageAlt="Cristo crucificado el Viernes Santo"
        layout="default"
      >
        <p>
          Es un día crucial en la liturgia cristiana y la conmemoración de la
          muerte de Cristo en la cruz. Luego de su encarcelamiento Jesús es
          sometido a un juicio, donde sufre torturas aberrantes. Es en ese
          mismo momento donde recibe la corona de espinas sobre su cabeza y le
          cargan la cruz. Así, Cristo recorre la ciudad de Jerusalén con la
          pesada cruz de madera en dirección al Calvario. A horas del mediodía
          el Señor es crucificado. Más tarde, para certificar su muerte le
          clavan una lanza confirmando el fallecimiento. A la noche, los
          fieles desclavan el cuerpo de Cristo y lo entregan a su madre, para
          finalmente enterrarlo en el sepulcro. Ese mismo día Judas,
          arrepentido de su traición, se ahorca y acaba con su vida. Durante el
          Viernes Santo se realiza la adoración del Árbol de la Cruz y el Via
          Crucis. Es el único día del calendario litúrgico donde no se celebra
          la eucaristía.
        </p>
        <p>
          El viernes por la mañana la gente sigue acudiendo a rezar a la
          iglesia. Antiguamente este día el sacerdote daba “el sermón de las
          siete palabras”. Ya por la tarde a las cinco, se celebran los oficios
          y la adoración de la cruz. A las diez de la noche es el Santo
          Entierro, en el que salen en procesión la Virgen Dolorosa y El
          Sepulcro, y mientras se sube por las calles se canta el miserere (el
          Sepulcro se lleva de vuelta por el día y fuera de procesión, a esto
          se le llama “bajar robado”). Al llegar a la ermita del Santo Cristo
          se deja allí el Sepulcro y la Dolorosa camina sola hacia la iglesia,
          mientras se baja cantando el “Stabat Mater Dolorosa”. Una vez en la
          iglesia el sacerdote da “el Sermón de la Soledad” y se cantan las
          estrofas del “Madre Amorosa”
        </p>
      </Section2ColTextImage>

      <Section2ColTextImage
        title="Sábado SANTO"
        imageSrc="/images/fiestas-tradiciones/semana-santa/sabado-santo.png"
        imageAlt="Vigilia Pascual el Sábado Santo"
        layout="default"
      >
        <p>
          Día de la Semana Santa en el que la Iglesia católica conmemora a Jesús
          en el sepulcro. El sábado Jesús yacía en su tumba para el desconsuelo
          de los apóstoles que estaban convencidos de que todo había acabado.
          Mientras tanto, su madre recordaba las palabras del Señor cuando
          predecía &quot;Al tercer día resucitaré&quot;. En este día tiene
          lugar una de las principales celebraciones religiosas de todo el año:
          la Vigilia Pascual, que se realiza luego de las 6 pm. La Vigilia es
          la más grande y santísima noche del año, la celebración antigua más
          importante y más rica de contenido. En ella se vela para expresar que
          los fieles siguen en la espera, en la vigilancia y en la esperanza de
          la venida del Señor, del cumplimiento del nuevo y definitivo paso
          con él.
        </p>
        <p>
          El Sábado santo, a las diez de la noche celebramos la Santa Vigilia
          Pascual. Se enciende en el patio de la iglesia un fuego, el cual se
          bendice y con el se enciende el Cirio Pascual.
        </p>
      </Section2ColTextImage>

      <Section2ColTextOnly
        left={
          <>
            <h2>Domingo de Resurrección</h2>
            <p>
              De acuerdo con los escritos cristianos, el Domingo de Pascua es
              el día en el cual Jesús salió de su sepulcro. Este hecho es
              fundamental para el cristianismo. La historia cuenta que en
              cuanto se hace de día, tres mujeres van al sepulcro donde Jesús
              estaba enterrado y ven que no está su cuerpo. Un Ángel les dice
              que ha resucitado. Van donde está la Virgen con los Apóstoles y
              les dan la gran noticia.
            </p>
            <p>
              Mientras tanto, Pedro y Juan corren al sepulcro y ven las vendas
              en el suelo. El desconsuelo que habían tenido la noche anterior
              se transforma en un júbilo general. Rápidamente lo transmiten a
              los demás Apóstoles y discípulos y todos permanecen con la Virgen
              en espera del gran momento de volver a encontrarse con el Señor.
            </p>
            <p>
              Fueron los primeros cristianos quienes transformaron la
              celebración de la Pascua judía en la fiesta cristiana de la
              resurrección de Jesús de Nazaret, celebrada el domingo siguiente
              a la luna llena, posterior al equinoccio de primavera (21 de
              marzo).
            </p>
          </>
        }
        right={
          <>
            <p>
              El domingo de Resurrección por la mañana se realiza la ceremonia
              más importante para los cristianos. En San Bartolomé antes de la
              misa se saca la imagen de la Virgen de la Visitación cubierta con
              un manto negro y la imagen de Cristo Resucitado para representar
              su encuentro, la procesión se realiza en la Calle Peligros en el
              centro del municipio. Se hacen unos pasos con las imágenes
              caminando de frente, y en el tiempo que tardan en quedar de
              frente una imagen de otra, una persona va retirando el manto
              negro de la virgen hasta quedar descubierto su precioso vestido
              blanco.
            </p>
            <p>
              Después se baja a la iglesia y se celebra la misa de resurrección!
              Las campanas vuelven a repicar en señal de alegría porque Cristo
              vive.
            </p>
            <p>
              Al final de la ceremonia se sube en procesión a la Virgen de la
              Visitación para dejarla en su ermita, donde se la despide con la
              Salve cantada y el adiós reina del cielo.
            </p>
          </>
        }
      />
    </main>
  );
}
