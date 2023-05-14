import { ROLE, STATUS } from "@prisma/client"

export type AuthenticationDataType = {
  firstName: string
  lastName?: string
  avatar?: string
  email: string
  role: ROLE
  status: STATUS
}
