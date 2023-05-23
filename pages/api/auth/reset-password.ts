import type { NextApiRequest, NextApiResponse } from "next"
import { SendEmail } from "@/services/mail"
import { PrismaClient } from "@prisma/client"

import { generateToken } from "../../../helpers/functions"

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
  const isUserExist = await primsa.users.findUnique({
    where: { email: req.body.email },
    select: {
      id: true,
    },
  })
  try {
    if (!isUserExist) {
      throw new Error("No User Found With this email.")
    }

    const isUserTokenExist = await primsa.tokens.findMany({
      where: { userId: isUserExist.id },
      select: {
        userId: true,
        resetPassToken: true,
        extraTokens: true,
      },
    })
    let { resetPassToken, extraTokens, userId } = isUserTokenExist[0]
    const resetToken = generateToken().passwordResetToken
    let insertToken
    if (isUserTokenExist) {
      if (resetPassToken === "") {
        extraTokens = [...extraTokens]
      }
      extraTokens.push(resetToken)
      insertToken = await primsa.tokens.updateMany({
        where: { userId },
        data: {
          resetPassToken: resetToken,
          expiresAt: `${generateToken().tokenExpirationTime}`,
          extraTokens,
        },
      })
    } else {
      insertToken = await primsa.tokens.create({
        data: {
          resetPassToken: generateToken().passwordResetToken,
          expiresAt: `${generateToken().tokenExpirationTime}`,
          userId: isUserExist.id,
        },
      })
    }
    const RestPassURL = `${req.headers.origin}/auth/change-password/${resetToken}`
    const html = `<a href="${RestPassURL}">Reset Password</a>`
    await SendEmail(req.body.email, "Reset Password", "", html)
    return res.status(200).json({
      success: true,
      message: "An Mail has been sent to your registered email",
    })
  } catch (error: any) {
    return res.status(200).json({
      success: false,
      message: error.message,
    })
  }
}
