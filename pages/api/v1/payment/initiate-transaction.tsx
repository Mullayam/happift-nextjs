// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import https from "https"
import type { NextApiRequest, NextApiResponse } from "next"
import PaytmChecksum from "@/services/paytm/PaytmChecksum"
import { PrismaClient } from "@prisma/client"
import { hasCookie, removeCookies, setCookie } from "cookies-next"

import { PaytmConfig } from "@/config/site"
import make from "@/lib/secure"


const prisma = new PrismaClient()
type txnAmount = {
  value: string
  currency: string
}
type userInfo = {
  custId: any
  email: string
}
type Data = {
  name: string
}
type BodyType = {
  requestType: string
  mid: string
  websiteName: string
  orderId: string
  callbackUrl: string
  txnAmount: txnAmount
  userInfo: userInfo
}
  type PaytmParamsBody = {
    body?: BodyType
    head?: any
  }
type ResponseType = {
  data?: any
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const giftCardId = req.query.cvId as string
  const userId = req.query.userId as string
  const orderId = "OID-" + new Date().getTime()
  var paytmParams: PaytmParamsBody = {}
  if (hasCookie("rfclipro_")) {
    removeCookies("rfclipro_")
  }
  paytmParams.body = {
    requestType: "Payment",
    mid: PaytmConfig.mid,
    websiteName: PaytmConfig.website,
    orderId,
    callbackUrl: PaytmConfig.callbackUrl,
    txnAmount: {
      value: `${req.query.amount}`,
      currency: "INR",
    },
    userInfo: {
      custId: giftCardId,
      email: `${req.query.email}`,
    },
  }

  setCookie(
    "paymentResponse",
    make.encrypt({
      mid: paytmParams.body.mid,
      orderId: paytmParams.body.orderId,
      userInfo: paytmParams.body.userInfo,
      txnAmount: paytmParams.body.txnAmount,
      userId,
      giftCardId,
    }),
    {
      req,
      res,
      maxAge: 60 * 2,
    }
  )
  const checksum = await PaytmChecksum.generateSignature(
    JSON.stringify(paytmParams.body),
    process.env.PAYTM_MERCHANT_KEY
  )
  paytmParams.head = {
    signature: checksum,
  }
  const post_data = JSON.stringify(paytmParams)

  await prisma.payements.create({
    data: {
      orderId,
      userId,
      giftCardId,
      status: "PENDING",
    },
  })
  const queryParams = `mid=${process.env.PAYTM_MERCHANT_ID}&orderId=${paytmParams.body.orderId}`
  const options = {
    hostname:
      process.env.PAYTM_ENVIRONMENT === "PROD"
        ? "securegw.paytm.in"
        : "securegw-stage.paytm.in",
    port: 443,
    path: `/theia/api/v1/initiateTransaction?${queryParams}`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": post_data.length,
    },
  }
  type rspoense = {
    body?: any
    head?: any
  }
  var response: rspoense = {}

  var post_req = https.request(options, function (post_res) {
    post_res.on("data", function (chunk) {
      response = JSON.parse(chunk)
    })
    post_res.on("end", function () {
      const html = `
          <html>
         <head>
            <title>Happift - Payment Page</title>
         </head>
         <body>
            <center>
               <h1>Please do not refresh this page...</h1>
            </center>
            <form method="post" action="https://${options.hostname}/theia/api/v1/showPaymentPage?${queryParams}" name="paytm">
               <table border="1">
                  <tbody>
                     <input type="hidden" name="mid" value="${PaytmConfig.mid}">
                     <input type="hidden" name="orderId" value="${paytmParams.body.orderId}">
                     <input type="hidden" name="txnToken" value="${response.body.txnToken}">
                  </tbody>
               </table>
               </form>
               <script type="text/javascript"> document.paytm.submit(); </script>
         </body>
      </html>`
      res.send(html)
      res.end()
    })
  })
  post_req.write(post_data)
  post_req.end()
}