import { NextApiRequest, NextApiResponse } from "next";
import { VerifyTokenForPayload } from "@/services/oauth-google";
import { PrismaClient, ROLE } from "@prisma/client";
import { setCookie } from "cookies-next";
import jwt from "jsonwebtoken";



import make from "@/lib/secure";


const prisma = new PrismaClient()

const { OAuth2Client } = require("google-auth-library")
const url = require("url")

type Data = {
  success: boolean
  message?: string | {}
  content?: any
}
type PayloadType = {
  given_name: string
  family_name: string
  picture: string
  email: string
  email_verified: string
  sub: string
  access_token: string
  refresh_token: string
}
export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  let q = url.parse(req.url, true).query
  if (!q.code) {
    return res
      .writeHead(301, {
        Location: "/",
      })
      .end()
  }
  const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      code: q.code,
      client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      client_secret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
      redirect_uri: process.env.NEXT_PUBLIC_GOOGLE_CALLBACK,
      grant_type: "authorization_code",
    }),
  })

  const tokenData = await tokenResponse.json()
  const client = new OAuth2Client(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID)
  const payload: PayloadType = await VerifyTokenForPayload(
    tokenData.id_token,
    client
  )
  const user = await prisma.users.findUnique({
    where: { email: payload.email },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
      role: true,
      status: true,
    },
  })

  if (user) {
    const AuthToken = jwt.sign(
      {
        _id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        avatar: "",
        email: user.email,
        role: user.role,
        status: user.status,
      },
      process.env.ENCRYPTION_KEY,
      { expiresIn: "12h" }
    )
    const encryptData = await make.encrypt(AuthToken)
    setCookie("access_token", encryptData, { req, res, maxAge: 60 * 60 * 12 })
    return res
      .writeHead(301, {
        Location: "/user/redirecting",
      })
      .end()
  } else {
    const user = await prisma.users.create({
      data: {
        google_id: payload.sub,
        firstName: payload.given_name,
        lastName: payload.family_name,
        email: payload.email,
        phone: null,
        password: (
          payload.given_name +
          "@123" +
          payload.sub.slice(-6)
        ).toLowerCase(),
        avatar: payload.picture,
        status: "E_0x0045",
        tokens: {
          create: {
            oauthAccessToken: tokenData.access_token,
            oauthRefreshToken: tokenData.refresh_token,
          },
        },
      },
    })

    const AuthToken = jwt.sign(
      {
        _id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        avatar: user.avatar,
        email: user.email,
        role: user.role,
        status: user.status,
      },
      process.env.ENCRYPTION_KEY,
      { expiresIn: "12h" }
    )
    setCookie("isNew", "true", {
      req,
      res,
      maxAge: 60 * 60 * 24,
      path: "/",
      domain: process.env.NEXT_PUBLIC_SITE_DOMAIN,
    })
    const encryptData = await make.encrypt(AuthToken)
    setCookie("access_token", encryptData, { req, res, maxAge: 60 * 60 * 12 })

    return res
      .writeHead(301, {
        Location: "/user/new",
      })
      .end()
  }
}