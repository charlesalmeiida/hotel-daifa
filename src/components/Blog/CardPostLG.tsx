import Image from "next/image"
import Link from "next/link"
import { DateAndTheme } from "./DateAndTheme"

export function CardPostLG() {
  return (
    <>
      <Link href={"/blog/post"} className="flex items-center justify-between">
        <div className="overflow-hidden rounded-lg">
          <Image
            className="hover:scale-105 transition-all object-cover rounded-lg"
            src={"/img/image-post-lg.png"}
            width={590}
            height={351}
            alt="Imagem do post do blog"
          />
        </div>
        <div className="max-w-[488px]">
          <div className="space-y-4">
            <DateAndTheme />
            <h2 className="text-gray-700">FOLIANÓPOLIS</h2>
          </div>
          <p className="line-clamp-3 mt-2 mb-8">
            O Folianópolis 2024 chega à sua 17ª edição com o tema FOLIA ASTRAL,
            prometendo muita alegria e diversão no Sul do Brasil. O evento
            aconteceu nos dias 14, 15 e 16 de novembro, durante o feriado da
            Proclamação da República, na famosa Passarela do Nego Quirido, no
            centro de Florianópolis.
          </p>
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
