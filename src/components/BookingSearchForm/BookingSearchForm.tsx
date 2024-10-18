import Image from "next/image";
import { Container } from "../Container";
import { Button } from "../Button";

export function BookSearchForm() {
  return (
    <div>
      <Container>
        <div className="flex shadow-shaddowShape justify-between items-center py-3 px-14 bg-gray-50 rounded-[4px] -mt-10">
          <div className="flex gap-14 ">
            <div className="flex gap-4 items-center">
              <Image
                src={"/svg/icon-calendar-gray.svg"}
                width={15}
                height={17}
                alt="Ícone de calendário"
              />
              <span className="font-mono text-base text-gray-600">
                CHECK-IN
              </span>
            </div>
            <div className="w-px h-32 bg-gray-200"></div>
            <div className="flex gap-4 items-center">
              <Image
                src={"/svg/icon-calendar-gray.svg"}
                width={15}
                height={17}
                alt="Ícone de calendário"
              />
              <span className="font-mono text-base text-gray-600">
                CHECK-OUT
              </span>
            </div>
            <div className="w-px h-32 bg-gray-200"></div>
            <div className="flex gap-4 items-center">
              <Image
                src={"/svg/icon-people.svg"}
                width={20}
                height={18}
                alt="Ícone de pessoas"
              />
              <span className="font-mono text-base text-gray-600">PESSOAS</span>
            </div>
            <div className="w-px h-32 bg-gray-200"></div>
            <div className="flex gap-4 items-center">
              <Image
                src={"/svg/icon-people.svg"}
                width={20}
                height={18}
                alt="Ícone de pessoas"
              />
              <span className="font-mono text-base text-gray-600">
                CRIANÇAS
              </span>
            </div>
          </div>
          <Button color="fill" size="md">
            PESQUISAR
          </Button>
        </div>
      </Container>
    </div>
  )
}