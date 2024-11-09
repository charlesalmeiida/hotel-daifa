import { Button } from "@/components/Global/Button"
import { ItemNav } from "./ItemNav"
import navLinksData from "@/app/data/navLinksData.json"

export function MenuMobile() {
  return (
    <div className="flex lg:hidden flex-col gap-10 absolute z-10 inset-0 top-20 w-11/12 mx-auto rounded-[4px] items-center h-fit py-8 bg-blue">
      {navLinksData.map((item) => (
        <ItemNav key={item.page} color="secondary" link={item.link}>
          {item.page}
        </ItemNav>
      ))}
      <div className="md:hidden">
        <Button
          link="https://reservas.desbravador.com.br/hotel-app/hotel-daifa"
          color="outlineWhite"
          size="sm"
          icon
        >
          RESERVAR
        </Button>
      </div>
    </div>
  )
}
