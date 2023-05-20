import React, { Suspense } from "react"
import { DecryptData } from "@/helpers/decryptTokenData"
import { setAuth, setUserData } from "@/redux/slices/isAuthSlice"
import { getCookie, hasCookie } from "cookies-next"
import { useDispatch } from "react-redux"

import make from "@/lib/secure"
// import { GetStaticProps, InferGetStaticPropsType } from "next"

import { SiteFooter } from "@/components/site-footer"
import { RightClickMenu } from "@/components/user-layout-parts/ContextMenu"
import UserLayoutSidebar from "@/components/user-layout-parts/sidebar"
import UserLayoutLoading from "./loading"

export default function UserLayout({ children }) {
  const dispatch = useDispatch()
  React.useEffect(() => {
    async function getToken() {
      if (hasCookie("access_token")) {
        const data = getCookie("access_token")
        const DecryptToken = await make.decrypt(data)
        const payload = await DecryptData(`${DecryptToken}`)
        dispatch(setAuth(true))
        dispatch(setUserData(payload))
      }
    }
    getToken()
    // t()
  }, [])
  return (
    <>
      <UserLayoutSidebar />
      <RightClickMenu>
        <Suspense fallback={<UserLayoutLoading />}>{children}</Suspense>
      </RightClickMenu>
    </>
  )
}
// export const getStaticProps: GetStaticProps = async (context) => {
//   return {
//     props: {
//       context,
//     },
//   }
// }
