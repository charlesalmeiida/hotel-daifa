import Image from "next/image"
import Link from "next/link"

export function CardPostDefault() {
  return (
    <Link href={"/"} className="max-w-[592px] block">
      <div className="overflow-hidden rounded-lg">
        <Image
          className="hover:scale-105 transition-all object-cover rounded-lg"
          src={"/img/image-post-default.png"}
          width={592}
          height={351}
          alt="Foto do post do blog"
        />
      </div>
      <div className="font-mono text-gray-800 mt-6 opacity-80 text-base flex items-center gap-4">
        <span>9 de março de 2023</span>
        <div className="w-[5px] h-[5px] bg-gray-500 rounded-full"></div>
        <span>Eventos</span>
      </div>
      <h3 className="text-4xl leading-normal text-gray-700 mt-4">
        FOLIANÓPOLIS
      </h3>
      <p className="mt-2 text-gray-700 line-clamp-3 max-w-lg opacity-80">
        O Folianópolis 2024 chega à sua 17ª edição com o tema FOLIA ASTRAL,
        prometendo muita alegria e diversão no Sul do Brasil. O evento aconteceu
        nos dias 14, 15 e 16 de novembro, durante o feriado da Proclamação da
        República, na famosa Passarela do Nego Quirido, no centro de
        Florianópolis.
      </p>
    </Link>
  )
}
