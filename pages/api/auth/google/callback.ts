import { NextApiRequest, NextApiResponse } from "next"
import { VerifyTokenForPayload } from "@/services/oauth-google"
import { PrismaClient, ROLE } from "@prisma/client"
import { setCookie } from "cookies-next"
import jwt from "jsonwebtoken"

import make from "@/lib/secure"

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
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.url.startsWith("/api/auth/google/callback")) {
    let q = url.parse(req.url, true).query
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
    const status = payload.email_verified ? "E_0x0045" : "G_0x0000"
    if (user) {
      const AuthToken = jwt.sign(
        {
          id: user.id,
          name: user.firstName,
          email: user.email,
          status,
          role: user.role,
        },
        process.env.ENCRYPTION_KEY,
        { expiresIn: "1h" }
      )
      setCookie("isNew", "true", {
        req,
        res,
        maxAge: 60 * 60 * 24,
        path: "/",
        domain: process.env.NEXT_PUBLIC_SITE_DOMAIN,
      })
      const encryptData = await make.encrypt(AuthToken)
      setCookie("access_token", encryptData, { req, res, maxAge: 60 * 60 * 24 })

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
          status,
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
          id: user.id,
          name: user.firstName,
          email: user.email,
          status,
          role: user.role,
        },
        process.env.ENCRYPTION_KEY,
        { expiresIn: "1h" }
      )
      setCookie("isNew", "true", {
        req,
        res,
        maxAge: 60 * 60 * 24,
        path: "/",
        domain: process.env.NEXT_PUBLIC_SITE_DOMAIN,
      })
      const encryptData = await make.encrypt(AuthToken)
      setCookie("access_token", encryptData, { req, res, maxAge: 60 * 60 * 24 })

      return res
        .writeHead(301, {
          Location: "/user/new",
        })
        .end()
    }
  } else {
    return res.status(200).json({
      success: false,
      message: "Invalid URL",
    })
  }
}
