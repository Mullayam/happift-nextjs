import type { NextApiRequest, NextApiResponse } from "next"

type Data = {
  success: boolean
  message?: string
  content?: any
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    success: false,
    message: "We sent you a login link. Be sure to check your spam too.",
  })
}
