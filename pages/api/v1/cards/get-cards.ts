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
  if (req.method === "POST") {
    try {
      const singleCard = await prisma.giftCards.findUnique({
        where: {
          id: req.body.id,
        },
        select: {
          id: true,
          cardName: true,
          image: true,
          stock: true,
          buyPrice: true,
          isAvailable: true,
          worth: true,
          category: true,
          cardDetails: true,
        },
      })

      return res.status(200).json({
        success: true,
        message: " ",
        content: singleCard,
      })
    } catch (error) {
      return res.status(200).json({
        success: false,
        content: { noCard: true },
        message: error.message,
      })
    }
  }
  try {
    const AllCards = await prisma.giftCards.findMany({
      select: {
        id: true,
        cardName: true,
        image: true,
        stock: true,
        buyPrice: true,
        isAvailable: true,
        worth: true,
        category: true,
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
