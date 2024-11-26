import { Footer } from "@/components/Footer/Footer"
import { Container } from "@/components/Global/Container"
import { itemsFaq } from "@/app/data/itemsFaq"
import { ItemFaq } from "./components/ItemFaq"
import { Header } from "@/components/Header"

export default function FaqPage() {
  return (
    <>
      <Header />

      <section className="pt-14 pb-20 relative">
        <Container>
          <div className="flex flex-col lg:flex-row justify-around">
            <div>
              <div className="text-center lg:text-left max-w-[416px] block static lg:sticky top-[124px]">
                <h2 className="mt-4 text-gray-700 text-[32px] lg:text-[40px] mb-8">
                  Perguntas e respostas frequentes
                </h2>
                <p className="mb-10 text-gray-900 opacity-80 mx-auto max-w-[470px]">
                  No nosso FAQ disponibilizamos tudo o que você precisa saber
                  para se programar e evitar surpresas em sua viagem.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-8 items-center">
              {itemsFaq.map((item) => (
                <div key={item.question}>
                  <ItemFaq
                    answer={item.answer}
                    question={item.question}
                    link={item.link}
                  />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  )
}
