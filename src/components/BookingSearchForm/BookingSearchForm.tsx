"use client"

import Image from "next/image"
import { Container } from "../GlobalComponents/Container"
import { Button } from "../GlobalComponents/Button"
import { useState } from "react"
import { DateRange, DayPicker } from "react-day-picker"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import "react-day-picker/dist/style.css"
import { LabelForm } from "./LabelForm"

export function BookSearchForm() {
  const [eventDate, setEventDate] = useState<DateRange | undefined>()
  const [isDateRangeOpen, setDateRangeOpen] = useState(false)
  const handleDateRangeOpen = () => {
    setDateRangeOpen(!isDateRangeOpen)
  }

  return (
    <div>
      <Container>
        <div className="flex shadow-shaddowShape justify-between items-center py-3 px-14 bg-gray-50 rounded-[4px] -mt-10">
          <div className="flex gap-14">
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

            <div className="w-px h-32 bg-gray-200"></div>

            <div className="flex space-y-6 flex-col items-start gap-4 py-10">
              <LabelForm icon="calendar" title="CHECK-OUT" />
              <p className="font-mono text-base text-gray-800">
                {eventDate?.to
                  ? `${format(eventDate.to, "dd/MM/yyyy")}`
                  : "Selecione a data:"}
              </p>
            </div>

            <div className="w-px h-32 bg-gray-200"></div>

            <LabelForm icon="people" title="PESSOAS" />
            <div className="w-px h-32 bg-gray-200"></div>

            <LabelForm icon="people" title="CRIANÇAS" />
          </div>
          <Button color="fill" size="md">
            PESQUISAR
          </Button>
        </div>
      </Container>
    </div>
  )
}
