import type { NextApiRequest, NextApiResponse } from "next";
import { SendEmail } from "@/services/mail"
import { PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt"

const primsa = new PrismaClient()

type Data = {
  success: boolean
  message?: string
  content?: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { password, confirm_password } = req.body.passwordValue

  try {
    if (password !== confirm_password) {
      throw new Error("Passwords do not match")
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    await primsa.users.update({
      where: { email: req.body.email },
      data: {
        password: hashedPassword,
      },
    })
    await primsa.tokens.updateMany({
      where: {
        resetPassToken: req.body.token,
      },
      data: {
        expiresAt: Date.now().toString(),
      },
    })

    res.status(200).json({
      success: true,
      message: "Passwords has been Changed successfully",
    })
    return await SendEmail(
      req.body.email,
      "Password Changed",
      "Your Password has been Changed successfully",
      ""
    )
  } catch (error: any) {
    console.log(error)
    return res.status(200).json({
      success: false,
      message: error.message,
    })
  }
}