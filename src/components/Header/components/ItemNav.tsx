import Image from "next/image"
import {Link} from "@/i18n/routing"
import React from "react"

interface ItemNavProps {
  children: React.ReactNode
  icon?: boolean
  link: string
  color?: "primary" | "secondary"
  bold?: boolean
  large?: boolean
  handleModal?: () => void
}
export function ItemNav({
  children,
  icon,
  link,
  color = "primary",
  bold = false,
  large = false,
  handleModal,
}: ItemNavProps) {
  return (
    <Link
      href={link}
      onMouseEnter={handleModal}
      className={`flex gap-2 ${
        color === "primary"
          ? "text-gray-700 hover:text-orange"
          : "text-gray-100"
      } ${bold ? "font-bold" : ""}  font-mono ${
        large ? "text-lg" : "text-base"
      } relative group`}
    >
      {children}
      {icon && (
        <Image
          src={`${
            color === "primary"
              ? "/svg/chevron-down-gray.svg"
              : "/svg/chevron-down.svg"
          }`}
          width={12}
          height={6}
          alt="Seta para baixo"
        />
      )}
      <div
        className={`absolute bottom-0 w-full h-0.5 bg-gray-50 scale-x-0 transition-all group-hover:scale-x-100`}
      ></div>
    </Link>
  )
}
