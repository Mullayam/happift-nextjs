import { Suspense } from "react"
import Loading from "@/pages/loading"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter1 } from "./site-footer"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <SiteHeader />
      </Suspense>
      <main>{children}</main>
      <SiteFooter1 />
    </>
  )
}
