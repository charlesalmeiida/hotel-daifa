import Image from "next/image"
import Link from "next/link"
import { DateAndTheme } from "../DateAndTheme"

interface CardPostLGProps {
  date: string
  theme: string
  image: string
  title: string
  slug: string
  description: string
}

export function CardPostLG({
  date,
  theme,
  image,
  title,
  slug,
  description,
}: CardPostLGProps) {
  return (
    <>
      <Link
        href={`/blog/${slug}`}
        className="flex flex-col lg:flex-row items-center justify-between"
      >
        <div className="overflow-hidden rounded-lg">
          {image && (
            <Image
              className="hover:scale-105 transition-all object-cover rounded-lg"
              src={image}
              width={590}
              height={351}
              alt="Imagem do post do blog"
            />
          )}
        </div>
        <div className="max-w-[488px]">
          <div className="space-y-4">
            <DateAndTheme date={date} theme={theme} />
            <h2 className="text-gray-700">{title}</h2>
          </div>
          <p className="line-clamp-3 text-gray-700 mt-2 mb-8">{description}</p>
          <button className="flex w-fit items-center gap-3 transition-all hover:gap-4 uppercase font-mono text-base font-medium text-orange">
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
    </>
  )
}
