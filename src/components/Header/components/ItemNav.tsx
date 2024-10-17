import Image from "next/image"
import Link from "next/link"
import React from "react"

interface ItemNavProps {
  children: React.ReactNode
  icon?: boolean
  link: string
}

export function ItemNav({ children, icon, link }: ItemNavProps) {
  return (
    <Link
      href={link}
      className="flex gap-2 text-gray-100 hover:text-gray-300 font-mono text-lg relative group"
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
