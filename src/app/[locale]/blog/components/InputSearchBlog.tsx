import Image from "next/image"
import { useTranslations } from "next-intl"

interface InputSearchBlogProps {
  searchTerm: string
  setSearchTerm: (value: string) => void
  handleSearch: () => void
}

export function InputSearchBlog({
  searchTerm,
  setSearchTerm,
  handleSearch,
}: InputSearchBlogProps) {
  const t = useTranslations("Blog")

  return (
    <div className="flex w-full lg:w-[488px] gap-24 justify-between py-4 pl-6 pr-3 rounded-[4px] bg-gray-100 border border-gray-300">
      <input
        className="bg-transparent enabled:text-gray-800 outline-none w-full text-gray-600 font-mono text-base"
        type="text"
        placeholder={t("search")}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>
        <Image
          className="shrink-0"
          src={"/svg/icon-search.svg"}
          width={18}
          height={18}
          alt="Ícone de pesquisa"
        />
      </button>
    </div>
  )
}
