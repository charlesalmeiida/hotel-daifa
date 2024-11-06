"use client"

import Image from "next/image"
import { Container } from "../Global/Container"
import { Button } from "../Global/Button"
import { useState } from "react"
import { DateRange, DayPicker } from "react-day-picker"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import "react-day-picker/dist/style.css"
import { LabelForm } from "./LabelForm"

export function BookSearchForm() {
  const [eventDate, setEventDate] = useState<DateRange | undefined>()
  const [isDateRangeOpen, setDateRangeOpen] = useState(false)
  const [numberofGuests, setNumberofGuests] = useState({
    adults: "",
    children: "",
  })

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target
    setNumberofGuests((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleDateRangeOpen = () => {
    setDateRangeOpen(!isDateRangeOpen)
  }
  const checkinDate =
    eventDate?.from && format(new Date(eventDate.from), "yyyy-MM-dd")
  const checkoutDate =
    eventDate?.to && format(new Date(eventDate.to), "yyyy-MM-dd")

  return (
    <div>
      <Container>
        <div className="flex shadow-shaddowShape justify-between items-center py-3 px-4 lg:px-14 bg-gray-50 rounded-[4px] -mt-10">
          <div className="flex flex-col lg:justify-between lg:items-center lg:flex-row w-full gap-6 lg:gap-14">
            <div className="flex gap-10 justify-between">
              <div className="flex space-y-6 flex-col items-start relative gap-4 py-10">
                <LabelForm icon="calendar" title="CHECK-IN" />
                <button
                  onClick={handleDateRangeOpen}
                  className="flex items-center font-mono text-base gap-4 text-gray-800"
                >
                  {eventDate?.from
                    ? `${format(eventDate.from, "dd/MM/yyyy")}`
                    : "Selecione a data:"}
                  <Image
                    src={"svg/chevron-down-gray.svg"}
                    width={12}
                    height={6}
                    alt="Seta para baixo"
                  />
                </button>
                {isDateRangeOpen && (
                  <div className="absolute top-0 bg-white p-4 rounded-[4px] shadow-lg z-10">
                    <button
                      onClick={handleDateRangeOpen}
                      className="absolute top-2 right-2 text-lg text-blue font-sans"
                    >
                      X
                    </button>
                    <DayPicker
                      mode="range"
                      locale={ptBR}
                      selected={eventDate}
                      onSelect={setEventDate}
                      numberOfMonths={2}
                    />
                  </div>
                )}
              </div>

              <div className="lg:block  w-px h-32 bg-gray-200"></div>

              <div className="flex space-y-6 flex-col items-start gap-4 py-10">
                <LabelForm icon="calendar" title="CHECK-OUT" />
                <p className="font-mono text-base text-gray-800">
                  {eventDate?.to
                    ? `${format(eventDate.to, "dd/MM/yyyy")}`
                    : "Selecione a data:"}
                </p>
              </div>

              <div className="w-px h-32 bg-gray-200"></div>

              <div className="flex justify-between gap-10">
                <div className="flex flex-col justify-center gap-10">
                  <LabelForm icon="people" title="PESSOAS" />
                  <input
                    onChange={handleChange}
                    className="font-mono max-w-28 text-base text-gray-800 bg-transparent"
                    type="number"
                    name="adults"
                    placeholder="2"
                    id="adults"
                  />
                </div>

                <div className="w-px h-32 bg-gray-200"></div>

                <div className="flex flex-col justify-center gap-10">
                  <LabelForm icon="people" title="CRIANÇAS" />
                  <input
                    onChange={handleChange}
                    className="font-mono max-w-28 text-base text-gray-800 bg-transparent"
                    type="number"
                    name="children"
                    placeholder="1"
                    id="children"
                  />
                </div>
              </div>
            </div>

            <div className="w-full hidden h-px lg:w-px lg:h-32 bg-gray-200"></div>

            <Button
              link={`https://reservas.desbravador.com.br/hotel-app/hotel-daifa/reservation?checkin=${checkinDate}&checkout=${checkoutDate}&adults=${numberofGuests.adults}&child1=${numberofGuests.children}&voucher=&origin=google&roomCode=&rateCode=&chdage=_`}
              color="fill"
              size="md"
            >
              PESQUISAR
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}
