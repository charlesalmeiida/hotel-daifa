import Link from "next/link"

export function Copyright() {
  return (
    <div className="flex flex-col gap-8 lg:gap-0 md:flex-row text-center justify-between mt-14 lg:mt-32 text-gray-300 font-mono text-base">
      <span className="block">
        Hotel Daifa - Copyright © 2024 - Todos os direitos reservados
      </span>
      <span className="block">
        Feito por{" "}
        <Link className="underline" href={"/"}>
          Flid Marketing
        </Link>
      </span>
    </div>
  )
}
