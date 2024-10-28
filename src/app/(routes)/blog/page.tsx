import { CardPostLG } from "@/components/Blog/CardPostLG"
import { Container } from "@/components/Global/Container"
import { Header } from "@/components/Global/Header/Header"
import Image from "next/image"

export default function Blog() {
  return (
    <>
      <Header />
      <section>
        <Container>
          <section className="pt-52">
            <div className="flex items-end justify-between">
              <div className="space-y-6">
                <h2 className="text-orange">Blog</h2>
                <div className="flex w-full max-w-[488px] justify-between py-4 pl-6 pr-3 rounded-[4px] bg-gray-100 border border-gray-300">
                  <input
                    className="bg-transparent w-[488px] text-gray-600 font-mono text-base"
                    type="text"
                    placeholder="Pesquisar por tema, palavra-chave ou tag..."
                  />
                  <button>
                    <Image
                      src={"/svg/icon-search.svg"}
                      width={18}
                      height={18}
                      alt="Ícone de pesquisa"
                    />
                  </button>
                </div>
              </div>
              <span className="text-gray-900 block opacity-80 font-mono text-base max-w-md">
                Garanta sua reserva com preços econômicos. Descubra todas as
                comodidades que temos para lhe oferecer no Centro de
                Florianópolis.
              </span>
            </div>
          </section>
        </Container>
      </section>

      <section className="pt-28">
        <Container>
          <CardPostLG />
        </Container>
      </section>
    </>
  )
}
