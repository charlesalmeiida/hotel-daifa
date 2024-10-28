import Image from "next/image"
import Link from "next/link"
import { DateAndTheme } from "./DateAndTheme"

export function CardPostDefault() {
  return (
    <Link href={"/blog/blogpost"} className="w-full lg:max-w-[592px] block">
      <div className="overflow-hidden rounded-lg">
        <Image
          className="hover:scale-105 w-full lg:w-[592px] transition-all object-cover rounded-lg"
          src={"/img/image-post-default.png"}
          width={592}
          height={351}
          alt="Foto do post do blog"
        />
      </div>
      <DateAndTheme />
      <h3 className="text-4xl leading-normal text-gray-700 mt-4">
        FOLIANÓPOLIS
      </h3>
      <p className="mt-2 text-gray-700 line-clamp-3 lg:max-w-lg opacity-80">
        O Folianópolis 2024 chega à sua 17ª edição com o tema FOLIA ASTRAL,
        prometendo muita alegria e diversão no Sul do Brasil. O evento aconteceu
        nos dias 14, 15 e 16 de novembro, durante o feriado da Proclamação da
        República, na famosa Passarela do Nego Quirido, no centro de
        Florianópolis.
      </p>
    </Link>
  )
}
