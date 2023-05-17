// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import https from "https"
import type { NextApiRequest, NextApiResponse } from "next"
import PaytmChecksum from "@/services/paytm/PaytmChecksum"
import { getCookie, hasCookie } from "cookies-next"

import { responseBody } from "@/types/txnStatus"
import make from "@/lib/secure"

type Data = {
  body: any
}

type PaytmParamsBody = {
  body?: any
  head?: any
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const decodedData = req.body
  const paytmParams: PaytmParamsBody = {}
  paytmParams.body = {
    mid: decodedData.mid,
    orderId: decodedData.orderId,
  }

  const checksum = await PaytmChecksum.generateSignature(
    JSON.stringify(paytmParams.body),
    process.env.PAYTM_MERCHANT_KEY
  )

  paytmParams.head = {
    /* put generated checksum value here */
    signature: checksum,
  }
  const post_data = JSON.stringify(paytmParams)
  var options = {
    hostname:
      process.env.PAYTM_ENVIRONMENT === "PROD"
        ? "securegw.paytm.in"
        : "securegw-stage.paytm.in",

    port: 443,
    path: "/v3/order/status",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": post_data.length,
    },
  }
  // Set up the request
  var response: responseBody

  var post_req = https.request(options, function (post_res) {
    post_res.on("data", function (chunk) {
      response = JSON.parse(chunk)
    })
    post_res.on("end", function () {
      // insert to the database   console.log(response.body)
      res.status(200).json({ body: response.body })
      res.end()
    })
  })

  post_req.write(post_data)
  post_req.end()
}
