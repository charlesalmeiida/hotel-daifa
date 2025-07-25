"use client"

import { useState } from "react"
import { ItemNav } from "./ItemNav"
import Hamburger from "hamburger-react"
import { Button } from "../../Global/Button"
import navLinksData from "@/app/data/navLinksData.json"
import dynamic from "next/dynamic"
import { useLocale, useTranslations } from "next-intl"


const ModalMenu = dynamic(() =>
  import("./ModalMenu").then((mod) => mod.ModalMenu)
)

const MenuMobile = dynamic(() =>
  import("./MenuMobile").then((mod) => mod.MenuMobile)
)

interface NavListProps {
  color?: "primary" | "secondary"
  btnColor?: "fill" | "outlineWhite" | "outlineGray"
}

export function NavList({
  color = "primary",
  btnColor = "outlineWhite",
}: NavListProps) {
  const [isModalOpen, setModalOpen] = useState(false)
  const [isOpen, setOpen] = useState(false)
  const t = useTranslations("Header")

  const handleModal = () => {
    setModalOpen(!isModalOpen)
  }

  const locale = useLocale()

  return (
    <>
      <div className="flex items-center gap-4">
        <div className="md:hidden">
          <Button
            link="https://reservas.desbravador.com.br/hotel-app/hotel-daifa"
            color={btnColor}
            size="sm"
            icon
          >
            {t("btn")}
          </Button>
        </div>
        <div className="lg:hidden">
          <Hamburger
            color={`${color === "secondary" ? "#F9FAFB" : "#111827"}`}
            toggled={isOpen}
            toggle={setOpen}
          />
        </div>
        {isOpen && <MenuMobile />}
        <nav className="hidden lg:flex">
          <ul className="flex gap-16 relative">
            {isModalOpen && <ModalMenu handleModal={handleModal} />}
            {navLinksData.map((item, index) => (
              <li key={item.page}>
                <ItemNav
                  large
                  handleModal={index === 0 ? handleModal : undefined}
                  color={color}
                  icon={item.icon}
                  link={item.link}
                >
                  {locale === "pt"
                    ? item.page
                    : locale === "en"
                    ? item.pageEn
                    : item.pageEs}
                </ItemNav>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden md:block">
          <Button
            link="https://reservas.desbravador.com.br/hotel-app/hotel-daifa"
            color={btnColor}
            size="sm"
            icon
          >
            {t("btn")}
          </Button>
        </div>
      </div>
    </>
  )
}
