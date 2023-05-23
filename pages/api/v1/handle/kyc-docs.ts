// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from "@prisma/client"
import PublitioAPI from "publitio_js_sdk"

const prisma = new PrismaClient()
type Data = {
  success: boolean
  message?: string
  content?: any
}
const publitio = new PublitioAPI(
  process.env.NEXT_PUBLIC_PUBLITO_API_KEY,
  process.env.NEXT_PUBLIC_PUBLITO_API_SECRET
)
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const user_id = req.query.userId as string
  if (req.method === "POST") {
    const images = req.body.KYC_Images
    const userId = req.body.userId
    let imagesData = []
    await images.map(async (image) => {
      const DataUrl = image.replace(/^data:image\/\w+;base64,/, "")
      // console.log(DataUrl)
      //   var ext = StoredImagesObject[0].image.split(";")[0].match(/jpeg|png|gif/)[0]
      const file = new Buffer(DataUrl, "base64")
      await publitio
        .uploadFile(file, "file")
        .then(async (data) => {
          await imagesData.push(data.url_short)
          await prisma.kycDocs.create({
            data: {
              id_proof: imagesData[0],
              pancard: imagesData[1],
              selfie: imagesData[2],
              userId,
              status: "PENDING",
            },
          })
        })
        .catch((error) => {
          console.log(error)
        })
    })

    return res.status(200).json({
      success: true,
      message: "Image successfully uploaded",
    })
  } else {
    const KYC_Images = await prisma.kycDocs.findUnique({
      where: {
        userId: user_id,
      },
      select: {
        id_proof: true,
        pancard: true,
        selfie: true,
        status: true,
      },
    })
    return res.status(200).json({
      success: true,
      content: KYC_Images,
    })
  }
}
