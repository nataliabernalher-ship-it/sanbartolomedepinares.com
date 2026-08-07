import type { Metadata } from "next";
import { Section2ColTextImage } from "@/components/sections/Section2ColTextImage";
import { Section2ColTextOnly } from "@/components/sections/Section2ColTextOnly";
import { SectionBackToCategory } from "@/components/sections/SectionBackToCategory";
import { SectionCajaColor } from "@/components/sections/SectionCajaColor";
import { SectionHeroImage } from "@/components/sections/SectionHeroImage";

export const metadata: Metadata = {
  title: "Primeros pobladores | San Bartolomé de Pinares",
  description:
    "Orígenes de San Bartolomé de Pinares: fundación medieval, expansión territorial, la Mesta y el camino hasta el título de Villa.",
};

export default function PrimerosPobladoresPage() {
  return (
    <main className="flex flex-1 flex-col">
      <SectionHeroImage
        accentText="Historia de San Bartolo"
        title="Primeros pobladores"
        imageSrc="/images/historia/primeros-pobladores/hero.png"
        imageAlt="Vista panorámica de San Bartolomé de Pinares"
      />

      <Section2ColTextOnly
        className="!py-40"
        left={
          <>
            <p>
              Podría sospecharse con cierto fundamento la presencia de algún
              poblado vetón en las solanas del Valle de la Gaznata. Lo
              sugeriría la cercanía de algunos poblados vetones,-Toros de
              Guisando, Ceniceros, Berraco, por el sur, y por el norte Ulaca,
              Las Cogotas…-, y la condición del valle como lugar de paso, casi
              obligado, hacia el sur.
            </p>
            <p>
              Más razonable parece situar la fundación del primer núcleo
              poblacional entre los siglos XI y XII, dentro del impulso
              repoblador de Ávila y su Tierra que Alfonso VI llevó a cabo tras
              la conquista de Toledo en el año 1085. La misma denominación de
              “San Bartolomé de Pinares” nos traslada al momento de la
              fundación del primer asentamiento humano.
            </p>
            <p>
              El primer documento donde aparece citado el lugar como “Sant
              Bartholome” y situado “in Pinares”, es la “Consignación de Rentas
              del Cardenal Gil Torres” ordenada al obispado de Ávila, del año
              1250. Es un interesante elenco de las posesiones de este
              obispado junto con todas las parroquias del mismo, muchas de
              ellas hoy desaparecidas.
            </p>
          </>
        }
        right={
          <>
            <p>
              San Bartolomé era una de las 73 aldeas que pertenecían al sexmo
              de Santiago, uno de los siete sexmos que componían la
              Universidad y Tierra de Ávila. Nuestra aldea debió de ser feudo
              de algún señorío durante la Baja Edad Media aunque de ello no
              tenemos constancia. Ciertamente no perteneció a ninguno de los
              señoríos abulenses, ya que las relaciones de estos señoríos en
              este periodo no aparece citada.
            </p>
            <p>
              La iglesia tuvo su presencia en la aldea desde el inicio, como no
              podía ser de otra forma en una sociedad de cristiandad. Hasta
              1396 no tenemos constancia de la existencia de templo alguno,
              pero es fácil suponer que hubiera alguna edificación anterior. Y
              esto sobre todo, por las imágenes románicas de San Blas y Santa
              Lucía del siglo XIII, que embellecen el segundo cuerpo del
              retablo de Santa Teresa de la Iglesia parroquial.
            </p>
          </>
        }
      />

      <SectionCajaColor
        title="Crecimiento demográfico y económico"
        imageSrc="/images/historia/primeros-pobladores/1.png"
        imageAlt="Construcción del templo parroquial en la Edad Media"
        color="green"
        className="!py-0"
      >
        <p>
          Los siglos XIV y XV van a suponer un momento de expansión demográfica
          y económica para la aldea. La agricultura y la ganadería son
          potenciadas merced a la expansión del termino de la aldea y la
          influencia de la Cañada Real que lo atravesaba.
        </p>
        <p>
          A mediados del siglo XV comienza a construirse un nuevo templo
          parroquial del que conservamos la portada de entrada al atrio, la
          torre y la cabecera de la actual iglesia.
        </p>
      </SectionCajaColor>

      <Section2ColTextImage
        title="Expansión territorial"
        imageSrc="/images/historia/primeros-pobladores/2.png"
        imageAlt="Concesión de terrenos a la aldea en la Edad Media"
        layout="default"
        className="!pt-section-l-top !pb-16"
      >
        <p>
          En la progresión experimentada influyó sobremanera la ampliación del
          marco geográfico, debido a diversas concesiones de que fue objeto la
          aldea. Esto propició el incremento de tierras para la labor y dehesas
          para pastos, beneficiándose de ello la agricultura y la ganadería.
          Entre los siglos XIII al XV van a producirse tres donaciones de
          terrenos.
        </p>
        <p>
          El primero es concedido por cuatro caballeros de la ciudad de Ávila
          en 1274 por mandato del rey Alfonso X que, tras visitar Ávila y
          escuchar a los legados de los pueblos, quiso concederles terrenos
          para que las aldeas se poblasen mejor. Algunos de los topónimos
          utilizados para la descripción de los terrenos todavía persisten:
          arroyo la Mujer, majadilla la Cierva, arroyo del Tejo, la Boñigosa,
          Villarejo, Colmenarejo y la Gaznatilla, limitando con el
          heredamiento del Herradón.
        </p>
      </Section2ColTextImage>

      <Section2ColTextImage
        imageSrc="/images/historia/primeros-pobladores/3.png"
        imageAlt="Habitantes de la aldea en el paisaje del valle"
        layout="reverse"
        className="!pt-16 !pb-section-l-bottom"
      >
        <p>
          En virtud de la potestad que le otorgaba ser alcalde entregador de la
          Mesta, Garci Fernandez de Melgar en 1347 concede a San Bartolomé la
          posesión de una dehesa. Estos son los nombres de algunos de los
          terrenos: Peñanegra, Magrao, Espinarejo, Vinarejo, boca de la
          Gaznatilla, Coscojosa y Casasola.
        </p>
        <p>
          En 1402 otro alcalde de la Mesta, Juan de Piña, concede a la aldea
          otra dehesa para sus ganados. Los límites van desde Mantijierro a la
          Gaznata y siguiendo el camino del Herradón hasta el arroyo
          Valvellido, eras de Navagallegos hasta la boca de la Gaznatilla. Esta
          ampliación de terrenos tuvo como consecuencia negativa los litigios
          con los núcleos de población vecinos, que a menudo litigaron por
          ampliar su frontera en los límites con San Bartolomé. Se realizaron
          dos deslindes, el primero en 1451 entre el Horcajo y la Puentecilla;
          el segundo en 1561, donde hubo de revisarse toda la linde.
        </p>
      </Section2ColTextImage>

      <Section2ColTextImage
        title="La Mesta y la Cañada Real"
        imageSrc="/images/historia/primeros-pobladores/4.png"
        imageAlt="Pastor trashumante con rebaño en la Cañada Real"
        layout="default"
      >
        <p>
          El paso de la Cañada Real Leonesa Oriental por el término municipal y
          la ocupación ganadera de los pobladores del lugar, hicieron que la
          pequeña historia de San Bartolomé quedara ligada a la del Honrado
          Concejo de la Mesta.
        </p>
        <p>
          La Mesta fue fundada en 1273 por el monarca castellano-leones Alfonso
          X el Sabio. Era una agrupación de ganaderos tanto para asegurar los
          pastos de sus ganados, como para mantener libres las cañadas para el
          paso de rebaños.
        </p>
        <p>
          La importancia económica de la institución tuvo como consecuencia que
          durante los siglos XIII al XV los monarcas hicieran de ella objeto de
          sus privilegios. La Mesta se organizó y adquirió con el tiempo un
          cuadro administrativo bastante complejo. Los distintos funcionarios
          se ocupaban de la administración interna.
        </p>
        <p>
          Dicha administración contaba con procuradores, secretarios,
          alguaciles y escribanos. El Archivo Municipal de San Bartolomé
          conserva los nombramientos de dos “procuradores especiales”, Adán
          Pérez y Gil Torre, en 1326. Eran defensores de los derechos de la
          Mesta y podían actuar como tales en caso de juicios en los que estos
          derechos estuvieran en juego. La administración de justicia, no
          obstante, estaba encomendada a los “alcaldes”.
        </p>
        <p>
          Ademas de la función el alcalde mayor entregador tuvo dos funciones ;
          la entrega de posesiones y dehesas a los concejos y el deslinde y
          cuidado de las cañadas. Haciendo uso de este privilegio, los alcaldes
          mayores concedieron dos dehesas a San Bartolomé. La primera fue
          concedida por Garci Fernández Melgar, en nombre del alcalde mayor D.
          Yenego López Orozco el 1 de marzo de 1347. La segunda fue otorgada en
          1402 por Juan Piña, en nombre de Garci Alvarez de Toledo.
        </p>
      </Section2ColTextImage>

      <SectionCajaColor
        title="Una comunidad floreciente"
        imageSrc="/images/historia/primeros-pobladores/5.png"
        imageAlt="Calle de la villa en época moderna"
        color="blue"
        className="!py-0"
      >
        <p>
          Tras el largo periodo de consolidación que supuso la etapa medieval,
          la primitiva aldea va a experimentar a partir del S XVI un despegue
          que la va a situar entre los núcleos más influyentes de la Tierra de
          Pinares. En ello tuvo mucho que ver su nuevo régimen de gobierno, que
          va a propiciar una definitiva ampliación del término municipal y un
          fuerte incremento de la actividad económica. Y así mismo fue
          determinante la localización geográfica de la recién nombrada
          “Villa”, que seguirá siendo lugar de paso para ganaderos y viajeros
          de todo tipo.
        </p>
        <p>
          Como reconocimiento de la relevancia de esta población en 1654 se
          confirió a San Bartolomé el título de Villa. Según D. Marcelo Gómez
          Matías, el primer documento en el que figura como tal es del 1
          septiembre de 1654.
        </p>
        <p>
          En 1670 disfrutaba del señorío D. Fernando Valenzuela, que había
          comprado las tierras que se extendían desde Ávila hasta Cebreros. En
          1675 se le nombra “marqués en Castilla de la Villa de San Bartolomé
          de Pinares, con el título de Marquesado de Villasierra”, con lo que ,
          desde entonces, nuestra Villa va a estar unida a ese título.
        </p>
      </SectionCajaColor>

      <Section2ColTextOnly
        className="!pt-section-l-top !pb-section-xl-bottom"
        left={
          <>
            <p>
              Aunque la población sigue dependiendo de la agricultura y la
              ganadería en la Villa también podíamos encontrar guardas
              forestales, serradores, carpinteros, herreros, albañiles,
              tendero, tabernero, carnicero y barbero.
            </p>
            <p>
              La explotación de los pinares era exclusiva del Concejo, que
              autorizaba las cortas y recibía el beneficio de sus ventas. Este
              monopolio en la explotación tuvo siempre como fin salvaguardar la
              riqueza que los pinares representaban para la Villa.
            </p>
            <p>
              El abundante cultivo de cereales mantuvo hasta nuestro siglo
              hasta cinco molinos harineros; además, durante el siglo XIX,
              contó San Bartolomé con tres fábricas de curtidos.
            </p>
          </>
        }
        right={
          <>
            <p>
              Al año siguiente D. Fernando cae en desgracia por la oposición de
              D. Juan José de Austria, le enajenan todos sus bienes y es
              desterrado a Filipinas. Posteriormente murió en Mejico en 1692.
              Sin embargo, permaneció el título del marquesado que ostentó su
              mujer, y posteriormente su descendencia, al menos hasta los
              albores de nuestro siglo.
            </p>
            <p>
              En este periodo se definiría a la Villa como lugar pasajero.
              Ademas de la Cañada que en las épocas de trashumancia acercaba a
              San Bartolomé ganaderos en busca de mejores pastos; la carretera,
              que tangencialemente pasaba por el casco urbano, era paso habitual
              desde Ávila hacia Toledo y Madrid. Para acoger a los viajeros,
              San Bartolomé contó con tres mesones o paradores, además de un
              Hospital.
            </p>
          </>
        }
      />

      <SectionBackToCategory href="/historia" label="Volver a historia" />
    </main>
  );
}
