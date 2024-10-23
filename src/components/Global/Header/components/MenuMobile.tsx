import { Button } from "@/components/Global/Button"
import { ItemNav } from "./ItemNav"

export function MenuMobile() {
  return (
    <div className="flex lg:hidden flex-col gap-10 absolute z-10 inset-0 top-20 w-11/12 mx-auto rounded-[4px] items-center h-fit py-8 bg-blue">
      <ItemNav icon link="/">
        O hotel
      </ItemNav>
      <ItemNav link="/">Promoções</ItemNav>
      <ItemNav link="/">Blog</ItemNav>
      <ItemNav link="/contato">Contato</ItemNav>
      <div className="md:hidden">
        <Button color="outline" size="sm" icon>
          RESERVAR
        </Button>
      </div>
    </div>
  )
}
