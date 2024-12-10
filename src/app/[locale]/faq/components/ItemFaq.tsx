"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useTranslations } from "next-intl"

interface ItemFaqProps {
  question: string
  answer: string
  link?: string
}

export function ItemFaq({ answer, question, link }: ItemFaqProps) {
  const t = useTranslations("Faq")

  const [isFaqOpen, setFaqOppen] = useState(false)

  const handleFaq = () => {
    setFaqOppen(!isFaqOpen)
  }

  return (
    <>
      <div>
        <button
          onClick={handleFaq}
          className="flex text-left lg:text-center justify-between items-center w-full lg:w-[520px] max-w-lg py-5 px-6 bg-gray-50 border rounded-[4px] border-gray-400 transition duration-300"
        >
          <span className="font-sans text-left text-gray-900 text-base font-semibold">
            {question}
          </span>
          <Image
            src={"/svg/chevron-down-gray.svg"}
            width={12}
            height={6}
            alt="Seta para baixo"
            className={`transform transition-transform duration-300 ${
              isFaqOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
        <div
          className={`transition-opacity duration-300 ease-in-out overflow-hidden ${
            isFaqOpen ? "opacity-100 max-h-screen" : "opacity-0 max-h-0"
          }`}
        >
          <span className="py-5 w-full px-6 block font-sans text-base max-w-lg text-gray-700 border rounded-[4px] bg-gray-100">
            {answer}
            {link && (
              <Link className="underline" target="_blank" href={link}>
                {" "}
                {t("click")}
              </Link>
            )}
          </span>
        </div>
      </div>
    </>
  )
}
