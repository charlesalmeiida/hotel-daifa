import { BlogPage } from "@/app/(routes)/blog/components/BlogPage"
import { Footer } from "@/components/Footer/Footer"
import { Header } from "@/components/Header"

export default function Blog() {
  return (
    <>
      <Header />

      <BlogPage />

      <Footer />
    </>
  )
}
