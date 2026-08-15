import { FirstSection } from "@/components/sections/FirstSection";
import { HeroHome } from "@/components/sections/HeroHome";
import { SectionColor } from "@/components/sections/SectionColor";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <HeroHome imageSrc="/images/home/hero.png" />
      <FirstSection backgroundSrc="/images/home/first-section-bg.png" />

      <SectionColor
        color="blue"
        title="Características del municipio"
        description="El lugar en el que se halla, a que se dedica su gente y las actividades que en él se desarrollan nos hará tener un conocimiento de la situación actual de nuestro pueblo."
        images={[
          {
            src: "/images/home/mapa.png",
            alt: "Mapa del municipio",
          },
          {
            src: "/images/home/vista-aerea.jpg",
            alt: "Vista aérea del municipio",
          },
        ]}
        buttonHref="/el-municipio"
      />

      <SectionColor
        color="green"
        title="Lugares de interés"
        description="La riqueza patrimonial y natural de San Bartolomé de Pinares se descubre en cada rincón. Iglesias, ermitas, paisajes de pinares y espacios cargados de historia convierten el municipio en un lugar donde tradición y naturaleza se encuentran."
        images={[
          {
            src: "/images/home/lugares-1.png",
            alt: "Iglesia de San Bartolomé",
          },
          {
            src: "/images/home/lugares-2.png",
            alt: "Ermita",
          },
          {
            src: "/images/home/lugares-3.png",
            alt: "Paisaje del municipio",
          },
        ]}
        buttonHref="/lugares-de-interes"
      />

      <SectionColor
        color="white"
        title="Fiestas y tradiciones"
        description="Las fiestas y tradiciones de San Bartolomé de Pinares reflejan la identidad y el carácter de un pueblo profundamente ligado a sus raíces. Celebraciones centenarias, costumbres populares y la participación de sus vecinos mantienen vivo un legado que se transmite de generación en generación."
        images={[
          {
            src: "/images/home/fiestas-1.png",
            alt: "Celebración tradicional",
          },
          {
            src: "/images/home/fiestas-2.png",
            alt: "Procesión",
          },
          {
            src: "/images/home/fiestas-3.png",
            alt: "Fiesta popular",
          },
          {
            src: "/images/home/fiestas-4.png",
            alt: "Tradición local",
          },
        ]}
        buttonHref="/fiestas-y-tradiciones"
      />

      <SectionColor
        color="orange"
        title="Historia"
        description="La historia de San Bartolomé de Pinares ha forjado la identidad de un pueblo profundamente ligado a sus tradiciones, su patrimonio y su entorno natural. Un legado que ha perdurado a lo largo de los siglos y que sigue presente en cada una de sus calles y celebraciones."
        images={[
          {
            src: "/images/home/historia-1.png",
            alt: "Fotografía histórica",
          },
          {
            src: "/images/home/historia-2.png",
            alt: "Archivo histórico",
          },
        ]}
        buttonHref="/historia"
      />
    </main>
  );
}
