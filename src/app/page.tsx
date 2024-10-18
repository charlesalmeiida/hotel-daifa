import { ItemAmenity } from "@/components/Amenities/ItemAmenity"
import { Amenities } from "@/components/Amenities/ArrayAmenities"
import { BookSearchForm } from "@/components/BookingSearchForm/BookingSearchForm"
import { BtnLink } from "@/components/global/BtnLink"
import { Container } from "@/components/global/Container"
import { Header } from "@/components/Header/Header"
import { TagSpan } from "@/components/global/TagSpan"
import Image from "next/image"
export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section className="bg-hero bg-no-repeat bg-cover py-52">
          <Container>
            <div className="space-y-6">
              <h1 className="text-center text-gray-50 max-w-[893px] mx-auto">
                Estadia no Coração de Florianópolis com descontos exclusivos
                imperdíveis.
              </h1>
              <p className="text-gray-50 opacity-80 font-sans max-w-screen-sm mx-auto text-center text-xl font-semibold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor
              </p>
            </div>
          </Container>
        </section>
        <BookSearchForm />
      </main>

      <section className="py-[120px]">
        <Container>
          <div className="flex items-center justify-center">
            <div>
              <Image
                src={"/img/baia-sul.png"}
                width={696}
                height={400}
                alt="Vista da Baía Sul do Hotel Daifa"
              />
            </div>
            <div className="space-y-4 -ml-40">
              <TagSpan>hotel</TagSpan>
              <h3 className="max-w-[472px] text-gray-900">
                Com vista panorâmica para a Baía Sul e Ponte Hercílio Luz,
                cartão postal de Florianópolis.
              </h3>
              <BtnLink>saiba mais</BtnLink>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="flex justify-between">
            <div className="space-y-14">
              <div className="space-y-8">
                <div className="space-y-4">
                  <TagSpan>LOCALIZAÇÃO ESTRATÉGICA</TagSpan>
                  <h4 className="max-w-[472px]">
                    Hotel próximo ao centro da cidade, ao Mercado Público e à
                    Ponte Hercílio Luz, facilitando o acesso a vários pontos
                    turísticos, ao comércio e a restaurantes de Florianópolis.
                  </h4>
                </div>
                <BtnLink>saiba mais</BtnLink>
              </div>
              <Image
                src={"/img/image-mercado.png"}
                width={488}
                height={280}
                alt="Foto do Mercado Público em Florianópolis"
              />
            </div>
            <div className="space-y-10">
              <Image
                src={"/img/image-ponte-hercilio.png"}
                width={696}
                height={400}
                alt="Foto da Ponte Hercílio Luz em Florianópolis"
              />
              <Image
                src={"/img/image-piscina.png"}
                width={312}
                height={295}
                alt="Foto da piscina do Hotel Daifa em Floripa"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-28">
        <Container>
          <div className="mx-auto space-y-4 text-center">
            <h3>Comodidades</h3>
            <span className="w-14 h-px mx-auto bg-orange block"></span>
          </div>
          <div className="flex mt-10 flex-wrap max-w-[1072px] justify-center items-center gap-y-10 gap-x-16 mx-auto">
            {Amenities.map((item) => (
              <ItemAmenity
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="flex justify-between items-center">
            <div>
              <Image
                src={"/img/image-hall.png"}
                width={488}
                height={423}
                alt="Foto do Hall do Hotel Daifa em Florianópolis"
              />
            </div>
            <div className="max-w-[579px] space-y-6">
              <div className="space-y-4">
                <TagSpan>LAZER, EVENTOS E NEGÓCIOS</TagSpan>
                <h3>
                  Aguardamos você para lhe oferecer uma privilegiada localização
                  e ótimo conforto com um custo promocional. 
                </h3>
              </div>
              <BtnLink>saiba mais</BtnLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-28">
        <Container>
          <div className="flex justify-between items-end">
            <div className="space-y-6 max-w-[436px]">
              <TagSpan>ACOMODAÇÕES</TagSpan>
              <h2>Conforto e praticidade para sua estadia</h2>
            </div>
            <div className="max-w-96 space-y-6">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut sed do eiusmod tempor incididunt ut
              </p>
              <BtnLink>saiba mais</BtnLink>
            </div>
          </div>
          <div className="mt-20">
            <Image
              src={"/img/image-room.png"}
              width={1216}
              height={495}
              alt="Foto de um quarto no Hotel Daifa"
            />
          </div>
        </Container>
      </section>
    </>
  )
}
