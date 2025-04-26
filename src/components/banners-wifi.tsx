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
        className="max-w-[240px] md:max-w-full fixed bottom-5 z-30 left-5 md:bottom-10 md:left-10"
        height={50}
        alt="Wifi"
        onLoad={changeImageAfterDelay}
      />
    </React.Fragment>
  )
}
