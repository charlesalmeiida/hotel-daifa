"use client"

import Image from "next/image"
import { Container } from "../Global/Container"
import { TopHeader } from "./components/TopHeader"
import Link from "next/link"
import { NavList } from "./components/NavList"
import { Button } from "../Global/Button"
import { Turn as Hamburger } from "hamburger-react"
import { useState } from "react"
import { MenuMobile } from "./components/MenuMobile"

interface HeaderProps {
  logo?: "white" | "color"
  color?: "primary" | "secondary"
  btnColor?: "outlineWhite" | "outlineGray" | "fill"
}

export function Header({
  logo = "color",
  color = "primary",
  btnColor = "outlineGray",
}: HeaderProps) {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <TopHeader />
      <header className="bg-transparent absolute w-full py-4 border-b-[0.5px] border-b-gray-50">
        <Container>
          <div className="flex items-center justify-between">
            <div>
              <Link href="/">
                <Image
                  src={`${
                    logo === "white" ? "svg/logo-white.svg" : "svg/logo.svg"
                  }`}
                  width={72}
                  height={61}
                  alt="Logo do Hotel Daifa"
                />
              </Link>
            </div>
            <div className="flex items-center gap-16">
              <div className="lg:hidden">
                <Hamburger color="#F9FAFB" toggled={isOpen} toggle={setOpen} />
              </div>
              {isOpen && <MenuMobile />}
              <nav className="hidden lg:flex">
                <NavList color={color} />
              </nav>
              <div className="hidden md:block">
                <Button
                  link="https://reservas.desbravador.com.br/hotel-app/hotel-daifa"
                  color={btnColor}
                  size="sm"
                  icon
                >
                  RESERVAR
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </header>
    </>
  )
}
