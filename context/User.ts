import { createContext } from "react"
import { Dispatch } from "@reduxjs/toolkit"

import { AuthenticationDataType } from "@/types/userAuth"

type ExtraDatra = {
  [key: string]: string
}

export interface MyContext {
  user: AuthenticationDataType
  loader: boolean
  extraData: ExtraDatra
  kycDocImg: boolean
  setUser: any
  setExtraData: any
  setLoader: any
  setKycDocImg: any
}
const UserContext = createContext<MyContext | null>(null)
export default UserContext
