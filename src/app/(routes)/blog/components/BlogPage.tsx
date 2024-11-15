"use client"

import { InputSearchBlog } from "./InputSearchBlog"
import { Container } from "../../../../components/Global/Container"
import { CardPostLG } from "./CardPosts/CardPostLG"
import { RecentPosts } from "./RecentPosts"
import { builder, BuilderContent } from "@builder.io/sdk"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY || "")

// Interface para os dados do post
interface PostData {
  datePost: string
  postTheme: string
  imageThumb: string
  title: string
  slug: string
  subtitle: string
}

interface Post {
  data: PostData
  id: string
}

interface PostData {
  datePost: string
  postTheme: string
  imageThumb: string
  title: string
  slug: string
  subtitle: string
}

interface Post {
  data: PostData
  id: string
}

async function fetchPosts(query = ""): Promise<Post[]> {
  const posts: BuilderContent[] = await builder.getAll("blog-post", {
    limit: 10,
    options: {
      noCache: true,
    },
    query: query ? { title: { $regex: query, $options: "i" } } : {},
  })

  return posts
    .filter((post) => post.data !== undefined)
    .map((post) => ({
      id: post.id ?? "",
      data: {
        datePost: post.data?.datePost || "",
        postTheme: post.data?.postTheme || "",
        imageThumb: post.data?.imageThumb || "",
        title: post.data?.title || "",
        slug: post.data?.slug || "",
        subtitle: post.data?.subtitle || "",
      },
    }))
}

export function BlogPage() {
  const [allPosts, setAllPosts] = useState<Post[]>([])
  const [searchTerm, setSearchTerm] = useState<string>("")

  useEffect(() => {
    // Busca inicial de todos os posts
    async function getData() {
      const postsData = await fetchPosts()
      setAllPosts(postsData)
    }
    getData()
  }, [])

  const handleSearch = async () => {
    const filteredPosts = await fetchPosts(searchTerm)
    setAllPosts(filteredPosts)
  }

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
                <InputSearchBlog
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  handleSearch={handleSearch}
                />
              </motion.div>
              <motion.span
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 0.8, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-gray-900 text-center lg:text-left block font-mono text-base lg:max-w-md"
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
            transition={{ duration: 0.5, delay: 0.5 }}
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
