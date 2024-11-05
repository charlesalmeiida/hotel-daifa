"use client"

import { DateAndTheme } from "@/components/Blog/DateAndTheme"
import { Container } from "@/components/Global/Container"
import { Footer } from "@/components/Global/Footer/Footer"
import { Header } from "@/components/Global/Header/Header"
import Image from "next/image"
import { builder } from "@builder.io/react"
import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { RelatedPosts } from "@/components/Blog/RelatedPosts"

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY || "")

interface Post {
  datePost: string
  postTheme: string
  title: string
  subtitle: string
  imagePrimary?: string
  imageSecondary?: string
  textBlock: string
  textBlock2?: string
}

// Função para buscar o post usando o slug
async function fetchPost(slug: string): Promise<Post | null> {
  const post = await builder.get("blog-post", {
    query: { "data.slug": slug },
  })
  return post ? post.data : null
}

export default function BlogPost() {
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const searchParams = useSearchParams()
  const slug = searchParams.get("slug")

  useEffect(() => {
    async function getData() {
      if (!slug) return router.push("/404")
      try {
        const post = await fetchPost(slug)
        if (!post) {
          router.push("/404")
        } else {
          setPost(post)
          setLoading(false)
        }
      } catch (error) {
        console.error("Failed to fetch post:", error)
        router.push("/404")
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
