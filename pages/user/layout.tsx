import React, { ReactNode, Suspense } from "react";



import OfferBbanner from "@/components/offer-banner"
import "./layout.module.css"
import { SiteFooter } from "@/components/site-footer"
import UserLayoutSidebar from "@/components/user-layout-parts/sidebar"
import UserLayoutLoading from "./loading"

export default function UserLayout({ children }) {
  return (
    <>
      <UserLayoutSidebar />
      <OfferBbanner />
      <Suspense fallback={<UserLayoutLoading />}>{children}</Suspense>
      <SiteFooter />
    </>
  )
}