import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { setCookie } from "cookies-next";
import jwt from "jsonwebtoken";



import make from "@/lib/secure";


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
  try {
    const User = await prisma.users.findUnique({
      where: { email: req.body.email },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        password: true,
        role: true,
        status: true,
        avatar: true,
      },
    })
    if (!User) {
      throw new Error("User Doest not exist")
    }
    if (!User.status === true) {
      throw new Error(
        `This Account is not Activated, Please Activate Account First.`
      )
    }
    const CheckPasswordValidOrNot = await bcrypt.compare(
      req.body.password,
      User.password
    )
    if (!CheckPasswordValidOrNot) throw new Error("Incorrect Password")
    const JWTToken = jwt.sign(
      {
        _id: User.id,
        name: User.firstName + " " + User.lastName,
        avatar: User.avatar,
        email: User.email,
        role: User.role,
        status: User.status,
      },
      process.env.NEXT_PUBLIC_JWT_SECRET_TOKEN,
      {
        expiresIn: "30d",
      }
    )
    const SecurityToken = await make.encrypt(JWTToken)

    setCookie("access_token", SecurityToken, {
      req,
      res,
      maxAge: 60 * 60,
      // httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    })
    return res
      .status(200)
      .json({ success: true, message: "Logged in successfully 😊 👌" })
  } catch (error: any) {
    return res.send({
      success: false,
      message: error.message,
    })
  }
}