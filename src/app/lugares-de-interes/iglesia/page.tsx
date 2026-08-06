import type { Metadata } from "next";
import { Section2ColTextImage } from "@/components/sections/Section2ColTextImage";
import { SectionBackToCategory } from "@/components/sections/SectionBackToCategory";
import { SectionHeroImage } from "@/components/sections/SectionHeroImage";

export const metadata: Metadata = {
  title: "La Iglesia | San Bartolomé de Pinares",
  description:
    "La Iglesia de San Bartolomé Apóstol: historia, arquitectura herreriana y ornamentación del templo parroquial.",
};

export default function IglesiaPage() {
  return (
    <main className="flex flex-1 flex-col">
      <SectionHeroImage
        accentText="Viva San Bartolo"
        title="la iglesia de san bartolo"
        description="Testigo del paso del tiempo y escenario de las principales celebraciones religiosas, sigue siendo uno de los lugares más queridos y representativos del pueblo."
        imageSrc="/images/lugares-de-interes/iglesia/hero.png"
        imageAlt="Iglesia de San Bartolomé Apóstol"
      />

      <Section2ColTextImage
        title="su historia"
        imageSrc="/images/lugares-de-interes/iglesia/historia-1.png"
        imageAlt="Fachada y torre de la iglesia"
        layout="default"
      >
        <p>
          La parte más antigua del templo se remonta a los años finales del
          siglo XV y a los iniciales del XVI y está construida en el estilo
          denominado gótico perlado o isabelino, de la época de los Reyes
          Católicos, del que tenemos tantas muestras en la provincia. De este
          momento son la portada de entrada al atrio, la torre, el arco que une
          naves y crucero en la zona norte y la cabecera de la iglesia.
        </p>
        <p>
          La portada, muy similar a la de la parroquia de San Juan Bautista de
          Ávila o la de la iglesia vieja de Cebreros, consta de un arco de
          medio punto con arquivoltas perladas, rematado por pináculos y una
          cruz. La cabecera del templo, en la que se halla el presbiterio
          delata su estilo gótico por su forma poligonal enmarcada por
          contrafuertes y culminado por una bóveda de media naranja.
        </p>
        <p>
          La torre, tipo campanil, de unos 20 m de altura fue diseñada por
          Pedro Hermosa en 1522 y fue realizada por los canteros Juancho de
          Mendiguna y Juan de Arana. Se halla separada de la cabecera de la
          Iglesia, lo cual resulta sorprende, ya que se debieron construir al
          unísono. Se conserva , también, de aquel edificio un arco de medio
          punto que sirvió de arranque a otro arco transversal. En la parte
          norte del crucero hoy puede observarse sólo una parte, disimulada
          por la cal.
        </p>
      </Section2ColTextImage>

      <Section2ColTextImage
        imageSrc="/images/lugares-de-interes/iglesia/historia-2.png"
        imageAlt="Interior herreriano de la iglesia"
        layout="reverse"
      >
        <p>
          Se produce a mediados del siglo XVI el primer cambio de estilo en la
          obra. Va a dar lugar a la parte más llamativa y elegante de nuestro
          templo: la construcción herreriana. Es un espacio grandioso, de unos
          300, de superficie y 16 m de altura, construido con una magnífica
          sillería de granito y copado por tres bóvedas vaídas con decoración
          avenerada. La central, circular y mayor que las laterales, está
          sostenida por cuatro grandes pilares. Las laterales, ovaladas,
          descansan en columnas adosadas a la pared.
        </p>
        <p>
          De los mismos años es la sacristía, culminada por una bella bóveda
          de terceletes. Tiene, además, la sacristía de la parroquia. En los
          años de la postguerra fue utilizada como dentro de Acción Católica
          y, actualmente , se está utilizando como trastero.
        </p>
        <p>
          La voz popular atribuye esta edificación a Juan de Herrera o a
          alguno de sus discípulos que trabajaron en los mismo años en el
          Monasterio de San Lorenzo de El Escorial y en otras iglesias de la
          zona. Este dato ha sido transmitido bajo el amparo de la
          desaparición de los libros de fábrica de la iglesia durante la
          Guerra Civil. Además, en conjunto es ésta una bella y nítida muestra
          del estilo herreriano o escurialense, tanto por la desnudez
          decorativa y el rigor geométrico, como por la simplicidad y viveza
          de las impostas que recorren sus muros; lo cual parecería apoyar la
          anterior hipótesis, que, no obstante, es tan atrevida como falsa.
        </p>
      </Section2ColTextImage>

      <Section2ColTextImage
        imageSrc="/images/lugares-de-interes/iglesia/historia-3.png"
        imageAlt="Detalle arquitectónico de la iglesia"
        layout="default"
      >
        <p>
          Podemos afirmar de manera definitiva que el diseño de la parte
          herreriana de nuestro templo correspondió al toledano “arquitecto
          real” Alonso de Covarrubias, tal como se desprende de una nota de
          pago “Mas se reciben en cuenta seis ducados que pagó a Alonso de
          Covarrubias, vecino de Toledo, porque vino a dar traza de las
          capillas, y a elegir lo que se había de hacer, como pareció según
          carta de pago”. En 1550 estaba ya construyéndose la capilla mayor de
          la Iglesia en la que trabajaron los maestros de “cantería y
          arquitectura” Juan Pardo de Plasencia, Juan de Mondragón y Juan
          López de Urquica, siendo cura por aquellos años Don Gregorio de
          Fredilla. El mencionado, Juan de Plasencia, trajo consigo un equipo
          de canteros para cortar los sillares. Entre otros se nombran a Diego
          de Bernal que trabajó en la sacristía y a un tal Gaíl. El acarreo de
          las piedras fue pagado a Juan Parro y Yago Gordo “el viejo”, vecinos
          de San Bartolomé.
        </p>
        <p>
          De la fecha de conclusión de la fábrica herreriana poseemos alguna
          noticia más. Sabemos que en el año 1582 se estaba realizando ya el
          tejado de la capilla mayor. En este año el obispo de Ávila D. Pedro
          Fernández Temiño realiza una petición al municipio de Ávila, merced
          a sus buenas relaciones. En la solicitud pedía 450 pinos para las
          casas episcopales, 300 para el monasterio de Santa Ana y otras
          instituciones eclesiales y sanitarias y 100 para “la capilla
          principal de la Yglesia de San Bartolomé de Pinares, que al presente
          se face”.
        </p>
      </Section2ColTextImage>

      <Section2ColTextImage
        imageSrc="/images/lugares-de-interes/iglesia/historia-4.png"
        imageAlt="Nave y arcos de la iglesia"
        layout="reverse"
      >
        <p>
          En el año 1607 esta parte se había terminado, según reza en una
          autorización para ultimar cuentas. Como siempre quedan la
          decoración y los últimos retoques, entre ellos las vidrieras de los
          ventanales, que se colocarían después de 1618. Posteriormente , la
          interrupción y el quebranto. La obra quedará parada durante casi un
          siglo. De ello son testigos los tejadillos de madera que preceden a
          las naves, las desdentadas pareces que no tuvieron la continuidad
          que pedían, la pobreza sin paliativos del resto del templo.
          Desconocemos los motivos. La voz popular, orgullosa, atribuye la
          discontinuidad de la obra a la marcha del arquitecto. Desde una
          perspectiva más realista bien se puede pensar en motivos de tipo
          económico.
        </p>
        <p>
          En 1698 se reanuda la obra con la construcción del enorme arco de
          ladrillo y cal, aunque la pintura posterior simulara granito, que
          une la nave central al crucero. Más tarde se abrirán los arcos
          laterales que , probablemente, en los años anteriores fueron
          utilizados como puertas de acceso desde la calle.
        </p>
      </Section2ColTextImage>

      <Section2ColTextImage
        imageSrc="/images/lugares-de-interes/iglesia/historia-5.png"
        imageAlt="Exterior de las naves de la iglesia"
        layout="default"
      >
        <p>
          Se continuó edificando el cuerpo de las naves, inferior en altura a
          la fábrica herreriana, aunque de una planta de 450m. En conjunto
          constituye un templo sencillos del barroco popular del siglo XVIII.
          Los amplios muros están formados por dos lienzos, uno de sillería al
          exterior y otro de mampostería al interior recubierto de barro y
          cal, probablemente para proteger del frio y dar luminosidad a este
          espacio, que por otra parte solo tiene tres pequeñas ventanas. Seis
          columnas de madera sostienen una amplia techumbre, también en madera
          de pino, sin decoración alguna.
        </p>
        <p>
          Dos entradas se abren en la zona de las naves, una en el lienzo sur
          y otra en el norte. Ambas son de arco de medio punto con elegantes
          jambas. Por la inscripción de la clave del arco de la portada
          principal, al norte, sabemos con exactitud la fecha de terminación
          de la obra. Fue en el año 1754. Mención especial en este lugar merece
          D. Manuel Fernández, párroco, que consiguió, gracias a su
          dedicación, ver terminado el templo. En 1753 cierra por fin las
          cuentas de la última obra, Se terminaron los muros, se fortificaron
          las puertas y se culminó la techumbre. Se encargó de labrar la
          madera el carpintero Esteban Álvarez Gallego, y la obra fue
          reconocida por el arquitecto abulense Manuel Ferranz.
        </p>
      </Section2ColTextImage>

      <Section2ColTextImage
        title="LA ORNAMENTACIÓN DEL TEMPLO"
        imageSrc="/images/lugares-de-interes/iglesia/ornamentacion-1.png"
        imageAlt="Retablo mayor de la iglesia"
        layout="default"
      >
        <p>
          La suntuosidad de la iglesia exigía desde el inicio una decoración
          adecuada, por eso, ya desde los años de su ejecución, fue provista
          por la devoción popular y el interés de los párrocos de retablos,
          tallas y otros objetos que la embellecieran y, al mismo tiempo,
          dignificaran las acciones litúrgicas.
        </p>
        <p>
          La escultura está ampliamente representada, sobre todo por cuatro
          retablos que, aunque maltratados por el tiempo y la incultura,
          presentan un indudable valor estético.
        </p>
        <p>
          Mencionemos también el altavoz barroco del púlpito que destaca por
          su esbeltez y las numerosas tallas, de diversa consideración, que
          ocuparon, y todavía hoy algunas ocupan, las hornacinas de los
          retablos.
        </p>
        <p>
          La obra más notable es el retablo mayor, que embellece la cabecera
          de la iglesia. Es de madera dorada y policromada y acoge en sus dos
          cuerpos óleos sobre lienzo y una talla de San Bartolomé. El ático
          está ocupado por un calvario que culmina el Padre Eterno. El estilo,
          claramente renacentista y escurialense, nos hace situar su ejecución
          a mediados del siglo XVI, aunque pueda despistar al observador la
          leyenda que a sus pies figura: “se hizo siendo cura D. Gregorio
          Fidel Pérez. Le donó, pintó y jaspeó (…) de Santander 1815”. Lo que
          realmente sucedió fue que en los años 1814 y 1815 se llevó a cabo
          una reforma del retablo primitivo, que data de 1535, que le hizo
          adquirir la fisonomía actual.
        </p>
      </Section2ColTextImage>

      <Section2ColTextImage
        imageSrc="/images/lugares-de-interes/iglesia/ornamentacion-2.png"
        imageAlt="Retablos barrocos del crucero"
        layout="reverse"
      >
        <p>Existen otros tres retablos barrocos en el espacio herreriano.</p>
        <p>
          El primero hacia el norte es el de la Virgen del Rosario, con dos
          cuerpos. Alberga la talla rustica de San Amador. El retablo es obra
          del siglo XVII y fue dorado y pintado por José Arellano, maestro de
          pintura y estofado, vecino de Ávila, que trabajó en él en 1649.
        </p>
        <p>
          El segundo de los retablos barrocos es el hoy llamado de la
          Dolorosa, también en el ala norte del crucero. Es de madera dorada y
          acoge seis óleos sobre lienzo de escaso valor. Por la inscripción
          que reza en el pie sabemos la fecha de su realización y el nombre de
          su donante: “Año de 1773, a costa de Francisco Guerra. Natural de
          esta villa y vecino de Méjico”.
        </p>
        <p>
          En la zona sur del crucero hallamos el retablo de Santa Teresa, obra
          de finales del siglo XVII. Consta de dos cuerpos y dos calles
          separados por columnas salomónicas y abundantes elementos
          decorativos, En el cuerpo inferior en la calle de la derecha se
          halla una talla dorada y policromada de San Pedro, de finales del
          siglo XVII. En 1708 el pintor de las Navas, Lozano Colorado, retocó
          la imagen. En el segundo cuerpo encontramos dos tallas
          necesariamente reseñables. Son el testimonio más antiguo de la fe de
          este pueblo. Se trata de Santa Lucía y San Blas, cada uno con sus
          rasgos iconográficos propios; Santa Lucia aparece con los ojos en
          una bandeja y San Blas con el atuendo habitual del obispo. Ambas
          manifiestan su claro estilo románico, del siglo XIII.
        </p>
      </Section2ColTextImage>

      <Section2ColTextImage
        imageSrc="/images/lugares-de-interes/iglesia/ornamentacion-3.png"
        imageAlt="Coro y baptisterio de la iglesia"
        layout="default"
      >
        <p>
          En el siglo XVIII, concluida la edificación de la iglesia, se
          realizó un magno esfuerzo en pos de un mejor decoro. Destaca en
          estos años por su empeño en la labor el ya mencionado párroco D.
          Manuel Fernández, arcipreste de los Pinares. En los años de su cura
          pastoral se instaló el coro y las cancelas en las puertas, amén del
          retablo de la Dolorosa.
        </p>
        <p>
          El coro es una obra de gran sobriedad y equilibrio, con gran
          simplicidad decorativa, culminando todo él con una balaustrada. Fue
          instalado en 1761. En la parte inferior acoge el baptisterio con una
          pila bautismal de granito de grandes dimensiones en una sola pieza,
          esculpida en 1620. Las elegantes y gemelas cancelas fueron
          realizadas en Ávila en 1770.
        </p>
        <p>
          Existían otros dos retablos de los que tenemos constancia. El
          primero dedicado a San Pedro en sus orígenes y posteriormente a la
          Virgen del Carmen.
        </p>
      </Section2ColTextImage>

      <Section2ColTextImage
        imageSrc="/images/lugares-de-interes/iglesia/ornamentacion-4.png"
        imageAlt="Detalle de ornamentación del templo"
        layout="reverse"
      >
        <p>
          Sabemos que fue dorado en 1708 por el mencionado Lozano Colorado,
          que además arregló el frontal del ara y pintó algún lienzo para el
          retablo. Se encontraba en el lugar que hoy ocupa el de Santa Teresa,
          y éste se hallaba a la derecha de la entrada a la sacristía . Este
          retablo desapareció en la Guerra Civil. Algunos de sus restos fueron
          aprovechados para el altar de la Inmaculada y otros se encuentran en
          las trasteras del templo. Del segundo retablo desaparecido tan sólo
          sabemos que estaba dedicado a San Bartolomé y que en 1749 se le
          cambió de lugar. El encargado de montarlo fue el artista abulense
          Juan de Miguel.
        </p>
        <p>
          Algunas de las tallas originales de los retablos, datables entre los
          siglos XVI al XVIII, se encuentran en el coro esperando restauración
          , tras los abusos de 1936. De otras, como la de San Pedro de
          Alcántara. Tan sólo nos queda el recuerdo. Y en este apartado de
          lamentables acontecimientos, hay que destacar la pérdida del órgano
          que había sido estrenado en 1741, sustituyendo uno anterior del
          siglo XVI, y que estuvo colocado en el coro. Hoy tan solo se
          conservan tres de los cuatro enormes fuelles que ayudaron a “vestir
          el aire de hermosura y luz no usada”.
        </p>
      </Section2ColTextImage>

      <Section2ColTextImage
        imageSrc="/images/lugares-de-interes/iglesia/ornamentacion-5.png"
        imageAlt="Pintura y objetos de culto de la iglesia"
        layout="default"
      >
        <p>
          La pintura es igualmente abundante en el templo, pero, en general,
          sus manifestaciones no presentan notabilidad. En la Sacristía se
          hallan los lienzos más antiguos de la Iglesia. Sus dos obras del
          siglo XVI: la efigie de Jesucristo, probablemente perteneciente a
          algún retablo, y una representación de Elías. Buena muestra del
          tenebrismo del siglo XVII tenemos en el retablo mayor sobre todo en
          los lienzos de la Decapitación del Bautista y en la Estigmación de
          San Francisco. El resto de las telas y tablas del templo son de los
          siglos XVII y XVIII, pero no merecen especial mención.
        </p>
        <p>
          Otras manifestaciones artísticas que abundan en el templo son la
          orfebrería en objetos destinados al culto: cálices, custodia,
          incensario…; el bordado de telas: casullas, capas, frontales…; y la
          ebanistería, que tiene como mejor muestra las cajoneras de estilo
          castellano que se hallan en la sacristía.
        </p>
      </Section2ColTextImage>

      <SectionBackToCategory
        href="/lugares-de-interes"
        label="Volver a lugares de interés"
      />
    </main>
  );
}
