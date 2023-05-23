import { useContext, useEffect, useState } from "react"
import { DecryptData } from "@/helpers/decryptTokenData"
import { getCookie, hasCookie } from "cookies-next"

import make from "@/lib/secure"
import UserContext from "../context/User"

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loader, setLoader] = useState(false)
  const [kycDocImg, setKycDocImg] = useState(false)
  const [extraData, setExtraData] = useState({})
  useEffect(() => {
    async function getToken() {
      if (hasCookie("access_token")) {
        const data = getCookie("access_token")
        const DecryptToken = await make.decrypt(data)
        const payload = await DecryptData(`${DecryptToken}`)
        setUser(payload)
      }
    }
    getToken()
  }, [])

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loader,
        setLoader,
        kycDocImg,
        setKycDocImg,
        extraData,
        setExtraData,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

// function to extract Information returned/updated context.
export const useAuth = () => useContext(UserContext)
