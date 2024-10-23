import Image from "next/image"
import Link from "next/link"

export function Socials() {
  return (
    <>
      <Link href={"https://www.instagram.com/hoteldaifa/"} target={"_blank"}>
        <Image
          src={"svg/icon-instagram.svg"}
          width={20}
          height={20}
          alt="Logo do Instagram"
        />
      </Link>
      <Link href={"https://www.facebook.com/hoteldaifa/"} target={"_blank"}>
        <Image
          src={"svg/icon-facebook.svg"}
          width={11}
          height={20}
          alt="Logo do Facebook"
        />
      </Link>
    </>
  )
}
