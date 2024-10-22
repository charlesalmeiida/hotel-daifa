import Image from "next/image"

interface LabelFormProps {
  icon: "calendar" | "people"
  title: string
}

export function LabelForm({ icon, title }: LabelFormProps) {
  return (
    <div className="flex items-center gap-4">
      <Image
        src={`/svg/icon-${icon}-gray.svg`}
        width={15}
        height={17}
        alt="Ícone de calendário"
      />
      <div className="flex flex-col">
        <span className="font-mono block text-base text-gray-600">{title}</span>
      </div>
    </div>
  )
}
