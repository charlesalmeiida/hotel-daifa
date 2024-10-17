import Image from "next/image"
import React from "react"
import { tv } from "tailwind-variants"

const button = tv({
  base: "font-mono text-base rounded-[4px] leading-5 flex gap-3 h-fit",
  variants: {
    color: {
      outline:
        "bg-transparent border text-gray-100 border-gray-100 hover:bg-blue hover:text-gray-50",
      fill: "bg-blue text-gray-100",
    },
    size: {
      sm: "py-3 px-4",
      md: "py-4 px-6",
      lg: "py-4 w-full",
    },
  },
})

interface ButtonProps {
  icon?: boolean
  children: React.ReactNode
  color?: "outline" | "fill"
  size?: "sm" | "md" | "lg"
}

export function Button({ icon, children, color, size }: ButtonProps) {
  return (
    <button className={button({ size: size, color: color })}>
      {icon && (
        <Image
          src={"/svg/icon-calendar.svg"}
          width={15}
          height={17}
          alt="Ícone de calendário"
        />
      )}
      {children}
    </button>
  )
}
