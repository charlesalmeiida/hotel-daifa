import { BtnLink } from "../Global/BtnLink"
import { Container } from "../Global/Container"
import { RecentPosts } from "./RecentPosts"

export function RelatedPosts() {
  return (
    <section className="pb-28">
      <Container>
        <div className="space-y-14">
          <div className="flex items-center justify-between">
            <h4 className="text-gray-700 text-[28px]">Artigos relacionados</h4>
            <BtnLink>VER MAIS PUBLICAÇÕES</BtnLink>
          </div>

          <RecentPosts />
        </div>
      </Container>
    </section>
  )
}