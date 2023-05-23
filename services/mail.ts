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
