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
    const AllCards = await prisma.giftCards.findMany({
      select: {
        id: true,
        cardName: true,
        image: true,
        stock: true,
        buyPrice: true,
        worth: true,
      },
    })
    return res.status(200).json({
      success: true,
      message: " ",
      content: {
        AllCards,
        availableCard: ["100", "250", "500", "1000"],
      },
    })
  } catch (error) {
    return res.status(200).json({ success: false, message: error.message })
  }
}
