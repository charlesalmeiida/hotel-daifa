import Image from "next/image"

interface GalleryProps {
  firstImage: string
  secImage: string
}

export function GalleryImageColumn({ firstImage, secImage }: GalleryProps) {
  return (
    <div className="space-y-8">
      <Image
        src={`/img/gallery/image-gallery-${firstImage}.png`}
        width={280}
        height={400}
        alt="Foto galeria Hotel Daifa"
      />
      <Image
        src={`/img/gallery/image-gallery-${secImage}.png`}
        width={280}
        height={400}
        alt="Foto galeria Hotel Daifa"
      />
    </div>
  )
}
