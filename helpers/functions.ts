import crypto from "crypto"
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
})

/*
Enabale this code for using email templates in your project

const handlebarOptions = {
  viewEngine: {
    partialsDir: path.resolve("path to templates"),
    defaultLayout: false,
  },
  viewPath: path.resolve(".path to templates"),
}
transporter.use("compile", hbs(handlebarOptions))

*/

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
export async function SendEmail(sendTo, subject, body, html) {
  if (!sendTo) sendTo = "mullayam06@gmail.com"
  if (!subject) subject = "TestMails"
  if (!body) body = "Hello world?"
  if (!html) html = "<a>Hey</a>"

  return await transporter.sendMail({
    from: `NoReply-Happift <su@enjoys.in>`, // sender address
    to: sendTo, // list of receivers
    subject: subject, // Subject line
    text: body, // plain text body
    html: html, // html body
  })
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
