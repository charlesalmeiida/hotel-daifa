import React from "react"

interface ContainerProps {
  children: React.ReactNode
  overflow?: boolean
}

export function Container({ children, overflow }: ContainerProps) {
  return (
    <div
      className={`${
        overflow ? "overflow-x-hidden" : ""
      } mx-auto max-w-[1248px] px-4`}
    >
      {children}
    </div>
  )
}
