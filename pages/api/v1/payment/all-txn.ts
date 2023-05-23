// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

type Data = {
  success: boolean
  message: any
  content?: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const transaction = await prisma.payements.findMany({
      select: {
        orderId: true,
        status: true,
        paymentDetails: true,
        createdAt: true,
      },
    })
    return res.status(200).json({
      success: true,
      message: "",
      content: transaction,
    })
  } catch (error) {
    return res.status(200).json({
      success: false,
      message: error.message,
    })
  }
}
