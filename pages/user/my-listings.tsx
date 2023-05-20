/* eslint-disable @next/next/no-img-element */
import Head from "next/head";



import { CustomScrollArea } from "@/components/user-layout-parts/ScrollArea"
import UserLayout from "./layout"


export default function AccountSettings(props) {
  const lsitings = false
  const status = false
  const color = status
    ? "bg-green-200  text-green-800 dark:bg-green-200 dark:text-green-800"
    : "bg-red-200  text-red-800 dark:bg-red-200 dark:text-red-700"
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
          <div className="mb-4 grid grid-cols-1 gap-4">
            <div className="mb-4 flex h-10 items-center justify-center rounded bg-gray-50 dark:bg-gray-800">
              <h1 className="text-2xl font-semibold"> My Listings</h1>
            </div>
            {lsitings ? (
              <CustomScrollArea>
                <div className="mb-4   h-fit rounded bg-gray-50 p-2 dark:bg-slate-800">
                  <div className="mb-4 flex h-10 items-center justify-center rounded bg-gray-50 dark:bg-gray-800">
                    <h1 className="text-2xl font-semibold"> Flipkart</h1>
                  </div>
                  <div className="mb-4 grid grid-cols-2 gap-4">
                    <div className="flex h-fit items-center justify-center rounded bg-gray-100 dark:bg-slate-700">
                      <div className="grid gap-2 p-4">
                        <div className="grid grid-cols-3 items-center gap-2">
                          Listing Id
                          <span className="col-span-2 ">#58083</span>
                        </div>
                        <div className="grid grid-cols-3 items-center gap-2">
                          Listing Date
                          <span className="col-span-2 ">#58083</span>
                        </div>
                        <div className="grid grid-cols-3 items-center gap-2">
                          Code
                          <span className="col-span-2 ">#58083</span>
                        </div>
                        <div className="grid grid-cols-3 items-center gap-2">
                          Pin
                          <span className="col-span-1">#58083</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex h-fit items-center justify-center rounded bg-gray-100 dark:bg-slate-700">
                      <div className="grid gap-2 p-4">
                        <div className="grid grid-cols-3 items-center gap-2">
                          Balance
                          <span className="col-span-1">#58083</span>
                        </div>
                        <div className="grid grid-cols-3 items-center gap-2">
                          Expiry
                          <span className="col-span-1">#58083</span>
                        </div>
                        <div className="grid grid-cols-3 items-center gap-2">
                          Payout
                          <span className="col-span-1 ">#58083</span>
                        </div>
                        <div className="grid grid-cols-3 items-center gap-2">
                          Status
                          <span className="col-span-1">
                            <div
                              id="dropdown-cta"
                              className="w-fit rounded-lg   bg-blue-100  dark:bg-blue-500"
                              role="alert"
                            >
                              <span
                                className={`text-md inline-flex rounded px-2.5 py-0.5 font-semibold ${color}`}
                              >
                                Pending
                              </span>
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CustomScrollArea>
            ): <div className="mb-4 flex h-48 items-center justify-center rounded bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-white">You have No Listing yet </p>
          </div>}
          </div>

          {/* <div className="mb-4 grid grid-cols-2 gap-4">
            <div className="flex h-28 items-center justify-center rounded bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500"> </p>
            </div>
            <div className="flex h-28 items-center justify-center rounded bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500"> </p>
            </div>
            <div className="flex h-28 items-center justify-center rounded bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500"> </p>
            </div>
            <div className="flex h-28 items-center justify-center rounded bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500"> </p>
            </div>
          </div>
          <div className="mb-4 flex h-48 items-center justify-center rounded bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500"> </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex h-28 items-center justify-center rounded bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500"> </p>
            </div>
            <div className="flex h-28 items-center justify-center rounded bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500"> </p>
            </div>
            <div className="flex h-28 items-center justify-center rounded bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500"> </p>
            </div>
            <div className="flex h-28 items-center justify-center rounded bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500"> </p>
            </div>
          </div> */}
        </div>
      </div>
    </UserLayout>
  )
}