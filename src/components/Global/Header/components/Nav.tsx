"use client"

import { useState } from "react"
import { ItemNav } from "./ItemNav"
import { ModalMenu } from "./ModalMenu"
import Hamburger from "hamburger-react"
import { MenuMobile } from "./MenuMobile"
import { Button } from "../../Button"
import { ArrayNavLinks } from "./ArrayNavLinks"

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

  const handleModal = () => {
    setModalOpen(!isModalOpen)
  }

  return (
    <>
      <div className="flex items-center gap-16">
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
            {ArrayNavLinks.map((item, index) => (
              <li key={item.page}>
                <ItemNav
                  large
                  handleModal={index === 0 ? handleModal : undefined}
                  color={color}
                  icon={item.icon}
                  link={item.link}
                >
                  {item.page}
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
            RESERVAR
          </Button>
        </div>
      </div>
    </>
  )
}
