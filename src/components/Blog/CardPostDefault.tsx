import Image from "next/image"
import Link from "next/link"
import { DateAndTheme } from "./DateAndTheme"

interface CardPostDefaultProps {
  date: string
  theme: string
  title: string
  description: string
  image: string
  slug: string
}

export function CardPostDefault({
  date,
  theme,
  title,
  description,
  image,
  slug,
}: CardPostDefaultProps) {
  return (
    <Link href={`/blog/${slug}`} className="w-full lg:max-w-[592px] block">
      <div className="overflow-hidden rounded-lg">
        {image && (
          <Image
            className="hover:scale-105 transition-all object-cover rounded-lg"
            src={image}
            width={592}
            height={296}
            alt="Imagem do post do blog"
          />
        )}
      </div>
      <DateAndTheme date={date} theme={theme} />
      <h3 className="text-4xl leading-normal text-gray-700 mt-4">{title}</h3>
      <p className="mt-2 text-gray-700 line-clamp-3 lg:max-w-lg opacity-80">
        {description}
      </p>
    </Link>
  )
}
