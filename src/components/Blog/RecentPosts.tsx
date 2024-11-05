"use client"

import { CardPostMD } from "./CardPostMD"
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
    <div className="flex flex-wrap gap-y-14 justify-between">
      {allPosts.slice(1, 3).map((post) => (
        <CardPostMD
          key={post.slug}
          date={post.data.datePost}
          theme={post.data.postTheme}
          slug={post.data.slug}
          title={post.data.title}
          description={post.data.subtitle}
          image={post.data.imageThumb}
        />
      ))}
    </div>
  )
}
