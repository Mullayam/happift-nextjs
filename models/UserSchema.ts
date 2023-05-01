const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    default: "",
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    default: "",
  },
  role: {
    type: String,
    default: "3026",
  },
  permissions: {
    type: String,
    default: "555",
  },
  status: {
    type: String,
    default: "0x0000",
  },
})
const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel
