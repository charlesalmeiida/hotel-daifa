import { CardPostLG } from "@/components/Blog/CardPostLG"
import { RecentPosts } from "@/components/Blog/RecentPosts"
import { InputSearchBlog } from "@/components/Forms/InputSearchBlog"
import { Container } from "@/components/Global/Container"
import { Footer } from "@/components/Global/Footer/Footer"
import { Header } from "@/components/Global/Header/Header"

export default function Blog() {
  return (
    <>
      <Header />
      <section>
        <Container>
          <div className="pt-52">
            <div className="flex items-end justify-between">
              <div className="space-y-6">
                <h2 className="text-orange">Blog</h2>
                <InputSearchBlog />
              </div>
              <span className="text-gray-900 block opacity-80 font-mono text-base max-w-md">
                Garanta sua reserva com preços econômicos. Descubra todas as
                comodidades que temos para lhe oferecer no Centro de
                Florianópolis.
              </span>
            </div>
          </div>
        </Container>
      </section>

      <section className="pt-28">
        <Container>
          <CardPostLG />
        </Container>
      </section>

      <section className="pt-14 pb-28">
        <Container>
          <RecentPosts />
        </Container>
      </section>

      <Footer />
    </>
  )
}
