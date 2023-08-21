// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
type Data = {
  success: boolean
  message: string
}
type PaytmParamsBody = {
  body: any
  head?: any
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
  } else if (req.method === "POST") {
    const payoutFilds = req.body.payoutFilds
    // await prisma.tokens.create({
    //   data: {
    //     vpa: payoutFilds.vpa,
    //     name: payoutFilds.name,
    //     isValid: true
    //     userId:payoutFilds.userId
    //   },
    // })
    return res.status(200).json({
      success: true,
      message: "VPA is Valid",
    })
  } else {
    return res.status(200).json({
      success: false,
      message: "Method not supported",
    })
  }
}
