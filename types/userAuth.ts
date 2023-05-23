import { ROLE, STATUS } from "@prisma/client"

export type AuthenticationDataType = {
  [key: string]: string
  firstName: string
  lastName?: string
  avatar?: string
  email: string
  role: ROLE
  status: STATUS
}
