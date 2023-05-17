import React, { Suspense } from "react"

// import { GetStaticProps, InferGetStaticPropsType } from "next"

import { SiteFooter } from "@/components/site-footer"
import UserLayoutSidebar from "@/components/user-layout-parts/sidebar"
import UserLayoutLoading from "./loading"

export default function UserLayout({ children }) {
  return (
    <>
      <UserLayoutSidebar />
      <Suspense fallback={<UserLayoutLoading />}>{children}</Suspense>
      <SiteFooter />
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
