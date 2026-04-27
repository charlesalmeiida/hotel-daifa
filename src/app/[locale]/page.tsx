import dynamic from "next/dynamic";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Homepage";
import { SimpleImageModal } from "@/components/ModalPromotion";

const TheHotel = dynamic(() => import("@/components/Homepage/the-hotel"));
const PromotionsSection = dynamic(
  () => import("@/app/[locale]/promocoes/components/PromotionsSection"),
);
const StrategicLocation = dynamic(
  () => import("@/components/Homepage/StrategicLocation"),
);
const AmenitiesSection = dynamic(
  () => import("@/components/Amenities/Amenities"),
);
const Business = dynamic(() => import("@/components/Homepage/Business"));
const AcomodationSection = dynamic(
  () => import("@/components/Homepage/AcomodationSection"),
);
const GallerySection = dynamic(
  () => import("@/components/Homepage/GallerySection"),
);
const BlogSection = dynamic(
  () => import("@/app/[locale]/blog/components/BlogSection"),
);
const Location = dynamic(() => import("@/components/Maps/Location"));
const FaqSection = dynamic(
  () => import("@/app/[locale]/faq/components/FaqSection"),
);

export default function Home() {
  return (
    <>
      <Header logo="white" color="secondary" btnColor="outlineWhite" />

      <Hero />

      <TheHotel />

      <PromotionsSection />

      <StrategicLocation />

      <AmenitiesSection />

      <Business />

      <AcomodationSection />

      <GallerySection />

      <BlogSection />

      <Location />

      <FaqSection />

      {/** <ModalPromotion/> **/}

      <SimpleImageModal
        images={[
          {
            imageSrc: "/img/popups/pacote_promocional_de_inverno.jpeg",
            imageAlt: "Pacote promocional de inverno",
            link: "https://wa.me//5548988643952?text=Olá,%20vim%20pelo%20website%20e%20gostaria%20de%20mais%20informações%20sobre%20o%20Pacote%20Promocional%20de%20Inverno.",
          },
          {
            imageSrc: "/img/popups/pacote_para_folianopolis.jpeg",
            imageAlt: "Pacote para Florianópolis",
            link: "https://wa.me//5548988643952?text=Olá,%20vim%20pelo%20website%20e%20gostaria%20de%20mais%20informações%20sobre%20o%20Pacote%20para%20Florianópolis.",
          },
          {
            imageSrc: "/img/popups/viagem_de_negocios.jpeg",
            imageAlt: "Viagem de negócios",
            link: "https://wa.me//5548988643952?text=Olá,%20vim%20pelo%20website%20e%20gostaria%20de%20mais%20informações%20sobre%20hospedagem%20para%20viagem%20de%20negócios.",
          },
          {
            imageSrc: "/img/popups/reveillon_2027.jpeg",
            imageAlt: "Réveillon 2027",
            link: "https://wa.me//5548988643952?text=Olá,%20vim%20pelo%20website%20e%20gostaria%20de%20mais%20informações%20sobre%20o%20pacote%20de%20Réveillon%202027.",
          },
        ]}
      />
    </>
  );
}
