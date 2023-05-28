// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";





const prisma = new PrismaClient()

type Data = {
  success: boolean
  message: any
  content?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
 if(req.method === "POST"){
 const newCardInfo = req.body.newCardInfo
  try {
    await prisma.giftCards.create({ data: newCardInfo })
    return res
      .status(200)
      .json({ success: true, message: "Card Added Successfully" })
  } catch (error) {
    return res.status(200).json({ success: false, message: error.message })
  }
 }
 if (req.method === "PUT") {
   const newCardInfo = req.body.newCardInfo
   const id = req.body.id
  try {
    await prisma.giftCards.update({where:{id}, data: newCardInfo })
    return res
      .status(200)
      .json({ success: true, message: "Card Updated Successfully" })
  } catch (error) {
    return res.status(200).json({ success: false, message: error.message })
  }
 }
}