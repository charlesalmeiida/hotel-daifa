import Image from "next/image"
import Link from "next/link"

export function CardPostSM() {
  return (
    <Link href={"/"}>
      <div className="flex items-center gap-8">
        <div className="overflow-hidden rounded-lg">
          <Image
            className="hover:scale-105 transition-all object-cover rounded-lg"
            src={"/img/image-post-sm.png"}
            width={208}
            height={166}
            alt="Foto do post do blog"
          />
        </div>
        <div>
          <span className="text-sm text-gray-800 opacity-80 font-mono">
            9 de março de 2023
          </span>
          <h4 className="my-2">FOLIANÓPOLIS</h4>
          <p className="line-clamp-3 opacity-80 max-w-[289px]">
            O Folianópolis 2024 chega à sua 17ª edição com o tema FOLIA ASTRAL,
            prometendo muita alegria e diversão no Sul do Brasil. O evento
            aconteceu nos dias 14, 15 e 16 de novembro, durante o feriado da
            Proclamação da República, na famosa Passarela do Nego Quirido, no
            centro de Florianópolis.
          </p>
        </div>
      </div>
    </Link>
  )
}
