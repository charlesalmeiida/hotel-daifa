"use client"

import { InputSearchBlog } from "../Forms/InputSearchBlog"
import { Container } from "../Global/Container"
import { CardPostLG } from "./CardPostLG"
import { RecentPosts } from "./RecentPosts"
import { builder } from "@builder.io/sdk"
import { useEffect, useState } from "react"

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY || "")

async function fetchAllPosts() {
  const posts = await builder.getAll("blog-post", {
    limit: 10,
    options: {
      noCache: true,
    },
  })

  return posts
}

export function BlogPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [allPosts, setAllPosts] = useState<any[]>([])

  useEffect(() => {
    async function getData() {
      const postsData = await fetchAllPosts()
      setAllPosts(postsData)
    }
    getData()
  }, [])

  if (allPosts.length === 0) {
    return <div>Carregando...</div>
  }

  return (
    <>
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
          <CardPostLG
            date={allPosts[0].data.datePost}
            theme={allPosts[0].data.postTheme}
            image={allPosts[0].data.imageThumb}
            title={allPosts[0].data.title}
            slug={allPosts[0].data.slug}
            description={allPosts[0].data.subtitle}
          />
        </Container>
      </section>

      <section className="pt-14 pb-28">
        <Container>
          <RecentPosts />
        </Container>
      </section>
    </>
  )
}