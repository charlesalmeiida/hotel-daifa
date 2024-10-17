import Image from "next/image"
import { Container } from "../Container"
import { TopHeader } from "./components/TopHeader"
import Link from "next/link"
import { NavList } from "./components/NavList"
import { Button } from "../Button"

export function Header() {
  return (
    <>
      <TopHeader />
      <header className="bg-transparent absolute w-full py-4 border-b-[0.5px] border-b-gray-50">
        <Container>
          <div className="flex items-center justify-between">
            <div>
              <Link href="/">
                <Image
                  src={"/svg/logo-white.svg"}
                  width={72}
                  height={61}
                  alt="Logo do Hotel Daifa"
                />
              </Link>
            </div>
            <div className="flex items-center gap-16">
              <nav>
                <NavList />
              </nav>
              <Button color="outline" size="sm" icon>RESERVAR</Button>
            </div>
          </div>
        </Container>
      </header>
    </>
  )
}
