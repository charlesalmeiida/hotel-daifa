import { ItemNav } from "./ItemNav"

interface ModalMenuProps {
  handleModal: () => void
}

export function ModalMenu({ handleModal }: ModalMenuProps) {
  return (
    <div
      onClick={handleModal}
      onMouseLeave={handleModal}
      className="bg-blue absolute -right-9 space-y-4 flex flex-col mt-px items-center rounded-[4px] shadow-shaddowShape py-4 px-11 transition-all"
    >
      <ItemNav color="secondary" link="/">
        Galeria
      </ItemNav>
      <ItemNav color="secondary" link="/">
        Localização
      </ItemNav>
      <ItemNav color="secondary" link="/">
        Tour 360º
      </ItemNav>
      <ItemNav color="secondary" link="/">
        FAQ
      </ItemNav>
    </div>
  )
}
