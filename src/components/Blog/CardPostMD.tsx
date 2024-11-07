import Image from "next/image"
import Link from "next/link"
import { DateAndTheme } from "./DateAndTheme"

interface CardPostMDProps {
  date: string
  theme: string
  slug: string
  title: string
  description: string
  image: string
}

export function CardPostMD({
  date,
  theme,
  slug,
  title,
  description,
  image,
}: CardPostMDProps) {
  return (
    <Link href={`/blog/${slug}`} className="max-w-96">
      <div className="overflow-hidden rounded-lg">
        {image && (
          <Image
            className="hover:scale-105 max-h-52 transition-all object-cover rounded-lg"
            src={image}
            width={383}
            height={207}
            alt="Imagem do post do blog"
          />
        )}
      </div>
      <div className="pr-4">
        <div className="space-y-2">
          <DateAndTheme date={date} theme={theme} />
          <h3 className="text-gray-700 line-clamp-1">{title}</h3>
          <p className="text-gray-700 max-w-[367px] line-clamp-3">
            {description}
          </p>
        </div>
        <button className="flex w-fit mt-4 items-center gap-3 transition-all hover:gap-4 uppercase font-mono text-base font-medium text-orange">
          LEIA MAIS!
          <Image
            src={"/svg/arrow-right.svg"}
            width={12}
            height={6}
            alt="Seta para direita"
          />
        </button>
      </div>
    </Link>
  )
}
