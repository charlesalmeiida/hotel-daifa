import Link from "next/link"

export function Copyright() {
  return (
    <div className="flex justify-between mt-32 text-gray-300 font-mono text-base">
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
