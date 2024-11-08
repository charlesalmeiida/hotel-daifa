import Image from "next/image"
import Link from "next/link"

interface CardPostSMProps {
  slug: string
  date: string
  title: string
  description: string
  image: string
}

export function CardPostSM({
  slug,
  date,
  title,
  description,
  image,
}: CardPostSMProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <div className="flex items-center gap-8">
        <div className="overflow-hidden rounded-lg">
          {image && (
            <Image
              className="hover:scale-105 transition-all h-[166px] max-w-52 w-full object-cover rounded-lg"
              src={image}
              width={208}
              height={166}
              alt="Foto do post do blog"
            />
          )}
        </div>
        <div>
          <span className="text-sm text-gray-800 opacity-80 font-mono">
            {date}
          </span>
          <h4 className="my-2 text-wrap max-w-72 line-clamp-1">{title}</h4>
          <p className="line-clamp-3 opacity-80 max-w-[289px]">{description}</p>
        </div>
      </div>
    </Link>
  )
}
