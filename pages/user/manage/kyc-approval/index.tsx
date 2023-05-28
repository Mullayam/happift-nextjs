import React from "react"
import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import Head from "next/head"
import { useAuth } from "@/hooks/useCustomHooks"
import axios from "axios"

import { KYC_DOCS } from "@/types/all"
import { columns } from "@/components/user-layout-parts/table/columns"
import { DataTable } from "@/components/user-layout-parts/table/dataTable"
import UserLayout from "../../layout"

export default function KYC_DOCS_Listing(props) {
  const [kycDocs, setKycDocs] = React.useState<KYC_DOCS[]>([])
  async function GetAllKycDocsForApproval() {
    const { data } = await axios.get("/api/v1/handle/kyc-docs")
    setKycDocs(data.content)
  }

  React.useEffect(() => {
    GetAllKycDocsForApproval()
  }, [])
  return (
    <UserLayout>
      <Head>
        <title>KYC DOCS for Approval - Happift</title>
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
          <DataTable columns={columns} data={kycDocs} />
        </div>
      </div>
    </UserLayout>
  )
}
