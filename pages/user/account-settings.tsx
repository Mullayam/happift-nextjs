/* eslint-disable @next/next/no-img-element */

import Head from "next/head"

import { CustomTab } from "@/components/user-layout-parts/Tabs"
import UserLayout from "./layout"

// const DynamicHeader = dynamic(() => import("../components/header"), {
//   loading: () => <p>Loading...</p>,
// })

export default function AccountSettings(props) {
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
          <CustomTab />
        </div>
      </div>
    </UserLayout>
  )
}