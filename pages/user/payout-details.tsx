/* eslint-disable @next/next/no-img-element */
import Head from "next/head"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import UserLayout from "./layout"

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
        <section className="bg-white dark:bg-gray-900 ">
          <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16">
            <div className="mx-auto px-4 text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
              <div className="text-white-500 mt-8 flex flex-wrap items-center justify-center sm:justify-between">
                <div className="mt-14 rounded-lg p-4 align-middle dark:border-gray-700">
                  <div className="m-2 grid w-full max-w-sm items-center gap-1.5">
                    <p className="text-muted-foreground text-sm">
                      Enter your UPI ID
                    </p>
                    <Input type="email" id="email" placeholder="UPI ID" />
                  </div>
                  <div className="m-2 grid w-full max-w-sm items-center gap-1.5">
                    <p className="text-muted-foreground text-sm">
                      Enter your Name as per on VPA/UPI for verification
                    </p>
                    <Input type="text" placeholder="Account Holder Name" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </UserLayout>
  )
}
