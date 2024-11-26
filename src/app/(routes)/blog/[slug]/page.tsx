"use client"

import { DateAndTheme } from "@/app/(routes)/blog/components/DateAndTheme"
import { Container } from "@/components/Global/Container"
import { Footer } from "@/components/Footer/Footer"
import Image from "next/image"
import { builder } from "@builder.io/react"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { RelatedPosts } from "@/app/(routes)/blog/components/RelatedPosts"
import { use } from "react"
import { motion } from "framer-motion"
import { Header } from "@/components/Header"

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY || "")

async function fetchPost(slug: string) {
  const post = await builder.get("blog-post", {
    query: { "data.slug": slug },
  })
  return post ? post.data : null
}

export default function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [post, setPost] = useState<any | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    async function getData() {
      const post = await fetchPost(slug)
      if (!post) {
        router.push("/404")
      } else {
        setPost(post)
        setLoading(false)
      }
    }
    getData()
  }, [slug, router])

  if (loading) {
    return <div>Carregando...</div>
  }

  if (!post) {
    return <div>Post não encontrado.</div>
  }

  return (
    <>
      <Header />
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="pt-20 pb-20"
      >
        <Container>
          <div className="text-center flex flex-col items-center gap-6 mb-14">
            <DateAndTheme date={post.datePost} theme={post.postTheme} />
            <h1>{post.title}</h1>
          </div>
          {post.imagePrimary && (
            <Image
              className="mx-auto h-48 object-cover lg:h-[351px]"
              src={post.imagePrimary}
              width={1216}
              height={351}
              alt="Imagem do post do blog"
            />
          )}
          <div className="mt-14 space-y-8 max-w-[624px] mx-auto">
            <h2 className="text-3xl leading-[125%] lg:text-[32px] font-semibold text-gray-700">
              {post.subtitle}
            </h2>
            <div
              className="break-words text-wrap text-base opacity-80 font-mono"
              dangerouslySetInnerHTML={{ __html: post.textBlock }}
            />
            {post.imageSecondary && (
              <Image
                className="mx-auto"
                src={post.imageSecondary}
                width={488}
                height={42}
                alt="Imagem do post do blog"
              />
            )}
            {post.textBlock2 && (
              <div
                className="break-words text-wrap text-base opacity-80 font-mono"
                dangerouslySetInnerHTML={{ __html: post.textBlock2 }}
              />
            )}
          </div>
        </Container>
      </motion.section>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <RelatedPosts />
      </motion.div>
      <Footer />
    </>
  )
}
