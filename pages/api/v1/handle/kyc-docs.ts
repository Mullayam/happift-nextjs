// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from "next";
import { PaymentStatus, PrismaClient, ROLE } from "@prisma/client"
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
  } else if (req.method === "PUT") {
    const status = req.body.status as PaymentStatus
    const id = req.body.id as string
    const userId = req.body.userId as string
    const role = req.body.role as ROLE
    await prisma.kycDocs.update({
      where: {
        id,
      },
      data: {
        status,
      },
    })
  
    await prisma.users.update({
      where: {
        id: userId,
      },
      data: {
        role,
      },
    })
    return res.status(200).json({ success: true, message: "Status Updated" })
  } else {
    let KYC_Images

    if (user_id) {
      KYC_Images = await prisma.kycDocs.findMany({
        where: {
          OR: [{ userId: user_id }, { id: req.query.kycDocId as string }],
        },
        select: {
          id_proof: true,
          pancard: true,
          selfie: true,
          status: true,
        },
      })
    } else {
      KYC_Images = await prisma.kycDocs.findMany({
        select: {
          id: true,
          id_proof: true,
          pancard: true,
          selfie: true,
          status: true,
          User: {
            select: {
              firstName: true,
              email: true,
            },
          },
        },
      })
    }

    return res.status(200).json({
      success: true,
      content: KYC_Images,
    })
  }
}