"use client";

import React, { Suspense } from "react"
import { useRouter } from "next/router"
import { DecryptData } from "@/helpers/decryptTokenData"
import { setAuth, setUserData } from "@/redux/slices/isAuthSlice"
import { getCookie, hasCookie } from "cookies-next"
import { CookiesProvider } from "react-cookie"
import { useDispatch, useSelector } from "react-redux"

import { SiteHeader } from "@/components/site-header"
import make from "../lib/secure"
import HeaderLoading from "./header-skelton"
// import { StoreWrapper } from "../redux/store"
import { SiteFooter1 } from "./site-footer"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  const dispatch = useDispatch()
  const router = useRouter()
  async function t() {
    router.push({
      pathname: "/auth/login",
      query: {
        callbackURL: router.pathname,
      },
    })
  }
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
      <Suspense fallback={<HeaderLoading />}>
        <CookiesProvider>
          <SiteHeader />
        </CookiesProvider>
      </Suspense>
      <main>{children}</main>
      <SiteFooter1 />
    </>
  )
}