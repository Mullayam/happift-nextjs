/* eslint-disable @next/next/no-img-element */

import React from "react"
import Head from "next/head"
import { toast } from "@/hooks/use-toast"
import { useAuth } from "@/hooks/useCustomHooks"
import axios from "axios"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import UserLayout from "./layout"

export default function AccountSettings(props) {
  const { setLoader, user } = useAuth()
  const [payoutFilds, setPayoutFilds] = React.useState({
    vpa: "",
    name: "",
    userId: user._id,
  })
  const handlePayoutFieldsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPayoutFilds({ ...payoutFilds, [e.target.id]: e.target.value })
  }
  const [disabled, setDisabled] = React.useState(false)
  const validateVPA = async () => {
    setLoader(true)
    if (payoutFilds.vpa === "" && payoutFilds.name === "") {
      setLoader(false)
      return toast({
        title: "All Fields are Required",
        variant: "destructive",
      })
    }
    const { data } = await axios.post("/api/v1/handle/validate-vpa", {
      payoutFilds,
    })
    setLoader(false)
    setDisabled(true)
    return toast({
      title: data.message,
      variant: "default",
    })
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
        <section className="bg-white dark:bg-gray-900 ">
          <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16">
            <div className="mx-auto px-4 text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
              <small className="text-red-500">
                Once Your UPI id is verified you cannot change it. Please Enter
                it Correctly
              </small>
              <div className="text-white-500 mt-8 flex flex-wrap items-center justify-center sm:justify-between">
                <div className="mt-14 rounded-lg p-4 align-middle dark:border-gray-700">
                  <div className="m-2 grid w-full max-w-sm items-center gap-1.5">
                    <p className="text-muted-foreground text-sm">
                      Enter your UPI ID<span className="text-red-500"> *</span>
                    </p>
                    <Input
                      defaultValue={payoutFilds.vpa}
                      type="email"
                      id="vpa"
                      placeholder="UPI ID"
                    />
                  </div>
                  <div className="m-2 grid w-full max-w-sm items-center gap-1.5">
                    <p className="text-muted-foreground text-sm">
                      Enter your Name as per on VPA/UPI for verification
                      <span className="text-red-500"> *</span>
                    </p>
                    <Input
                      onChange={handlePayoutFieldsChange}
                      defaultValue={payoutFilds.name}
                      type="text"
                      id="name"
                      placeholder="Account Holder Name"
                    />
                  </div>
                  <Button
                    disabled={disabled}
                    onClick={validateVPA}
                    variant="destructive"
                    className="disabled:cursor-not-allowed disabled:bg-slate-400"
                  >
                    Verify UPI ID
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </UserLayout>
  )
}
