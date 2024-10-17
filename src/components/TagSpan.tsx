import React from "react"

interface TagSpanProps {
  children: React.ReactNode
}

export function TagSpan({ children }: TagSpanProps) {
  return (
    <span className="text-gray-900 font-mono text-base font-medium uppercase">
      {children}
    </span>
  )
}
