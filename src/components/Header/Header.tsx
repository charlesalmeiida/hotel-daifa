"use client"

import Image from "next/image"
import { Container } from "../GlobalComponents/Container"
import { TopHeader } from "./components/TopHeader"
import Link from "next/link"
import { NavList } from "./components/NavList"
import { Button } from "../GlobalComponents/Button"
import { Turn as Hamburger } from "hamburger-react"
import { useState } from "react"
import { MenuMobile } from "./components/MenuMobile"

export function Header() {
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
                  src={"/svg/logo-white.svg"}
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
                <NavList />
              </nav>
              <div className="hidden md:block">
                <Button color="outline" size="sm" icon>
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
