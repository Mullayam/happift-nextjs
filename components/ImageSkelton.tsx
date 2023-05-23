import React from "react"
import Image from "next/image"

export default function ImageSkelton({ src }: { src: string }) {
  return (
    <div>
      <Image
        className="h-40 w-40 rounded-lg"
        src={src}
        alt="id_proof"
        width={128}
        height={48}
      />
    </div>
  )
}
