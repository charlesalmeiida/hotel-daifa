"use client"

import { DateAndTheme } from "@/components/Blog/DateAndTheme"
import { Container } from "@/components/Global/Container"
import { Footer } from "@/components/Global/Footer/Footer"
import { Header } from "@/components/Global/Header/Header"
import Image from "next/image"
import { builder } from "@builder.io/react"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { RelatedPosts } from "@/components/Blog/RelatedPosts"
import { use } from "react"

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY || "")

async function fetchPost(slug: string) {
  const post = await builder.get("blog-post", {
    query: { "data.slug": slug },
  })
  return post ? post.data : null
}

// Função para buscar o post específico pelo slug

export default function BlogPost({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [post, setPost] = useState<any | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    async function getData() {
      const post = await fetchPost(id)
      if (!post) {
        router.push("/404")
      } else {
        setPost(post)
        setLoading(false)
      }
    }
    getData()
  }, [id, router])

  if (loading) {
    return <div>Carregando...</div>
  }

  if (!post) {
    return <div>Post não encontrado.</div>
  }
  return (
    <>
      <Header />
      <section className="pt-40 pb-28">
        <Container>
          <div className="text-center flex flex-col items-center gap-6 mb-14">
            <DateAndTheme date={post.datePost} theme={post.postTheme} />
            <h1>{post.title}</h1>
          </div>
          {post.imagePrimary && (
            <Image
              className="mx-auto"
              src={post.imagePrimary}
              width={1216}
              height={351}
              alt="Imagem do post do blog"
            />
          )}
          <div className="mt-14 space-y-8 max-w-[624px] mx-auto">
            <h2 className="text-[32px] font-semibold text-gray-700">
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
      </section>

      <RelatedPosts />
      <Footer />
    </>
  )
}