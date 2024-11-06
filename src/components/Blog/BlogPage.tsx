"use client"

import { InputSearchBlog } from "../Forms/InputSearchBlog"
import { Container } from "../Global/Container"
import { CardPostLG } from "./CardPostLG"
import { RecentPosts } from "./RecentPosts"
import { builder } from "@builder.io/sdk"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

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
    return <div className="h-lvh bg-white"></div>
  }

  return (
    <>
      <section>
        <Container>
          <div className="pt-20">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 items-start lg:items-end justify-between">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-6 w-full lg:w-fit"
              >
                <h2 className="text-orange text-center lg:text-left">Blog</h2>
                <InputSearchBlog />
              </motion.div>
              <motion.span
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-gray-900 text-center lg:text-left block opacity-80 font-mono text-base lg:max-w-md"
              >
                Garanta sua reserva com preços econômicos. Descubra todas as
                comodidades que temos para lhe oferecer no Centro de
                Florianópolis.
              </motion.span>
            </div>
          </div>
        </Container>
      </section>

      <section className="pt-14">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <CardPostLG
              date={allPosts[0].data.datePost}
              theme={allPosts[0].data.postTheme}
              image={allPosts[0].data.imageThumb}
              title={allPosts[0].data.title}
              slug={allPosts[0].data.slug}
              description={allPosts[0].data.subtitle}
            />
          </motion.div>
        </Container>
      </section>

      <section className="pt-14 pb-14 lg:pb-28">
        <Container>
          <RecentPosts />
        </Container>
      </section>
    </>
  )
}
