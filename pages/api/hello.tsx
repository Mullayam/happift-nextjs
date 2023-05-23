// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"

type Data = {
  name: string
  author: string
  github: string
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    name: "John Doe",
    author: "ENJOYS - ENIGMA",
    github: "https://github.com/Mullayam/happift-nextjs",
    message: "API is Operational",
  })
}
