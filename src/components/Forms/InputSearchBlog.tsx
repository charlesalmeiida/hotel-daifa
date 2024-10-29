import Image from "next/image";

export function InputSearchBlog() {
  return (
    <div className="flex w-full max-w-[488px] justify-between py-4 pl-6 pr-3 rounded-[4px] bg-gray-100 border border-gray-300">
      <input
        className="bg-transparent w-[488px] text-gray-600 font-mono text-base"
        type="text"
        placeholder="Pesquisar por tema, palavra-chave ou tag..."
      />
      <button>
        <Image
          src={"/svg/icon-search.svg"}
          width={18}
          height={18}
          alt="Ícone de pesquisa"
        />
      </button>
    </div>
  )
}