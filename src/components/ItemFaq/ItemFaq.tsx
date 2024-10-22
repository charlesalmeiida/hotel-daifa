"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

interface ItemFaqProps {
  question: string
  answer: string
  link?: string
}

export function ItemFaq({ answer, question, link }: ItemFaqProps) {
  const [isFaqOpen, setFaqOppen] = useState(false)

  const handleFaq = () => {
    setFaqOppen(!isFaqOpen)
  }

  return (
    <>
      <div>
        <button
          onClick={handleFaq}
          className="flex justify-between items-center w-[520px] max-w-lg py-5 px-6 bg-gray-50 border rounded-[4px] border-gray-400"
        >
          <span className="font-sans text-gray-900 text-base font-semibold">
            {question}
          </span>
          <Image
            src={"/svg/chevron-down-gray.svg"}
            width={12}
            height={6}
            alt="Seta para baixo"
          />
        </button>
        {isFaqOpen && (
          <span className="py-5 px-6 block font-sans text-base max-w-lg text-gray-700 border rounded-[4px] bg-gray-100">
            {answer}
            {link && (
              <Link className="underline" href={link}>
                {' '}clicando aqui
              </Link>
            )}
          </span>
        )}
      </div>
    </>
  )
}
