"use client"

import { CardPostMD } from "./CardPostMD"
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

export function RecentPosts() {
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
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-wrap flex-col lg:flex-row gap-y-14 items-center justify-between"
    >
      {allPosts.slice(1, 4).map((post) => (
        <CardPostMD
          key={post.data.slug}
          date={post.data.datePost}
          theme={post.data.postTheme}
          slug={post.data.slug}
          title={post.data.title}
          description={post.data.subtitle}
          image={post.data.imageThumb}
        />
      ))}
    </motion.div>
  )
}
