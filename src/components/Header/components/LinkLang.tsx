import Image from "next/image"
import { Link } from "@/i18n/routing"

interface LinkLangProps {
  children: React.ReactNode
  lang: "es" | "en" | "pt"
  active?: boolean
}

export function LinkLang({ active = false, children, lang }: LinkLangProps) {
  return (
    <>
      <Link href={"/"} locale={lang} className="flex items-center gap-2">
        <Image
          src={`/svg/${lang}-flag.svg`}
          alt={`Bandeira ${lang}`}
          width={14}
          height={18}
        />
        <span
          className={`font-mono text-sm ${
            !active && "opacity-60"
          } text-gray-50 hover:opacity-90 transition-all`}
        >
          {children}
        </span>
      </Link>
    </>
  )
}
