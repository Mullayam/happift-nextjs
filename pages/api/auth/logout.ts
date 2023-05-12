import type { NextApiRequest, NextApiResponse } from "next"

const url = require("url")

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.url.startsWith("/api/auth/logout?r_ct[0]")) {
    let q = url.parse(req.url, true).query

    const RevokeAccessToken = await fetch(
      `https://oauth2.googleapis.com/revoke?token?${q.r_ct[0]}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
    return res.status(200).json({
      success: false,
      message: RevokeAccessToken,
    })
  }
}
