import Image from "next/image"
import Link from "next/link"
import React from "react"

interface BtnLinkProps {
  children: React.ReactNode
  link: string
  target?: "_blank" | "_self"
}

export function BtnLink({ children, link, target = "_self" }: BtnLinkProps) {
  return (
    <Link
      href={link}
      target={target}
      className="flex w-fit items-center gap-3 transition-all hover:gap-4 uppercase font-mono text-base font-medium text-orange"
    >
      {children}
      <Image
        src={"/svg/arrow-right.svg"}
        width={12}
        height={6}
        alt="Seta para direita"
      />
    </Link>
  )
}
