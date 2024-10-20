"use client"

import { useState } from "react"
import { ItemNav } from "./ItemNav"
import { ModalMenu } from "./ModalMenu"

export function NavList() {
  const [isModalOpen, setModalOpen] = useState(false)

  const handleModal = () => {
    setModalOpen(!isModalOpen)
  }

  return (
    <ul className="flex gap-16">
      <li className="relative">
        <ItemNav handleModal={handleModal} icon link="/">
          O hotel
        </ItemNav>
        {isModalOpen && <ModalMenu handleModal={handleModal} />}
      </li>
      <li>
        <ItemNav link="/">Promoções</ItemNav>
      </li>
      <li>
        <ItemNav link="/acomodacoes">Acomodações</ItemNav>
      </li>
      <li>
        <ItemNav link="/blog">Blog</ItemNav>
      </li>
      <li>
        <ItemNav link="/contato">Contato</ItemNav>
      </li>
    </ul>
  )
}
