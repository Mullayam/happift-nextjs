import type { NextApiRequest, NextApiResponse } from "next"
import { removeDuplicates } from "@/helpers/functions"
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
  let availables = []
  try {
    const q = req.query.giftCardId as string
    const [giftCardId, category] = q.split(";")
    const availableCard = await prisma.giftCards.findMany({
      where: {
        category,
      },
      select: {
        worth: true,
      },
    })

    Object.entries(availableCard).map((item) => availables.push(item[1].worth))

    const AllCards = await prisma.giftCards.findUnique({
      where: {
        id: giftCardId,
      },
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
        availableCard: removeDuplicates(availables).sort(),
      },
    })
  } catch (error) {
    return res.status(200).json({ success: false, message: error.message })
  }
}
