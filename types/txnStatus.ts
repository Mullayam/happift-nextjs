type responseBodyResultInfo = {
  resultStatus: string
  resultCode: string
  resultMsg: string
}
export type responseBody = {
  body: {
    resultInfo: responseBodyResultInfo
    txnId?: string
    bankTxnId?: string
    orderId?: string
    txnAmount?: string
    txnType?: string
    gatewayName?: string
    bankName?: string
    mid?: "xxxxxxxxxxxxxxxxxxxx"
    paymentMode?: string
    refundAmt?: string
    txnDate?: string
    authRefId?: string
  }
}
