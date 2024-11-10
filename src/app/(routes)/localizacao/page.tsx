import { Footer } from "@/components/Footer/Footer"
import { Header } from "@/components/Header/Header"
import { Location } from "@/components/Maps/Location"

export default function LocationPage() {
  return (
    <>
      <Header />
      <section className="py-20">
        <Location />
      </section>
      <Footer />
    </>
  )
}
