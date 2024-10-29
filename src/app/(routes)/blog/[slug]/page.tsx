import { CardPostMD } from "@/components/Blog/CardPostMD"
import { DateAndTheme } from "@/components/Blog/DateAndTheme"
import { BtnLink } from "@/components/Global/BtnLink"
import { Container } from "@/components/Global/Container"
import { Footer } from "@/components/Global/Footer/Footer"
import { Header } from "@/components/Global/Header/Header"
import Image from "next/image"

export default function BlogPost() {
  return (
    <>
      <Header />
      <section className="pt-40 pb-28">
        <Container>
          <div className="text-center flex flex-col items-center gap-6 mb-14">
            <DateAndTheme />
            <h1>FOLIANÓPOLIS</h1>
          </div>
          <Image
            src={"/img/image-post.png"}
            width={1212}
            height={351}
            alt="Imagem do post do blog"
          />
          <div className="mt-14 space-y-8 max-w-[624px] mx-auto">
            <h2 className="text-[32px] font-semibold text-gray-700">
              O Folianópolis 2024 chega à sua 17ª edição com o tema FOLIA ASTRAL
            </h2>
            <p className="text-gray-700 leading-7">
              O Folianópolis 2024 chega à sua 17ª edição com o tema FOLIA
              ASTRAL, prometendo muita alegria e diversão no Sul do Brasil. O
              evento aconteceu nos dias 14, 15 e 16 de novembro, durante o
              feriado da Proclamação da República, na famosa Passarela do Nego
              Quirido, no centro de Florianópolis.
              <br />
              <br />
              Este ano, a festa contará com grandes nomes do axé, incluindo:
              Ivete Sangalo É o Tchan Léo Santana Bell Marques, que celebra 10
              anos de carreira solo após deixar o Chiclete com Banana Banda Eva,
              liderada por Felipe Pezzoni Timbalada Xanddy Harmonia Parangolé
              Tomate
            </p>
            <Image
              className="mx-auto"
              src={"/img/image-inside-blog.png"}
              width={488}
              height={42}
              alt="Imagem do post do blog"
            />
            <p className="text-gray-700 leading-7">
              Uma curiosidade sobre o Folianópolis é que ele é conhecido como o
              &quot;carnaval fora de época mais animado do Brasil&quot;,
              atraindo foliões de todas as regiões para viver uma experiência
              única de festa, música e alegria, na cidade mais charmosa do país.
              Para quem quer aproveitar a folia sem se preocupar com longos
              deslocamentos, o Hotel Daifa é a melhor escolha!
              <br />
              <br />
              Localizado a apenas 5 minutos da Passarela do Nego Quirido, o
              hotel oferece a praticidade de estar pertinho do evento, além de
              acomodações confortáveis, café da manhã incluso e estacionamento
              gratuito. É a opção ideal para descansar com conforto após curtir
              intensamente o carnaval fora de época. Os ingressos para o evento
              já estão disponíveis no site da Blueticket. E você pode se
              hospedar próximo ao evento – clique aqui para fazer a sua reserva
              no Hotel Daifa e viva uma experiência completa de folia na ilha
              mais encantadora do Brasil!
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-28">
        <Container>
          <div className="space-y-14">
            <div className="flex items-center justify-between">
              <h4 className="text-gray-700 text-[28px]">
                Artigos relacionados
              </h4>
              <BtnLink>VER MAIS PUBLICAÇÕES</BtnLink>
            </div>
            <div className="flex flex-wrap gap-y-14 justify-between">
              {Array(3)
                .fill(0)
                .map((_, index) => (
                  <CardPostMD key={index} />
                ))}
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  )
}
