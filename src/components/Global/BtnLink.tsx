import Image from "next/image"
import Link from "next/link"
import React from "react"

interface BtnLinkProps {
  children: React.ReactNode
}

export function BtnLink({ children }: BtnLinkProps) {
  return (
    <Link
      href="/"
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