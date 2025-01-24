"use client"

import { Container } from "../../../../components/Global/Container"
import { TagSpan } from "../../../../components/Global/TagSpan"
import { CardPostDefault } from "./CardPosts/CardPostDefault"
import { CardPostSM } from "./CardPosts/CardPostSM"
import { builder } from "@builder.io/sdk"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!)

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
  const t = useTranslations("Blog")
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
      <Container overflow>
        <div className="space-y-6 mb-8">
          <TagSpan>BLOG</TagSpan>
          <h2>{t("title")}</h2>
        </div>
        <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <CardPostDefault
              date={allPosts[0].data.datePost}
              theme={allPosts[0].data.postTheme}
              title={allPosts[0].data.title}
              description={allPosts[0].data.subtitle}
              image={allPosts[0].data.imageThumb}
              slug={allPosts[0].data.slug}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8 max-w-[529px]"
          >
            {allPosts.slice(0, 3).map((post) => (
              <CardPostSM
                key={post.data.slug}
                date={post.data.datePost}
                title={post.data.title}
                description={post.data.subtitle}
                image={post.data.imageThumb}
                slug={post.data.slug}
              />
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
