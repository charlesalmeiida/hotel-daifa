"use client"

import { GoogleMap, LoadScript } from "@react-google-maps/api"
import { useEffect, useState } from "react"

const center = {
  lat: -27.60905647277832,
  lng: -48.54813766479492,
}

export function Maps() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient || !apiKey) return null

  return (
    <div className="w-full h-[50vh] rounded-[4px] mt-16">
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={center}
          zoom={19}
        ></GoogleMap>
      </LoadScript>
    </div>
  )
}
