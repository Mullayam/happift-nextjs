import React from "react"
import Image from "next/image"

export default function ImageSkelton({
  src,
  alt,
}: {
  src: string
  alt?: string
}) {
  return (
    <div>
      <Image
        className="h-40 w-40 rounded-lg"
        src={src}
        alt={alt}
        width={128}
        height={48}
      />
    </div>
  )
}
