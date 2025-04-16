"use client"

import Image from "next/image"
import React from "react"

export function BannersWifi() {
  const [isImageChange, setImageChange] = React.useState(false)

  const changeImageAfterDelay = () => {
    setTimeout(() => {
      setImageChange(!isImageChange)
    }, 3000)
  }

  return (
    <React.Fragment>
      <Image
        src={isImageChange ? "/svg/banner-02.svg" : "/svg/banner-01.svg"}
        width={300}
        className="absolute bottom-8 right-96"
        height={50}
        alt="Wifi"
        onLoadingComplete={changeImageAfterDelay}
      />
    </React.Fragment>
  )
}
