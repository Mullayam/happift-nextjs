import type { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt"
import { setCookie } from "cookies-next"
import jwt from "jsonwebtoken"
import validator from "validator"

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
  const { firstName, email, password, phone } = req.body
  const errors: string[] = []

  const validationSchema = [
    {
      valid: validator.isLength(firstName, { min: 1, max: 20 }),
      errorMessage: "First name is invalid",
    },
    {
      valid: validator.isEmail(email),
      errorMessage: "Email  is invalid",
    },
    {
      valid: validator.isStrongPassword(password),
      errorMessage: "Password is not  strong",
    },
    {
      valid: validator.isMobilePhone(phone),
      errorMessage: "Phone is invalid",
    },
  ]

  try {
    validationSchema.forEach((check) => {
      if (!check.valid) {
        errors.push(check.errorMessage)
      }

      if (errors.length) {
        throw new Error(errors[0])
      }
    })
    const userWithEmail = await prisma.users.findUnique({
      where: { email },
    })

    if (userWithEmail) {
      throw new Error("Email Already Taken")
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const UserData = {
      firstName,
      password: hashedPassword,
      phone,
      email,
    }
    const response = await prisma.users.create({ data: UserData })

    const AuthToken = jwt.sign(
      {
        id: response.id,
        name: response.firstName + " " + response.lastName,
        email: response.email,
        status: response.status,
        role: response.role,
        avatar: response.avatar,
      },
      process.env.ENCRYPTION_KEY,
      { expiresIn: "24h" }
    )

    setCookie("access_token", AuthToken, { req, res, maxAge: 60 * 60 * 24 })
    return res.status(200).json({
      success: true,
      message: "Account Created Successfuly.",
    })
  } catch (error) {
    return res.status(200).json({ success: false, message: error.message })
  }
}
