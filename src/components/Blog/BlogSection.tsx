"use client"

import { Container } from "../Global/Container"
import { TagSpan } from "../Global/TagSpan"
import { CardPostDefault } from "./CardPostDefault"
import { CardPostSM } from "./CardPostSM"
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

export function BlogSection() {
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
    <section className="pt-14 lg:pt-28">
      <Container>
        <div className="space-y-6 mb-8">
          <TagSpan>BLOG</TagSpan>
          <h2>Posts recentes</h2>
        </div>
        <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row justify-between">
          <div>
            <CardPostDefault
              date={allPosts[0].data.datePost}
              theme={allPosts[0].data.postTheme}
              title={allPosts[0].data.title}
              description={allPosts[0].data.subtitle}
              image={allPosts[0].data.imageThumb}
              slug={allPosts[0].data.slug}
            />
          </div>
          <div className="flex flex-col gap-8 max-w-[529px]">
            {allPosts.slice(1, 4).map((post) => (
              <CardPostSM
                key={post.data.slug}
                date={post.data.datePost}
                title={post.data.title}
                description={post.data.subtitle}
                image={post.data.imageThumb}
                slug={post.data.slug}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
