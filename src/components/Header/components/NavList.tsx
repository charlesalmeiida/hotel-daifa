"use client"

import { useState } from "react"
import { ItemNav } from "./ItemNav"
import { ModalMenu } from "./ModalMenu"

interface NavListProps {
  color?: "primary" | "secondary"
}

export function NavList({ color = "primary" }: NavListProps) {
  const [isModalOpen, setModalOpen] = useState(false)

  const handleModal = () => {
    setModalOpen(!isModalOpen)
  }

  return (
    <ul className="flex gap-16">
      <li className="relative">
        <ItemNav color={color} large handleModal={handleModal} icon link="/">
          O hotel
        </ItemNav>
        {isModalOpen && <ModalMenu handleModal={handleModal} />}
      </li>
      <li>
        <ItemNav color={color} large link="/">
          Promoções
        </ItemNav>
      </li>
      <li>
        <ItemNav color={color} large link="/acomodacoes">
          Acomodações
        </ItemNav>
      </li>
      <li>
        <ItemNav color={color} large link="/blog">
          Blog
        </ItemNav>
      </li>
      <li>
        <ItemNav color={color} large link="/contato">
          Contato
        </ItemNav>
      </li>
    </ul>
  )
}
