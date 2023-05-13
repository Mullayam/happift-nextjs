import type { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from "@prisma/client"

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
  const UserPassedToken = JSON.parse(req.body).token
  try {
    const isUserTokenExist = await primsa.tokens.findMany({
      where: { resetPassToken: UserPassedToken },
      select: {
        resetPassToken: true,
        userId: true,
        expiresAt: true,
        extraTokens: true,
      },
    })

    if (isUserTokenExist.length === 0) {
      throw new Error(
        "This token does not exist/valid and may be possibly forged"
      )
    }
    let { expiresAt, extraTokens, userId, resetPassToken } = isUserTokenExist[0]
    if (expiresAt < Date.now().toString()) {
      throw new Error("Token is Expired")
    }
    if (extraTokens[extraTokens.length - 1] !== UserPassedToken) {
      throw new Error("Token is Already Used and Expired")
    }
    const User = await primsa.users.findUnique({
      where: { id: userId },
      select: { email: true },
    })
    return res.status(200).json({
      success: true,
      message: "Token is valid",
      content: User,
    })
  } catch (error: any) {
    return res.status(200).json({
      success: false,
      message: error.message,
    })
  }
}
