import Image from "next/image"

interface IconBenefitsProps {
  children: React.ReactNode
}

export function IconBenefits({ children }: IconBenefitsProps) {
  return (
    <div className="flex gap-2">
      <Image
        src={"svg/icon-check.svg"}
        width={20}
        height={16}
        alt="Ícone camas"
      />
      <span className="font-mono text-base text-gray-600">{children}</span>
    </div>
  )
}
