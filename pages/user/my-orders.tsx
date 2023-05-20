/* eslint-disable @next/next/no-img-element */
import Head from "next/head"

import UserLayout from "./layout"

export default function AccountSettings(props) {
  return (
    <UserLayout>
      <Head>
        <title>My Orders - Happift</title>
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
          <div className="mb-4 flex h-48 items-center justify-center rounded bg-gray-50 dark:bg-gray-800">
            <div className="mb-4 flex h-10 items-center justify-center rounded bg-gray-50 dark:bg-gray-800">
              <h1 className="text-2xl font-semibold"> You have no Orders</h1>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  )
}
