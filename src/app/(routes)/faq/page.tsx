import { Footer } from "@/components/Footer/Footer"
import { Header } from "@/components/Header/Header"
import { FaqSection } from "./components/FaqSection"

export default function FaqPage() {
  return (
    <>
      <Header />
      <div className="py-20">
        <FaqSection />
      </div>
      <Footer />
    </>
  )
}
