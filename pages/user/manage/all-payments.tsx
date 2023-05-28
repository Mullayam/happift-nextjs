import React from "react"
import Head from "next/head"

import { columns } from "@/components/user-layout-parts/table/columns"
import { DataTable } from "@/components/user-layout-parts/table/dataTable"
import UserLayout from "../layout"

export default function AccountSettings(props) {
  return (
    <UserLayout>
      <Head>
        <title>All Payments - Happift</title>
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
          <DataTable columns={columns} data={[]} />
        </div>
      </div>
    </UserLayout>
  )
}
