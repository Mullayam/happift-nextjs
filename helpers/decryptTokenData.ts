import jwt from "jsonwebtoken"

export async function DecryptData(token: string): Promise<any> {
  return await jwt.decode(token, process.env.ENCRYPTION_KEY)
}
