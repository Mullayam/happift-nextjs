// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from "next"
import { SendEmail } from "@/services/mail"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
type Data = {
  success: boolean
  message?: string
  content?: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { fullName, message, email } = req.body.inputs
  try {
    await prisma.support.create({
      data: {
        fullName,
        email,
        message,
      },
    })
    await SendEmail("su@enjoys.in", "Support - Happift", fullName, message)
    return res.status(200).json({
      success: true,
      message: "Message was successfully",
    })
  } catch (error) {
    return res.status(200).json({
      success: false,
      message: "Soemthing Went Wrong",
    })
  }
}
