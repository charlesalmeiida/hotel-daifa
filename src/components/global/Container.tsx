import React from "react"

interface ContainerProps {
  children: React.ReactNode
}

export function Container({ children }: ContainerProps) {
  return <div className="mx-auto max-w-[1248px] px-4">{children}</div>
}
