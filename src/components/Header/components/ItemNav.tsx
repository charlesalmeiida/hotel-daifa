import Image from "next/image"
import Link from "next/link"
import React from "react"

interface ItemNavProps {
  children: React.ReactNode
  icon?: boolean
  link: string
  color?: string
  bold?: boolean
  large?: boolean
  handleModal?: () => void
}

export function ItemNav({
  children,
  icon,
  link,
  color = "text-gray-100",
  bold = false,
  large = false,
  handleModal,
}: ItemNavProps) {
  return (
    <Link
      onClick={handleModal}
      onMouseOver={handleModal}
      href={link}
      className={`flex gap-2 ${color} ${
        bold ? "font-bold" : ""
      } hover:text-gray-300 font-mono ${
        large ? "text-lg" : "text-base"
      } relative group`}
    >
      {children}
      {icon && (
        <Image
          src={"/svg/chevron-down.svg"}
          width={12}
          height={6}
          alt="Seta para baixo"
        />
      )}
      <div className="absolute bottom-0 w-full h-0.5 bg-gray-50 scale-x-0 transition-all group-hover:scale-x-100"></div>
    </Link>
  )
}
