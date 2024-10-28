import Image from "next/image"
import { TopHeader } from "./components/TopHeader"
import Link from "next/link"
import { Container } from "../Container"
import { NavList } from "./components/Nav"

interface HeaderProps {
  logo?: "white" | "color"
  btnColor?: "fill" | "outlineWhite" | "outlineGray"
  color?: "primary" | "secondary"
}

export function Header({
  logo = "color",
  color = "primary",
  btnColor = "outlineGray",
}: HeaderProps) {
  return (
    <>
      <TopHeader />
      <header className="bg-transparent absolute w-full py-4 border-b-[0.5px] border-b-gray-50">
        <Container>
          <div className="flex items-center justify-between">
            <Link href="/">
              <Image
                src={`${
                  logo === "white" ? "/svg/logo-white.svg" : "/svg/logo.svg"
                }`}
                width={72}
                height={61}
                alt="Logo do Hotel Daifa"
              />
            </Link>
            <NavList color={color} btnColor={btnColor} />
          </div>
        </Container>
      </header>
    </>
  )
}
