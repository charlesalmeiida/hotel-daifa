"use client"

import Image from "next/image"
import { Button } from "../Global/Button"
import { useState } from "react"
import { DateRange, DayPicker } from "react-day-picker"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import "react-day-picker/dist/style.css"
import { LabelForm } from "./LabelForm"
import { InputGuests } from "./InputGuests"
import { Container } from "../Global/Container"
import { useTranslations } from "next-intl"

export function BookSearchForm() {
  const t = useTranslations("SearchForm")

  const [eventDate, setEventDate] = useState<DateRange | undefined>()
  const [isDateRangeOpen, setDateRangeOpen] = useState(false)
  const [numberofGuests, setNumberofGuests] = useState({
    adults: "",
    children: "",
  })

  const handleChange = (e: { target: { name: string; value: string } }) => {
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
            <div className="flex flex-col lg:flex-row gap-10 justify-between">
              <div className="flex flex-col md:flex-row lg:gap-10 justify-center">
                <div className="flex mx-auto lg:mx-0 space-y-6 flex-col items-start relative gap-4 py-10">
                  <div className="mx-auto lg:mx-0">
                    <LabelForm icon="calendar" title="CHECK-IN" />
                  </div>
                  <button
                    onClick={handleDateRangeOpen}
                    className="flex items-center font-mono text-base gap-4 text-gray-800"
                  >
                    {eventDate?.from
                      ? `${format(eventDate.from, "dd/MM/yyyy")}`
                      : t("date")}
                    <Image
                      src={"svg/chevron-down-gray.svg"}
                      width={12}
                      height={6}
                      alt="Seta para baixo"
                    />
                  </button>
                  {isDateRangeOpen && (
                    <div className="absolute -left-[105px] lg:left-0 top-0 bg-white p-4 rounded-[4px] shadow-lg z-10">
                      <button
                        onClick={handleDateRangeOpen}
                        className="text-end w-full p-3 text-lg text-blue font-sans"
                      >
                        X
                      </button>
                      <DayPicker
                        classNames={{
                          months: "flex flex-col md:flex-row gap-6",
                          month: "w-full md:w-1/2",
                          day_button: "p-3",
                          selected: "border-blue text-gray-50  rounded-full",
                          range_start:
                            "bg-blue text-gray-50 border-blue rounded-full",
                          range_end:
                            "bg-blue text-gray-50 border-blue rounded-full",
                          range_middle: "bg-gray-200 text-gray-800",
                        }}
                        disabled={{ before: new Date() }}
                        className="font-mono text-base text-gray-800"
                        mode="range"
                        locale={ptBR}
                        selected={eventDate}
                        onSelect={setEventDate}
                        numberOfMonths={2}
                      />
                    </div>
                  )}
                </div>

                <div className="hidden lg:block w-px h-32 bg-gray-200"></div>

                <div className="flex mx-auto lg:mx-0 space-y-6 flex-col items-start gap-4 py-10">
                  <LabelForm icon="calendar" title="CHECK-OUT" />
                  <p className="font-mono text-center lg:text-left text-base text-gray-800">
                    {eventDate?.to
                      ? `${format(eventDate.to, "dd/MM/yyyy")}`
                      : t("date")}
                  </p>
                </div>
              </div>

              <div className="hidden lg:block w-px h-32 bg-gray-200"></div>

              <div className="flex flex-col md:flex-row justify-center gap-10">
                <InputGuests
                  title={t("pessoas")}
                  handleChange={handleChange}
                  name="adults"
                  placeholder="2"
                />

                <div className="hidden lg:block w-px h-32 bg-gray-200"></div>

                <InputGuests
                  title={t("crianças")}
                  handleChange={handleChange}
                  name="children"
                  placeholder="1"
                />
              </div>
            </div>

            <div className="w-full hidden h-px lg:w-px lg:h-32 bg-gray-200"></div>

            <Button
              link={`https://reservas.desbravador.com.br/hotel-app/hotel-daifa/reservation?checkin=${checkinDate}&checkout=${checkoutDate}&adults=${numberofGuests.adults}&child1=${numberofGuests.children}&voucher=&origin=google&roomCode=&rateCode=&chdage=_`}
              color="fill"
              size="md"
            >
              {t("btn")}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}
