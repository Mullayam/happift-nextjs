/* eslint-disable @next/next/no-img-element */
"use client"

import React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { toast } from "@/hooks/use-toast"
import { setLoader } from "@/redux/slices/loaderSlice"
import { RootState } from "@/redux/store"
import axios from "axios"
import { ChevronLeft } from "lucide-react"
import { useDispatch, useSelector } from "react-redux"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Spinner } from "@/components/spinner"
import { buttonVariants } from "@/components/ui/button"

export default function ForgetPassword(props) {
  const router = useRouter()
  const { isLoading } = useSelector((state: RootState) => state.loader)
  const dispatch = useDispatch()
  const [email, setEmail] = React.useState("")
  async function SendResetPasswordLinkHandler() {
    dispatch(setLoader(true))
    const { data } = await axios.post("/api/auth/reset-password", { email })
    if (data.success) {
      dispatch(setLoader(false))
      toast({
        title: "Check your email",
        description: data.message,
      })
      return router.push("/auth/login")
    } else {
      dispatch(setLoader(false))
      return toast({
        title: "Something went wrong",
        description: data.message,
      })
    }
  }
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      {isLoading && <Spinner />}
      <Link
        href="/auth/login"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-4 top-4 md:left-8 md:top-8"
        )}
      >
        <ChevronLeft className="mr-2 h-4 w-4" />
        Back
      </Link>
      <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
        <a
          href="/"
          className="mb-6 flex items-center text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <Icons.logo />
          Happift
        </a>
        <div className="w-full rounded-lg bg-white p-6 shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md sm:p-8 md:mt-0">
          <h1 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
            Forgot your password?
          </h1>
          <p className="font-light text-gray-500 dark:text-gray-400">
            Don&apos;t fret! Just type in your email and we will send you a code
            to reset your password!
          </p>
          <div className="mt-4 space-y-4 md:space-y-5 lg:mt-5">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                placeholder="your@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex items-start">
              <div className="flex h-5 items-center">
                <input
                  id="terms"
                  aria-describedby="terms"
                  type="checkbox"
                  className="focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="terms"
                  className="font-light text-gray-500 dark:text-gray-300"
                >
                  I accept the{" "}
                  <Link
                    className="text-primary-600 dark:text-primary-500 font-medium hover:underline"
                    href="/n/terms-n-conditions"
                  >
                    Terms and Conditions
                  </Link>
                </label>
              </div>
            </div>
            <button
              disabled={!email}
              type="submit"
              className="focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-orange-400 focus:outline-none focus:ring-4 disabled:bg-gray-500"
              onClick={SendResetPasswordLinkHandler}
            >
              Reset password
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}