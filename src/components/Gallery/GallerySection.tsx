import { GalleryImageColumn } from "./Gallery"

export function GallerySection() {
  return (
    <>
      <div className="mt-14 flex flex-wrap justify-between">
        <div>
          <GalleryImageColumn firstImage="01" secImage="02" />
        </div>
        <div>
          <GalleryImageColumn firstImage="03" secImage="04" />
        </div>
        <div>
          <GalleryImageColumn firstImage="05" secImage="06" />
        </div>
        <div>
          <GalleryImageColumn firstImage="07" secImage="08" />
        </div>
      </div>
    </>
  )
}
