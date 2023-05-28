/* eslint-disable @next/next/no-img-element */

import { Suspense, useState } from "react"
import Head from "next/head"

import { CustomTab } from "@/components/user-layout-parts/Tabs"
import UserLayout from "../../layout"

export default function AccountSettings(props) {
  const [kycDocs, setKycDocs] = useState(true)
  const ImageSkelton = () => {
    return (
      <div
        role="status"
        className="wm-40 flex h-40 animate-pulse  items-center justify-center rounded-lg bg-gray-300 dark:bg-gray-700"
      ></div>
    )
  }
  return (
    <UserLayout>
      <Head>
        <title>Account Settings - Happift</title>
        <meta
          name="description"
          content="About  | Send Us Your expeience feedback with our site "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Sell Gift Cards, Amazon Gift Card: Happift"
        />
      </Head>
      <div className="p-4 sm:ml-64">
        <div className="mt-14 rounded-lg  p-4 dark:border-gray-700">
          <h1>This feature is comming soon</h1>
        </div>
      </div>
    </UserLayout>
  )
}
