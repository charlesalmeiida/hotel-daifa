import Link from "next/link"
import { useTranslations } from "next-intl"

export function Copyright() {
  const t = useTranslations("Footer")

  return (
    <div className="flex flex-col gap-8 lg:gap-0 md:flex-row text-center justify-between mt-14 lg:mt-32 text-gray-300 font-mono text-base">
      <span className="block">{t("text")}</span>
      <span className="block">
        {t("developed")}{" "}
        <Link
          className="underline"
          target="_blank"
          href={"https://portfolio-charlesalmeiida.vercel.app/pt"}
        >
          Charles 
        </Link>
      </span>
    </div>
  )
}
