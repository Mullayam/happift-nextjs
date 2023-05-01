import mongoose from "mongoose";





mongoose.set("strictQuery", true)

mongoose.connect(process.env.NEXT_PUBLIC_DATABASE_URL)
export const connect = mongoose.connection

connect.on("connected", () => {
  console.log("DB connection established")
})
connect.on("error", () => {
  console.log("DB connection failed")
})