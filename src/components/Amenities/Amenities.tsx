import { Container } from "../Global/Container"
import { ItemAmenity } from "./ItemAmenity"
import { Amenities } from "./ArrayAmenities"

export function AmenitiesSection() {
  return (
    <>
      <Container>
        <div className="mx-auto space-y-4 text-center">
          <h3>Comodidades</h3>
          <span className="w-14 h-px mx-auto bg-orange block"></span>
        </div>
        <div className="flex mt-10 flex-wrap max-w-[1072px] justify-center items-center gap-y-10 gap-x-16 mx-auto">
          {Amenities.map((item) => (
            <ItemAmenity
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Container>
    </>
  )
}
