import { ItemNav } from "./ItemNav"
import LinksModal from "@/app/data/linksModal.json"
import { useLocale } from "next-intl"

interface ModalMenuProps {
  handleModal: () => void
}

export function ModalMenu({ handleModal }: ModalMenuProps) {
  const locale = useLocale()

  return (
    <div
      onClick={handleModal}
      onMouseLeave={handleModal}
      className="bg-blue absolute -left-9 mt-8 space-y-4 flex flex-col items-center rounded-[4px] shadow-shaddowShape py-4 px-11 transition-all"
    >
      {LinksModal.map((item) => (
        <ItemNav key={item.page} color="secondary" link={item.link}>
          {locale === "en"
            ? item.pageEn
            : locale === "es"
            ? item.pageEs
            : item.page}
        </ItemNav>
      ))}
    </div>
  )
}
