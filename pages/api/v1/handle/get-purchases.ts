// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
type Data = {
  success: boolean
  message: string
  content?: any
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
    const LastPurchased = await prisma.payements.findFirst({
      select: {
        paymentDetails: true,
      },
      take: -1,
      orderBy: { createdAt: "desc" },
    })

    return res.status(200).json({
      success: true,
      message: "",
      content: LastPurchased,
    })
  } else if (req.method === "POST") {
    const Cards = await prisma.payements.findMany({
      where: {
        userId: req.body.id,
        status: "SUCCESS",
      },
      select: {
        giftCards: {
          select: {
            cardName: true,
            cardDetails: true,
          },
        },
      },
    })

    console.log(Cards)
    // return res.status(200).json({
    //   success: true,
    //   message: "",
    //   content: Cards,
    // })
  } else {
    return res.status(200).json({
      success: false,
      message: "Method not supported",
    })
  }
}
