import crypto from "crypto"

export function generateOTP() {
  const digits = "0123456789"
  let OTP = ""
  for (let i = 0; i < 4; i++) {
    OTP += digits[Math.floor(Math.random() * 10)]
  }
  return OTP
}
export function checkTokenExpiry() {
  const digits = "0123456789"
  let OTP = ""
  for (let i = 0; i < 4; i++) {
    OTP += digits[Math.floor(Math.random() * 10)]
  }
  return OTP
}
export function generateToken() {
  const resetToken = crypto.randomBytes(32).toString("hex")
  const passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex")
  const tokenExpirationTime = Date.now() + 10 * 60 * 1000 // 10 minuts
  return { passwordResetToken, tokenExpirationTime }
}

export function customToken() {
  var buffreValue = new Buffer(64)
  for (var i = 0; i < buffreValue.length; i++) {
    buffreValue[i] = Math.floor(Math.random() * 256)
  }
  var token = buffreValue.toString("base64")
  return token
}

export async function retriveCookie(allCookies: any) {
  let response: {}
  allCookies.map((cookie) => {
    const [cookieName, value] = cookie.split("=")
    if (cookieName === " paymentResponse") {
      return (response = { cookieName, value })
    }
  })
  return await response
}

export function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index)
}
export async function delay(second: number = 1000) {
  return await new Promise((resolve) => setTimeout(resolve, second))
}
