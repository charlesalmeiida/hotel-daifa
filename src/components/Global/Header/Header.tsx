"use client"

import Image from "next/image"
import { TopHeader } from "./components/TopHeader"
import Link from "next/link"
import { Container } from "../Container"
import { NavList } from "./components/Nav"
import { useState, useEffect } from "react"

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
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 80)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <TopHeader />
      <header
        className={`sticky z-10 top-0 w-full py-4 border-b-[0.5px] transition-colors duration-300 ${
          isScrolled
            ? "bg-white border-b-gray-50 shadow-shaddowShape"
            : "bg-transparent"
        }`}
      >
        <Container>
          <div className="flex items-center justify-between">
            <Link href="/">
              <Image
                src={`${
                  logo === "white" && !isScrolled
                    ? "/svg/logo-white.svg"
                    : "/svg/logo.svg"
                }`}
                width={72}
                height={61}
                alt="Logo do Hotel Daifa"
              />
            </Link>
            <NavList
              color={`${isScrolled ? "primary" : color}`}
              btnColor={`${isScrolled ? "outlineGray" : btnColor}`}
            />
          </div>
        </Container>
      </header>
    </>
  )
}
