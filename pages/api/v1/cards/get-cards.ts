// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json({
    cardName: "Amazon Gift Card",
    image:
      "https://az15297.vo.msecnd.net/images/rewards/rc/medium/AmazonPayIN_262x164.png",
    stockAvailable: 4,
    basePrice: 225,
    cardWorth: 250,
    availableCard: ["100", "250", "500", "1000"],
  })
}
