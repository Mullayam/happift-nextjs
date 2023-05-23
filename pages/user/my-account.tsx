/* eslint-disable @next/next/no-img-element */

import React from "react"
import Head from "next/head"

import OfferBbanner from "@/components/offer-banner"
import DashboardInfoCard from "@/components/user-layout-parts/DahsboardCard"
import OfferPopup from "@/components/user-layout-parts/OfferPopup"
import WarningPopup from "@/components/user-layout-parts/warning"
import UserLayout from "./layout"

export default function MyAccount(props) {
  const [showOfferPopup, ssetShowOfferPopup] = React.useState(false)
  return (
    <UserLayout>
      <Head>
        <title>Dashboard - Happift</title>
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
          {showOfferPopup && <OfferBbanner />}
          {showOfferPopup && <OfferPopup />}

          <div className="mb-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <DashboardInfoCard
              title={"All Purchase"}
              amount={"1550"}
              description={"+20.1% from last month"}
            />
            <DashboardInfoCard
              title={"Today Purchase"}
              amount={"250"}
              description={"+20.1% from last month"}
            />
            <DashboardInfoCard
              title={"Last Purchase"}
              amount={"250"}
              description={"+20.1% from last month"}
            />
            <DashboardInfoCard
              title={"In Wallet"}
              amount={"250"}
              description={" "}
            />
          </div>
          <div className="mb-4 flex h-48 animate-pulse items-center justify-center rounded bg-gray-50 dark:bg-gray-800">
            {/* <WarningPopup /> */}
            <h1 className="text-5xl font-extrabold  ">Comming Soon</h1>
          </div>

          <div className="mb-4 grid grid-cols-2 gap-4">
            <div className="flex h-28 animate-pulse items-center justify-center rounded bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500"> </p>
            </div>
            <div className="flex h-28  animate-pulse items-center justify-center rounded bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500"> </p>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  )
}
