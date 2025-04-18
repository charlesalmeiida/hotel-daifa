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
        className="absolute max-w-[280px] md:max-w-full bottom-8 left-3 md:left-auto md:right-96"
        height={50}
        alt="Wifi"
        onLoad={changeImageAfterDelay}
      />
    </React.Fragment>
  )
}
