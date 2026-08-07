import type { Metadata } from "next";
import { Section2ColTextImage } from "@/components/sections/Section2ColTextImage";
import { Section2ColTextOnly } from "@/components/sections/Section2ColTextOnly";
import { SectionBackToCategory } from "@/components/sections/SectionBackToCategory";
import { SectionCajaColor } from "@/components/sections/SectionCajaColor";
import { SectionHeroImage } from "@/components/sections/SectionHeroImage";

export const metadata: Metadata = {
  title: "La guerra de Napoleón | San Bartolomé de Pinares",
  description:
    "Los desastres de la ocupación francesa en San Bartolomé de Pinares: saqueos, impuestos, venta del patrimonio y apoyo a las guerrillas.",
};

export default function GuerraNapoleonPage() {
  return (
    <main className="flex flex-1 flex-col">
      <SectionHeroImage
        accentText="Historia de San Bartolo"
        title="los desastres de la ocupación francesa"
        description="Mientras los grandes acontecimientos de la Guerra de la Independencia se desarrollaban lejos de San Bartolomé de Pinares, sus habitantes sufrieron de forma directa las consecuencias de la ocupación francesa: saqueos, impuestos, escasez y destrucción."
        imageSrc="/images/historia/guerra-napoleon/hero.png"
        imageAlt="Escena de la Guerra de la Independencia"
      />

      <Section2ColTextOnly
        className="!py-40"
        left={
          <>
            <h2>La llegada de las tropas francesas</h2>
            <p>
              En el mes de enero de 1809 llegaron las tropas francesas ante las
              murallas de Ávila. Eran más de quince mil soldados al mando del
              mariscal Lefebvre, duque de Dantzick, que a su paso dejaron
              desolación, incendio y ruina. Especialmente sangrientos fueron
              los sucesos de Arévalo y Arenas de San Pedro en los primeros
              meses del mismo año, que fueron repetidos, sin duda, en muchos
              de los pueblos por donde fueron pasando las tropas napoleónicas.
              Los habitantes del Tiemblo se vieron envueltos en incendios,
              fusilamientos y todo tipo de ultrajes, incluido el saqueo de su
              templo parroquial.
            </p>
          </>
        }
        right={
          <>
            <h2>La ocupación de San Bartolomé de Pinares</h2>
            <p>
              San Bartolomé no estuvo ajeno a las tropelías de la soldadesca
              gala. El primer episodio de su nefasta actividad tuvo lugar en
              Navagallegos en el mes de febrero del mismo año. Los escasos
              habitantes del anejo, ante la proximidad de los franceses y la
              fama que los precedía, tuvieron que huir a la vecina Villa. De
              esta forma dejaron abandonado el caserío, que fue arrasado al
              paso de los soldados. Desde este momento Navagallegos desaparece
              como lugar habitado.
            </p>
            <p>
              Días más tarde llegaron y ocuparon San Bartolomé donde sus
              habitantes sufrieron indefensos “robos en sus casas, ejecuciones
              militares, multas y otros castigos”.
            </p>
          </>
        }
      />

      <SectionCajaColor
        title="La presión económica sobre el municipio"
        imageSrc="/images/historia/guerra-napoleon/1.png"
        imageAlt="Tropas francesas en una calle del municipio"
        color="green"
        className="!py-0"
      >
        <p>
          Desde este momento nuestra Villa se vio sometida a un tremendo y
          abusivo proceso de esquilmación. Durante los meses de febrero a
          septiembre fueron tantos los envíos de suministros que se hubieron
          de hacer para abastecer a los destacamentos franceses, que el
          ayuntamiento y el vecindario decidieron enajenar fincas de propios y
          terrenos del común para seguir haciendo frente a las exigencias del
          intruso.
        </p>
        <p>
          Las dificultades para enviar los víveres que exigen los franceses van
          siendo cada vez mayores. Las cosechas de este suelo, “de suyo estéril
          y miserable”, durante los años 1808 y 1809 han sido muy pobres y,
          además, la rapacidad de los soldados está causando estragos en las
          viviendas de los vecinos. Este es el motivo por el que es bien
          acogida por todos la medida adoptada para la venta de terrenos. Así
          podrán vender sus bienes muebles y ganados que eran objeto de hurto
          por parte de las tropas.
        </p>
      </SectionCajaColor>

      <Section2ColTextImage
        title="Nuevos impuestos y contribuciones"
        imageSrc="/images/historia/guerra-napoleon/2.png"
        imageAlt="Iglesia y caserío de San Bartolomé de Pinares"
        layout="reverse"
        className="!pt-40 !pb-40"
      >
        <p>
          La situación se agrava sobremanera cuando el día 9 de julio de 1810
          se recibe una orden de don Manuel García, Contador Principal e
          Intendente de Ávila, que urge al ayuntamiento a que en el plazo de
          cinco días pague parte de una contribución especial impuesta para
          todo el país por el mariscal Duque de Dalmacia. La suma total a pagar
          es de 54.731 reales entre los 239 vecinos. Esto se sumaba a la
          contribución ordinaria de la Villa, que ascendía a 12.237 reales.
        </p>
        <p>
          Por otra parte, se exigían al pueblo cantidades de dinero y
          suministros cada vez mayores para atender las necesidades del
          ejército español. Finalizada la guerra, el escribano Juan Lorenzo
          Fernández da cuenta de lo elevadas que fueron estas aportaciones:
          216.272 reales y 31 maravedíes.
        </p>
        <h3>El apoyo a las guerrillas</h3>
        <p>
          Además, en estos años empiezan a surgir las partidas de civiles que
          se van a oponer al invasor mediante la guerra de guerrillas. Nuestros
          campos fueron lugar frecuente de su cobijo y, en multitud de
          ocasiones, fueron provistos de comida y cuanto necesitaron por los
          habitantes de San Bartolomé.
        </p>
      </Section2ColTextImage>

      <Section2ColTextImage
        title="La venta del patrimonio municipal"
        imageSrc="/images/historia/guerra-napoleon/3.png"
        imageAlt="Soldados en la plaza del municipio durante la ocupación"
        layout="default"
        className="!pt-40 !pb-40"
      >
        <p>
          El año 1813 fue especialmente problemático. Ante las urgencias
          decidieron llevar a efecto la venta de terrenos de propios y
          comunes, empezando por el Corral de Sotillo, Cañamar, Mantifierro,
          el Moñiguero, Espinillos, el Madroño, Chorrito del Valle, Arroprado,
          Umbría del Roble y hasta doscientos terrenos más entre tierras de
          labor, huertos, montes y eriales, a fin de obtener las sumas
          requeridas y evitar sobre el pueblo multas y fusilamientos.
        </p>
        <p>
          Igualmente debieron de ser vendidas las casas que en el casco urbano
          poseía el ayuntamiento, entre otras, la taberna. Para llevar a cabo
          estas ventas se formó una comisión compuesta por los justicias y el
          ayuntamiento de ese momento, presidida por los alcaldes Andrés García
          y Pedro Herradón. Las ventas se efectuaron por el procedimiento
          habitual: tasación previa, subasta pública y remate posterior.
        </p>
        <p>
          El valor de todas las fincas vendidas fue de 50.911 reales,
          correspondiendo 42.300 a fincas del común.
        </p>
      </Section2ColTextImage>

      <Section2ColTextOnly
        className="!pt-32 !pb-80"
        left={
          <>
            <h2>La contribución de la Iglesia</h2>
            <p>
              La Iglesia contribuyó de forma decisiva a aliviar el sufrimiento
              del vecindario por estos impuestos. Se tomaron objetos “que
              pudieran ser vendidos”, tanto de la Iglesia como de las ermitas,
              y se vendieron parte de sus fincas, así como todas las fincas de
              capellanías.
            </p>
            <p>
              Además, nuestro templo hubo de sufrir otra usurpación de algunas
              de sus mejores obras de orfebrería. El 16 de agosto de 1808, José
              I firmó en Miranda de Ebro un decreto por el que imponía a la
              Iglesia un empréstito a favor del Estado que ascendía a
              100.000.000 de reales, del que nadie podía excusarse de pagar su
              parte.
            </p>
          </>
        }
        right={
          <>
            <h2>Las consecuencias de la ocupación</h2>
            <p>
              Con tal tenacidad se exprimió a esta población que la desolación
              y la miseria fue lo único que quedó tras la expulsión del
              intruso. Como en toda la provincia, el siglo XIX quedaría
              definitivamente marcado por los desastres de la guerra.
            </p>
          </>
        }
      />

      <SectionBackToCategory href="/historia" label="Volver a historia" />
    </main>
  );
}
