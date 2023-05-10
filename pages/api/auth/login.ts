import type { NextApiRequest, NextApiResponse } from "next"
import bcrypt from "bcrypt"
import { setCookie } from "cookies-next"
import jwt from "jsonwebtoken"

import UserModel from "../../../models/UserSchema"

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
    const User = await UserModel.findOne({ email: req.body.email })
    if (!User) {
      throw new Error("User Doest not exist")
    }
    // if (!User.status === "0x0000") {
    //   throw new Error(
    //     `This Account is not Activated, Please Contact the administrator`
    //   )
    // }
    const CheckPasswordValidOrNot = await bcrypt.compare(
      req.body.password,
      User.password
    )
    if (!CheckPasswordValidOrNot) throw new Error("Incorrect Password")
    //create new toke and assigning it to the user
    const JWTToken = jwt.sign(
      { _id: User._id, email: User.email, role: User.role },
      process.env.NEXT_PUBLIC_JWT_SECRET_TOKEN,
      {
        expiresIn: "30d",
      }
    )
    setCookie("access_token", JWTToken, {
      req,
      res,
      maxAge: 60 * 60 * 24,
      httpOnly: true,
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
