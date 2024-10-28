import { Input } from "@/components/Forms/Input"
import { Button } from "@/components/Global/Button"
import { Container } from "@/components/Global/Container"
import { Contacts } from "@/components/Global/Footer/Contacts"
import { Footer } from "@/components/Global/Footer/Footer"
import { Header } from "@/components/Global/Header/Header"
import Link from "next/link"

export default function Contact() {
  return (
    <>
      <Header />
      <section className="pt-32 lg:pt-[207px] pb-14 lg:pb-28">
        <Container>
          <div className="flex flex-col items-center lg:items-start lg:flex-row gap-10 lg:gap-0 justify-between">
            <div className="space-y-10">
              <div className="space-y-8">
                <div className="space-y-4 max-w-lg">
                  <h3>
                    Tire todas as suas duvidas com nossa equipe, 24 horas por
                    dia!
                  </h3>
                  <p className="max-w-[416px]">
                    Entre em contato com nossa equipe, faça sua reserva e
                    aproveite o melhor custo benefício de Floripa!
                  </p>
                </div>
                <div>
                  <Contacts color="secondary" />
                </div>
              </div>
              <p className="max-w-80">
                Profa. Maria Júlia Franco, 294 – Prainha, Florianópolis – SC,
                88020-280
              </p>
              <div className="flex space-y-4 flex-col font-mono text-lg font-medium text-blue underline">
                <Link href={"mailto:contato@hoteldaifa.com.br"}>
                  contato@hoteldaifa.com.br
                </Link>
                <Link href={"mailto:reservas@hoteldaifa.com.br"}>
                  reservas@hoteldaifa.com.br
                </Link>
              </div>
            </div>
            <div className="p-6 w-full lg:max-w-[488px] rounded-[4px] space-y-6 border border-gray-200">
              <h4>Entre em contato</h4>
              <form className="space-y-4">
                <Input id="name" placeholder="Digite seu nome" type="text" />
                <Input
                  id="email"
                  placeholder="Digite seu e-mail"
                  type="email"
                />
                <Input id="number" placeholder="Celular" type="number" />
                <Input id="message" placeholder="Mensagem" type="textarea" />
                <Button link="/" color="fill" size="lg">
                  ENVIAR
                </Button>
              </form>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  )
}
