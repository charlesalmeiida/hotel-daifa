import Image from "next/image"
import Link from "next/link"

export function LinkLang() {
  return (
    <>
      <Link href="/" className="flex items-center gap-2">
        <Image src={"svg/brazil-flag.svg"} alt="Flag" width={14} height={18} />
        <span className="font-mono text-sm text-gray-50">PT</span>
      </Link>
      <span className="text-gray-50 py-3">|</span>
      <Link href="/" className="flex items-center gap-2">
        <Image src={"svg/eua-flag.svg"} alt="Flag" width={14} height={18} />
        <span className="font-mono text-sm opacity-60 text-gray-50">EN</span>
      </Link>
      <span className="text-gray-50 py-3">|</span>
      <Link href="/" className="flex items-center gap-2">
        <Image src={"svg/es-flag.svg"} alt="Flag" width={14} height={18} />
        <span className="font-mono text-sm opacity-60 text-gray-50">ES</span>
      </Link>
    </>
  )
}
