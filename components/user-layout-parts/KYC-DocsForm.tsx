import React, { useState } from "react"
import dynamic from "next/dynamic"
import Image from "next/image"
import { toast } from "@/hooks/use-toast"
import { useAuth } from "@/hooks/useCustomHooks"
import { PaymentStatus } from "@prisma/client"
import axios from "axios"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import ImageSkelton from "../ImageSkelton"
import { Button } from "../ui/button"

type UploadableFiles = {
  id_proof?: File
  pancard?: File
  selfie?: File
}
type ImgaesType = {
  id_proof?: string
  pancard?: string
  selfie?: string
  status?: PaymentStatus
}
export default function KYCDocsForm() {
  const { setLoader, user, kycDocImg, setKycDocImg } = useAuth()

  const [images, setImages] = useState<ImgaesType>({})
  const [file, setFile] = useState<UploadableFiles | []>([])

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return
    }

    setFile({ ...file, [e.target.name]: e.target.files[0] })
  }

  const onClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.currentTarget.value = ""
  }
  const toBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader()

      fileReader.readAsDataURL(file)

      fileReader.onload = () => {
        resolve(fileReader.result)
      }

      fileReader.onerror = (error) => {
        reject(error)
      }
    })
  }

  // On submit, upload the file
  const handleKYC_DocsForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!file) {
      return toast({
        title: "Please select a Image file",
        variant: "destructive",
      })
    }

    let base64: string[] = []
    for (let item in file) {
      const v = (await toBase64(file[item])) as string

      base64.push(v)
    }
    // You can upload the base64 to your server here
    if (base64.length < 3) {
      return toast({
        title: "All Images are  required",
        variant: "destructive",
      })
    }

    await axios.post("/api/v1/handle/kyc-docs", {
      userId: user?._id,
      KYC_Images: base64,
    })

    setFile(null)
  }
  async function getImages() {
    const { data } = await axios.get("/api/v1/handle/kyc-docs", {
      params: {
        userId: user?._id,
      },
    })
    setImages(data.content)
  }
  React.useEffect(() => {
    getImages()
    console.log(images)
    setKycDocImg(true)
  }, [])

  return (
    <>
      {images.status !== "VERIFIED" ? (
        <span className="mb-10 mt-4 text-amber-600">
          KYC is Under Progress... Current Status: {images.status}
        </span>
      ) : null}
      <div className="flex w-full justify-stretch gap-4">
        <div>
          <form encType="multipart/form-data" onSubmit={handleKYC_DocsForm}>
            <div className="mb-4 grid w-full max-w-sm items-center gap-4">
              <Label htmlFor="picture">ID PROOF </Label>
              <Input
                id="picture"
                type="file"
                name="id_proof"
                accept="image/*"
                disabled={images.status !== "VERIFIED"}
                onChange={onFileChange}
                onClick={onClick}
              />
            </div>

            <div className="mb-4 grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="picture">PAN CARD</Label>
              <Input
                id="picture"
                type="file"
                name="pancard"
                disabled={images.status !== "VERIFIED"}
                accept="image/*"
                onChange={onFileChange}
                onClick={onClick}
              />
            </div>
            <div className="mb-4 grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="picture">SELFIE</Label>
              <Input
                id="picture"
                type="file"
                name="selfie"
                disabled={images.status !== "VERIFIED"}
                accept="image/*"
                onChange={onFileChange}
                onClick={onClick}
              />
              <small className="text-red-500">
                Take Selfie with Pan Card in Hand
              </small>
            </div>
            {/* {base64 && (
        <Image src={base64} width={300} height={400} alt="Uploaded Image" />
      )} */}

            <Button disabled={images.status !== "VERIFIED"}>
              {images.status !== "VERIFIED"
                ? "Already Uploaded"
                : "SaveChanges"}
            </Button>
          </form>
        </div>
        <div>
          {kycDocImg && (
            <div className="mt-5 flex h-48   justify-center  rounded p-4">
              <div className="grid grid-cols-3 items-center justify-center gap-10  ">
                <ImageSkelton src={images?.id_proof} />
                <ImageSkelton src={images?.pancard} />
                <ImageSkelton src={images?.selfie} />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
