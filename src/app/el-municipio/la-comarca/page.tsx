import type { Metadata } from "next";
import { Section1ColTextOnly } from "@/components/sections/Section1ColTextOnly";
import { Section2ColTextImage } from "@/components/sections/Section2ColTextImage";
import { SectionBackToCategory } from "@/components/sections/SectionBackToCategory";
import { SectionHeroImage } from "@/components/sections/SectionHeroImage";

export const metadata: Metadata = {
  title: "La comarca | San Bartolomé de Pinares",
  description:
    "Turismo y patrimonio de la comarca del Valle del Alberche y Tierra de Pinares: pueblos, paisaje y la región de Ávila.",
};

export default function LaComarcaPage() {
  return (
    <main className="flex flex-1 flex-col">
      <SectionHeroImage
        accentText="Valle del Alberche y Tierra de Pinares"
        title="turismo y patrimonio de la comarca"
        imageSrc="/images/el-municipio/la-comarca/hero.png"
        imageAlt="Paisaje del Valle del Alberche y Tierra de Pinares"
      />

      <Section2ColTextImage
        imageSrc="/images/el-municipio/la-comarca/mapa.png"
        imageAlt="Mapa de la comarca Valle del Alberche y Tierra de Pinares"
        layout="default"
        imageFit="contain"
        className="!pt-40 !pb-16"
      >
        <p>
          Comarca turística por excelencia, muy próxima a Madrid, y llena de
          belleza y contrastes, constatables desde cualquier punto, tanto por
          la variable altitud (desde 1500 m. en la Cañada hasta los 760 de
          Cebreros), como por el clima.
        </p>
        <p>
          El valle del Alberche es estrecho y granítico, discurre entre
          gargantas y zonas verdes de gran belleza, que colaboran a hacer del
          Alberche el principal afluente del Tajo. En su zona nororiental se
          sitúa la comarca denominada de Pinares- Bajo Alberche. El paisaje se
          muestra lleno de variados contrastes: granito, pastizales y
          matorrales junto con extensiones de pinos y robles.
        </p>
        <p>
          Antes de reseñar la importancia artística e histórica de sus pueblos,
          que la tienen, y abundante, hay que señalar el gran atractivo
          turístico que el clima, las aguas y la generosa naturaleza ofrecen a
          esta comarca. Son abundantes las zonas de baño (sobre todo en el
          curso del río Alberche), con excelentes playas, merenderos… lugares
          para practicar todo tipo de deportes (natación, surf, piragüismo,
          vela, golf…), variadas las actividades que la geografía de la comarca
          permite realizar (senderismo, ciclismo de montaña, rutas ecuestres,
          quads).
        </p>
      </Section2ColTextImage>

      <Section1ColTextOnly title="Pueblos de la comarca">
        <p>
          En el nacimiento del Alberche obligado es nombrar poblaciones tan
          bellas como San Martín de la Vega del Alberche, Garganta del Villar y
          Cepeda la Mora, con parajes tan sugerentes como las Cuevas del
          Maragato, que inspiraron al mismísimo Goya.
        </p>
        <h3>El Barraco</h3>
        <p>
          La casa municipal del Barraco data de 1565 y en ella luce airoso el
          escudo de don Juan de Águila, capitán de Felipe II, también puede
          admirarse la Iglesia, del S. XVI. El nombre de “Barraco” parece
          provenir de un verraco celta hallado en esta villa.
        </p>
        <p>
          En el Barraco ha florecido en los últimos años una interesante
          industria peletera, y el pueblo entero aparece salpicado de tiendas
          donde pueden adquirirse artículos de piel de gran calidad. De El
          Barraco a El Tiemblo llegamos atravesando el embalse del Burgillo,
          zona de veraneo repleta de chalets. En el pantano del Burguillo,
          además de darse un buen baño, tomar el sol y comer en los abundantes
          merenderos y restaurantes, se pueden practicar deportes acuáticos,
          surf, motos acuáticas, vela, piragüas… y disfrutar del paisaje, que
          según desde que punto se contemple llega a recordar los fiordos
          noruegos. Rodeando a través del muro de contención el embalse del
          Burguillo llegamos al Valle de Iruelas, antes mencionado, paraje
          ecológico sin par, bien equipado para el turismo rural (colonia de
          casas rurales, camping y centro de interpretación de la naturaleza).
        </p>
        <h3>Cebreros</h3>
        <p>
          Es famoso por sus vinos (uva albillo, sol y buenas temperaturas). La
          Iglesia parroquial se le atribuye a Herrera, pero lo que más llama la
          atención en Cebreros son las ruinas del convento franciscano de estilo
          gótico isabelino, las bolas o “perlas” de piedra, tan presentes en
          muchos edificios abulenses, ornamentan el conjunto. Curiosa resulta
          la picota de piedra. Es de destacar en Cebreros sus famosos
          carnavales. A las afueras una hermosa ermita en perfecta armonía con
          el paisaje: la ermita de Valsordo (S.XVI), y muy cerca un bello puente
          románico.
        </p>
        <h3>El Tiemblo</h3>
        <p>
          es una de las poblaciones que multiplica su población en verano, y
          también lugar elegido por la historia. La Iglesia parroquial tiene
          aspecto de fortaleza, lo cual no deja de llamar la atención, y data
          del S.XVI. Los famosos Toros de Guisando son figuras zoomorfas
          labradas en granito y de origen celta. Los típicos verracos.
        </p>
        <p>
          Mucha tinta se ha vertido sobre estas figuras; sintetizando diremos
          que algunos representan toros y otros cerdos o jabalíes, y es que su
          función podría ser de origen mágico-religioso, (como tótems
          protectores del ganado), o bien tratarse de monumentos funerarios, de
          indicadores de caminos, o de señalizadores fronterizos. En este lugar
          Isabel la Católica fue reconocida heredera de Castilla por su hermano
          Enrique IV (1468), quien de esta manera renunciaba a la paternidad de
          su supuesta hija Juana, llamada Beltraneja, ya que las malas lenguas
          atribuían a don Beltrán de la Cueva la paternidad biológica de Juana.
          Frente a los toros, el Convento de Guisando, fundado por Enrique IV.
          Se conservan restos de la capilla gótica y el claustro del convento.
        </p>
        <p>
          En las inmediaciones de El Tiemblo, se encuentran El Charco del Cura
          y el Castañar de El Tiemblo, y para darse un baño: las Cruceras.
        </p>
        <h3>Burgohondo</h3>
        <p>
          hace honor a su nombre (Burgo del fondo). Goza de un particular
          microclima que hace posible su enorme profusión de frutas y
          legumbres. Sorprende la Abadía de Nuestra Señora de la Asunción, de
          origen románico, su Iglesia es del más puro estilo románico del
          S.XII, y una de las más antiguas de Ávila.
        </p>
        <h3>Navaluenga</h3>
        <p>
          que en los meses estivales llega a triplicar su población, es un
          pueblo eminentemente turístico, que goza del galardón del premio C de
          Castilla y León concedido en 1998. Este pueblo es pionero en la
          provincia en instalaciones de turismo rural y empresas de turismo
          activo. Goza en la actualidad de un magnífico campo de Golf, piscinas
          naturales, de buenas rutas para practicar senderismo y de una
          excelente gastronomía.
        </p>
        <p>
          Bellos lugares son Navarrevisca, Serranillos que sigue celebrando con
          gran animación sus fiestas del Vítor en verano y en invierno.
          Hoyocasero es uno de los pueblos más altos de Ávila y posee un bello
          enclave ecológico: El Pinar de Hoyocasero, de especial importancia
          botánica y con flora endémica. Navalsauz, donde nació Francisca
          Sánchez, compañera y musa de Rubén Darío, Navalacruz, de pura
          arquitectura serrana, San Juan de la Nava, Navarredondilla,
          Navatalgordo, San Juan del Molinillo, Navalmoral de la Sierra,
          Villanueva de Ávila o Navaquesera…, lugares para recorrer sin prisa y
          recrearse, entre sus calles, con su paisaje, con sus prados, con sus
          vistas, con sus sierras. A la altura de San Juan del Molinillo y
          Navandrinal se eleva la sierra del Zapatero, de belleza singular.
        </p>
        <p>
          En Navalosa impresionan sus “chozos” de piedra y piornos. En esta
          misma comarca, más identificado como Tierra de Pinares, bellos
          lugares como El Hoyo de Pinares, otro importante núcleo veraniego,
          con un extenso pinar, también declarado ZEPA, bella Iglesia y restos
          de una Calzada Romana.
        </p>
        <p>
          En Navalperal de Pinares existe un Museo Etnológico de gran interés.
          San Bartolomé de Pinares, conserva la tradición de celebrar las
          fiestas de “Las Luminarias” la noche de San Antón (enero). El mismo
          nombre de La Cañada hace alusión claramente a lo que fue su origen,
          una cañada real.
        </p>
        <p>
          Las Navas del Marqués, interesante y próspera villa, merece una
          reseña especial. Fue el primer marqués de las Navas don Pedro Dávila
          y Zuñiga, quien mandó construir el Castillo-Palacio de Magalia hacia
          mediados del S. XVI. La historia del castillo es azarosa,
          actualmente sirve para la organización de cursos, congresos,
          seminarios, conferencias…, cuenta este castillo con su propia
          leyenda.
        </p>
      </Section1ColTextOnly>

      <Section2ColTextImage
        title="La región de Ávila"
        imageSrc="/images/el-municipio/la-comarca/provincia.png"
        imageAlt="Mapa de España con la provincia de Ávila destacada"
        layout="default"
        imageFit="contain"
        className="!bg-background-green !pt-80 !pb-40"
      >
        <p>
          La provincia de Avila es una de las que comprende el antiguo Reino de
          Castilla la Vieja, está situada al N.O. de la Sierra de Guadarrama, y
          en la parte meridional de la meseta norte de la Península Iberica.
        </p>
        <p>
          Posee una superficie de 8.047 km², que representa el 1,6% del total
          nacional, ocupando el lugar 29 en el orden de su extensión, en
          relación con las demás provincias españolas.
        </p>
        <p>
          Ubicada entre los 40° 7,30´ 30´´ latitud norte, 4° 8´ y 5° 44´50´´
          longitud Oeste, limitada al Norte con la provincia de Valladolid, al
          Este con las de Segovia y Madrid, al Sur con las de Toledo y Caceres,
          y al Oeste con la de Salamanca. Los límites territoriales de la
          provincian poseen una extensión de 569 km, que pueden inscribirse
          aproximadamente en un trángulo.
        </p>
        <p>
          Orograficamente está dividida la provincia en dos regiones: la norte
          constituida por una extensa antiplanicie de 800, de altitud media y
          la sur ocupada de Este a Oeste por cuatro cadenas montañosas que
          alcanzan gran elevación, destacándose la Sierra de Gredos con
          altitudes superiores a los 2.000m.
        </p>
      </Section2ColTextImage>

      <Section2ColTextImage
        imageSrc="/images/el-municipio/la-comarca/hero.png"
        imageAlt="Vista aérea de un pueblo de la comarca"
        layout="reverse"
        className="!bg-background-green !pt-40 !pb-80"
      >
        <p>
          Hidrográficamente está regada por afluentes de los ríos Duero y Tajo.
          Dentro de la cuenca del Duero, los ríos principales son el Tormes,
          Aravalles, Corneja, Adaja, Voltoya, Zapardiel y Trabancos. En la
          cuenca del Tajo destacan el Alberche, Cofio y Tietar.
        </p>
        <p>
          La climatología abulense es muy variada, ya que frente a zonas (Norte
          y Centro) con temperaturas medias bajas, escasa humedad, bajo índice
          de pluviosidad y en general clima continental, existen zonas
          (Alberche, Tietar) que se distinguen por su suavidad climática con
          características de temperatura, humedad y precipitaciones propias de
          un clima templado.
        </p>
        <p>
          Los motivos históricos del gran número de municipios de la provincia,
          así como en la región castellana, hay que encontrarla en la
          repoblación de los reyes castellanos, en tiempo de la Reconquista,
          como forma de dominar el territorio. Esto produce en comarcas como en
          la Moraña, el que no se pueda recorrer 10 km sin encontrar por lo
          menos un núcleo de población.
        </p>
      </Section2ColTextImage>

      <SectionBackToCategory
        href="/el-municipio"
        label="Volver al municipio"
      />
    </main>
  );
}
