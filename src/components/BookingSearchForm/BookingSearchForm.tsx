"use client"

import Image from "next/image"
import { Container } from "../global/Container"
import { Button } from "../global/Button"
import { useState } from "react"
import { DateRange, DayPicker } from "react-day-picker"
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
          <div className="flex gap-14 ">
            <div className="flex space-y-6 flex-col items-start relative gap-4 py-10">
              <LabelForm icon="calendar" title="CHECK-IN" />
              <button
                onClick={handleDateRangeOpen}
                className="flex items-center font-mono text-base gap-8 text-gray-800"
              >
                Selecione a data:{" "}
                <Image
                  src={"svg/chevron-down-gray.svg"}
                  width={12}
                  height={6}
                  alt="Seta para baixo"
                />
              </button>
              {isDateRangeOpen && (
                <div className="absolute top-0  bg-white p-4 rounded-[4px]">
                  <DayPicker
                    mode="range"
                    selected={eventDate}
                    onSelect={setEventDate}
                  />
                </div>
              )}
            </div>

            <div className="w-px h-32 bg-gray-200"></div>

            <LabelForm icon="calendar" title="CHECK-OUT" />

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
