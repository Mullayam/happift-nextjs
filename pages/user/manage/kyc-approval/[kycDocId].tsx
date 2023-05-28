/* eslint-disable @next/next/no-img-element */

import React from "react"
import { InferGetServerSidePropsType } from "next"
import Head from "next/head"
import { useAuth } from "@/hooks/useCustomHooks"
import axios from "axios"
import { ChevronsUpDown, Plus, X } from "lucide-react"

import ImageSkelton from "@/components/ImageSkelton"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import UserLayout from "../../layout"

export default function KYCDetailsOfUser(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const { user } = useAuth()
  const [UserKycDetails] = props.response.content
  const [isOpen, setIsOpen] = React.useState(false)
  const [currentStatus, setCurrentStatus] = React.useState(
    UserKycDetails?.status || "PENDING"
  )
  const handleChangeStatus = async (status) => {
    let role
    if (status === "PENDING") {
      role = "U_0012"
    }
    if (status === "VERIFIED") {
      role = "C_8256"
    }
    if (status === "DECLINED") {
      role = "K_3566"
    }
    await axios.put("/api/v1/handle/kyc-docs", {
      status,
      id: UserKycDetails.id,
      userId: user?._id,
      role,
    })
    setCurrentStatus(status)
  }

  return (
    <UserLayout>
      <Head>
        <title>KYC Details - Happift</title>
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
          <div className=" flex h-14 w-full items-center justify-between  rounded bg-gray-50 px-5 dark:bg-gray-800">
            <h1 className="inline-flex text-2xl  font-bold">
              KYC IMAGES of {UserKycDetails?.User?.firstName}
            </h1>
            <h1 className="inline-flex text-2xl font-bold">
              <span className="mx-2 hidden cursor-default md:block">
                Current Status
              </span>
              <Icons.badge
                className={
                  currentStatus !== "VERIFIED"
                    ? "bg-red-300 text-red-800"
                    : "bg-green-300 text-green-800"
                }
              >
                {currentStatus}
              </Icons.badge>
            </h1>
          </div>
        </div>
        <div className="rounded-lg p-4 dark:border-gray-700">
          <div className="mb-4 flex h-fit  items-center justify-center rounded bg-gray-50 p-4 dark:bg-gray-800">
            <div className="grid grid-cols-1 items-center justify-center gap-10 md:grid-cols-3  ">
              <ImageSkelton src={UserKycDetails?.id_proof} />
              <ImageSkelton src={UserKycDetails?.pancard} />
              <ImageSkelton src={UserKycDetails?.selfie} />
            </div>
          </div>
        </div>
        <div className="rounded-lg p-4 dark:border-gray-700">
          <div className="mb-4 flex h-fit  items-center justify-center rounded bg-gray-50 p-4 dark:bg-gray-800">
            <Collapsible
              open={isOpen}
              onOpenChange={setIsOpen}
              className="w-fit space-y-2"
            >
              <div className="flex items-center justify-between space-x-4 px-4">
                <h1 className="inline-flex text-2xl font-bold">
                  <span
                    className="mx-2 hidden cursor-pointer md:block"
                    onClick={handleChangeStatus}
                  >
                    Change Status
                  </span>
                  <Icons.badge
                    className={
                      currentStatus !== "VERIFIED"
                        ? "bg-red-300 text-red-800"
                        : "bg-green-300 text-green-800"
                    }
                  >
                    {currentStatus}
                  </Icons.badge>
                </h1>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="sm" className="w-9 p-0">
                    <ChevronsUpDown className="h-4 w-4" />
                  </Button>
                </CollapsibleTrigger>
              </div>

              <CollapsibleContent className="cursor-pointer space-y-2">
                <div className="rounded-md border px-4 py-3 font-mono text-sm">
                  <span onClick={() => handleChangeStatus("DECLINED")}>
                    DECLINED
                  </span>
                </div>
                <div className="rounded-md border px-4 py-3 font-mono text-sm">
                  <span onClick={() => handleChangeStatus("VERIFIED")}>
                    VERIFIED
                  </span>
                </div>
                <div className="rounded-md border px-4 py-3 font-mono text-sm">
                  <span onClick={() => handleChangeStatus("PENDING")}>
                    PENDING
                  </span>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </div>
    </UserLayout>
  )
}
export async function getServerSideProps(context) {
  const docsImage = await fetch(
    process.env.NEXT_PUBLIC_SITE_DOMAIN +
      "/api/v1/handle/kyc-docs?kycDocId=" +
      context.params.kycDocId
  )
  const response = await docsImage.json()

  return {
    props: {
      response,
    },
  }
}
