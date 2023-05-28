// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import https from "https";
import type { NextApiRequest, NextApiResponse } from "next";
import PaytmChecksum from "@/services/paytm/PaytmChecksum";
import { Prisma, PrismaClient } from "@prisma/client";



import { responseBody } from "@/types/txnStatus"

const prisma = new PrismaClient()

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
  let status
  var post_req = https.request(options, function (post_res) {
    post_res.on("data", function (chunk) {
      response = JSON.parse(chunk)
    })
    post_res.on("end", async function () {
      if (response.body.resultInfo.resultCode === "01") {
        await prisma.giftCards.update({
          where: {
            id: decodedData.giftCardId,
          },
          data: {
            isAvailable: false,
          },
        })
        status = "SUCCESS"
      } else {
        status = response.body.resultInfo.resultStatus.split("_")[1]
      }
      await prisma.payements.updateMany({
        where: {
          AND: [
            { userId: decodedData.userId },
            { giftCardId: decodedData.giftCardId },
          ],
        },
        data: {
          paymentDetails: response.body,
          status,
        },
      })
      res.status(200).json({ body: response.body })
      res.end()
    })
  })

  post_req.write(post_data)
  post_req.end()
}