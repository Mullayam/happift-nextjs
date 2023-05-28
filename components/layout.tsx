"use client";

import React from "react";
import { useRouter } from "next/router";
import { DecryptData } from "@/helpers/decryptTokenData"
import { useAuth } from "@/hooks/useCustomHooks"
import { setAuth, setUserData } from "@/redux/slices/isAuthSlice"
import { getCookie, hasCookie, setCookie } from "cookies-next"
import { useDispatch } from "react-redux"

import { SiteHeader } from "@/components/site-header"
import make from "../lib/secure"
// import { StoreWrapper } from "../redux/store"
import { SiteFooter1 } from "./site-footer"
import { Spinner } from "./spinner"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  const dispatch = useDispatch()
  const { loader } = useAuth()
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
        setCookie("allowed", payload.status)
      }
    }

    getToken()
  }, [])

  return (
    <>
      {loader && <Spinner />}
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter1 />
    </>
  )
}