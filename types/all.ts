import { PaymentStatus } from "@prisma/client"

type KYC_DOCS_User = {
  email: string
  firstName: string
}
export interface KYC_DOCS {
  User: KYC_DOCS_User
  id: string
  id_proof: string
  pancard: string
  selfie: string
  status: PaymentStatus
}
