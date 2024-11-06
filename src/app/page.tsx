import { BookSearchForm } from "@/components/BookingSearchForm/BookingSearchForm"
import { BtnLink } from "@/components/Global/BtnLink"
import { Container } from "@/components/Global/Container"
import { TagSpan } from "@/components/Global/TagSpan"
import Image from "next/image"
import { itemsFaq } from "@/app/data/itemsFaq"
import { ItemFaq } from "@/components/ItemFaq/ItemFaq"
import { Footer } from "@/components/Global/Footer/Footer"
import { Header } from "@/components/Global/Header/Header"
import { AmenitiesSection } from "@/components/Amenities/Amenities"
import { Location } from "@/components/Maps/Location"
import { BlogSection } from "@/components/Blog/BlogSection"
import { GallerySection } from "@/components/Gallery/GallerySection"
import { PromotionsSection } from "@/components/Promotions/PromotionsSection"

export default function Home() {
  return (
    <>
      <Header logo="white" color="secondary" btnColor="outlineWhite" />

      <main>
        <section className="bg-hero -mt-[95px] bg-no-repeat bg-cover py-40 lg:py-52">
          <Container>
            <div className="space-y-6">
              <h1 className="text-center text-4xl lg:text-[46px] leading-[150%] text-gray-50 max-w-[893px] mx-auto">
                Hospede-se no Coração de Florianópolis com o Melhor
                Custo-Benefício da Cidade
              </h1>
              <p className="text-gray-50 opacity-80 font-sans max-w-screen-sm mx-auto text-center text-lg md:text-xl font-semibold">
                No Hotel Daifa você encontra uma estrutura completa de hotel com
                aconchego e descontração de uma pousada. Com localização
                privilegiada, estamos situados em frente a Baia Sul e próximos
                aos principais pontos da cidade.
              </p>
            </div>
          </Container>
        </section>
        <BookSearchForm />
      </main>

      <section className="py-14 lg:py-[120px]">
        <Container>
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 items-start lg:items-center justify-center">
            <div className="hidden lg:block">
              <Image
                src={"/img/baia-sul.png"}
                width={696}
                height={400}
                alt="Vista da Baía Sul do Hotel Daifa"
              />
            </div>
            <div className="lg:hidden mx-auto">
              <Image
                src={"/img/baia-sul-noblur.png"}
                width={696}
                height={400}
                alt="Vista da Baía Sul do Hotel Daifa"
              />
            </div>
            <div className="space-y-4 lg:-ml-40">
              <TagSpan>hotel</TagSpan>
              <h3 className=" lg:max-w-[472px] text-gray-900">
                Com vista panorâmica para a Baía Sul e Ponte Hercílio Luz,
                cartão postal de Florianópolis.
              </h3>
              <BtnLink link="/">saiba mais</BtnLink>
            </div>
          </div>
        </Container>
      </section>

      <PromotionsSection />

      <section className="pt-28">
        <Container>
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="space-y-14 flex items-center flex-col-reverse lg:flex-col gap-6 lg:gap-0">
              <div className="space-y-8 mt-4">
                <div className="space-y-4">
                  <TagSpan>LOCALIZAÇÃO ESTRATÉGICA</TagSpan>
                  <h4 className="lg:max-w-[472px]">
                    Hotel próximo ao Centro da cidade, ao Mercado Público,
                    Centro Sul Eventos e à Ponte Hercílio Luz! Fácil acesso ao
                    Aeroporto, Rodoviária e aos principais pontos turísticos e
                    históricos de Floripa!
                  </h4>
                </div>
                <BtnLink link="/">saiba mais</BtnLink>
              </div>
              <Image
                src={"/img/image-mercado.png"}
                width={488}
                height={280}
                alt="Foto do Mercado Público em Florianópolis"
              />
            </div>
            <div className="hidden lg:block space-y-10">
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

      <section className="py-14 lg:py-28">
        <AmenitiesSection />
      </section>

      <section>
        <Container>
          <div className="flex flex-col-reverse lg:flex-row gap-6 lg:gap-0 justify-between items-center">
            <div>
              <Image
                src={"/img/image-hall.png"}
                width={488}
                height={423}
                alt="Foto do Hall do Hotel Daifa em Florianópolis"
              />
            </div>
            <div className="lg:max-w-[579px] space-y-6">
              <div className="space-y-4 text-gray-900">
                <TagSpan>LAZER, EVENTOS E NEGÓCIOS</TagSpan>
                <h3>
                  Seja a negócios ou lazer, o Hotel Daifa oferece o melhor
                  custo-beneficio da cidade! Localização privilegiada e tarifas
                  especiais para hóspedes a negócios ou participantes de
                  eventos!
                </h3>
              </div>
              <BtnLink link="/">saiba mais</BtnLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 lg:py-28">
        <Container>
          <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row items-start justify-between lg:items-end">
            <div className="space-y-6 lg:max-w-[436px]">
              <TagSpan>ACOMODAÇÕES</TagSpan>
              <h2>Conforto e praticidade para sua estadia</h2>
            </div>
            <div className="lg:max-w-96 space-y-6">
              <p>
                Opções de quartos econômicos, quartos com vista para Baia e com
                Hidromassagem! Única opção com hidromassagem no centro de
                Florianópolis!
              </p>
              <BtnLink link="/">saiba mais</BtnLink>
            </div>
          </div>
          <div className="mt-8 lg:mt-20">
            <Image
              src={"/img/image-room.png"}
              width={1216}
              height={495}
              alt="Foto de um quarto no Hotel Daifa"
            />
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="space-y-4 text-center mx-auto max-w-[497px]">
            <TagSpan>GALERIA DE FOTOS</TagSpan>
            <h3>Descubra o Hotel Daifa: Conforto e Beleza em Imagens</h3>
            <span className="font-mono block text-base font-medium text-orange opacity-80">
              Instagram - #hoteldaifa
            </span>
          </div>
          <GallerySection />
        </Container>
      </section>

      <BlogSection />

      <section className="pt-14 lg:pt-28">
        <Location />
      </section>

      <section className="py-14 lg:py-28">
        <Container>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10 lg:gap-[72px] w-full">
            <div className="lg:max-w-[420px]">
              <TagSpan>FAQ</TagSpan>
              <h2 className="mt-4 text-3xl lg:text-4xl mb-8">
                Perguntas e respostas frequentes
              </h2>
              <p className="mb-10">
                No nosso FAQ disponibilizamos tudo o que você precisa saber para
                se programar e evitar surpresas em sua viagem.
              </p>
              <BtnLink link="/">saiba mais</BtnLink>
            </div>
            <div>
              <div className="space-y-6">
                {itemsFaq.map((item, index) => (
                  <ItemFaq
                    key={index}
                    question={item.question}
                    answer={item.answer}
                    link={item.link || undefined}
                  />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  )
}
