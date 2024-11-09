import Image from "next/image"

export function InputSearchBlog() {
  return (
    <div className="flex w-full lg:w-[488px] gap-24 justify-between py-4 pl-6 pr-3 rounded-[4px] bg-gray-100 border border-gray-300">
      <input
        className="bg-transparent w-full text-gray-600 font-mono text-base"
        type="text"
        placeholder="Pesquisar por tema, palavra-chave ou tag..."
      />
      <button>
        <Image
          className="shrink-0"
          src={"/svg/icon-search.svg"}
          width={18}
          height={18}
          alt="Ícone de pesquisa"
        />
      </button>
    </div>
  )
}
