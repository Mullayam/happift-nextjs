/* eslint-disable @next/next/no-img-element */
"use client"

import React from "react"
import Image from "next/image"
import { useRouter } from "next/router"
import { delay } from "@/helpers/functions"
import { useAuth } from "@/hooks/useCustomHooks"
import Paytm from "@/public/Paytm_Logo.jpg"
import logo from "@/public/favicon.ico"
import { getCookie, hasCookie } from "cookies-next"
import { ChevronLeft, ChevronRight } from "lucide-react"

import make from "@/lib/secure"
import { Icons } from "@/components/icons"
import { Layout } from "@/components/layout"

export default function ConfirmPurchase(props) {
  const router = useRouter()
  const { user, setLoader, extraData, setExtraData } = useAuth()
  const [checked, setChecked] = React.useState(true)

  const Subtotal = parseInt(extraData.quantity) * parseInt(extraData.basePrice)
  const Discount = (Subtotal * 10) / 100
  const amount = Subtotal - Discount
  function handlePlaceOrder() {
    router.push({
      pathname: "/api/v1/payment/initiate-transaction",
      query: {
        amount,
        quantity: extraData.quantity,
        cvId: extraData.cvId,
        email: extraData.email,
        userId: user?._id,
      },
    })
  }

  React.useEffect(() => {
    setLoader(true)
    delay(3000)
    if (hasCookie("rfclipro_")) {
      setExtraData(JSON.parse(make.decrypt(getCookie("rfclipro_"))))
    } else {
      router.push("/n/gift-cards")
    }

    setLoader(false)
  }, [])
  return (
    <Layout>
      <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
        <span
          onClick={() => router.back()}
          className="cursor-pointer rounded-lg border border-slate-300 bg-gray-400 p-2 text-2xl font-bold text-gray-800"
        >
          <ChevronLeft />
        </span>
        <div className="mt-4 py-2 text-xs sm:ml-auto sm:mt-0 sm:text-base">
          <div className="relative">
            <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
              <li className="flex cursor-pointer items-center space-x-3 text-left sm:space-x-4">
                <a
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700"
                  href="#"
                >
                  <Icons.success />
                </a>
                <span
                  onClick={() => router.back()}
                  className="font-semibold text-gray-900"
                >
                  Processing
                </span>
              </li>
              <ChevronRight />
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <a
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2"
                  href="#"
                >
                  2
                </a>
                <span className="font-semibold text-gray-900">Confimation</span>
              </li>
              <ChevronRight />
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <a
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white"
                  href="#"
                >
                  3
                </a>
                <span className="font-semibold text-gray-500">Payment</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid dark:bg-slate-800 sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div className="px-4 pt-8">
          <p className="text-xl font-medium">Order Summary</p>
          <p className="text-gray-400">
            Check your items. And select a suitable shipping method.
          </p>
          <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 dark:bg-slate-800  dark:text-white  sm:px-6">
            {/* cards descriptons */}
            <div className="flex flex-col rounded-lg  bg-white dark:bg-slate-800  dark:text-white  sm:flex-row">
              <Image
                className="m-2 w-fit rounded-md border object-cover object-center"
                src={extraData.image}
                alt=""
                width={124}
                height={20}
              />
              <div className="flex w-full flex-col p-4">
                <span className="font-semibold">{extraData.cardName}</span>
                <span className="float-right text-gray-400">
                  Worth Price : {extraData.basePrice}
                </span>
                <p className="text-lg font-bold">
                  Buy Price : {extraData.amount}
                </p>
              </div>
            </div>
          </div>

          <p className="mt-8 text-lg font-medium">Payment Methods</p>
          <div className="relative mt-4 dark:bg-slate-700">
            <input
              className="peer hidden"
              id="radio_2"
              type="radio"
              name="paytm"
              defaultChecked={checked}
            />
            <span className="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-gray-700"></span>
            <label
              className="flex cursor-pointer select-none rounded-lg border border-gray-300 p-4 peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50"
              htmlFor="radio_2"
            >
              <Image
                className="w-24 object-contain"
                src={Paytm}
                alt=""
                onClick={() => setChecked(!checked)}
              />
              <div className="ml-5">
                <span className="mt-2 font-semibold dark:text-black ">
                  PayTM
                </span>
                <p className="text-sm leading-6 text-slate-500">
                  Delivery: Email/Instant
                </p>
              </div>
            </label>
          </div>
          <div className="relative mt-4 dark:bg-slate-700">
            <input
              className="peer hidden"
              id="wallet"
              type="radio"
              name="wallet"
              defaultChecked={!checked}
            />
            <span className="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-gray-700"></span>
            <label
              className="flex cursor-pointer select-none rounded-lg border border-gray-300 p-4 peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50"
              htmlFor="radio_2"
            >
              <Image
                className="w-12 object-contain"
                src={logo}
                alt="wallet"
                aria-disabled="false"
                aria-readonly="true"
                onClick={() => setChecked(!checked)}
              />
              <div className="ml-5">
                <span className="mt-2 font-semibold dark:text-black ">
                  Wallet
                </span>
                <p className="text-sm leading-6 text-slate-500">
                  Delivery: Email/Instant
                </p>
              </div>
            </label>
          </div>
        </div>
        <div className="mt-10 bg-gray-50 px-4 pt-8 dark:bg-slate-800  lg:mt-0">
          <p className="text-xl font-medium">Payment Details</p>
          <p className="text-gray-400">
            Complete your order by providing your payment details.
          </p>
          <div className="">
            <label
              htmlFor="email"
              className="mb-2 mt-4 block text-sm font-medium"
            >
              Email
            </label>

            <div className="relative">
              <input
                type="text"
                id="card-holder"
                name="card-holder"
                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm   shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                defaultValue={extraData?.email}
                disabled={true}
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                  />
                </svg>
              </div>
            </div>

            <div className="mt-6 border-y py-2  ">
              <div className="flex items-center justify-between ">
                <p className="text-sm font-medium text-gray-900 dark:text-stone-500">
                  Quantity
                </p>
                <p className="font-semibold text-indigo-900 dark:text-green-200">
                  {extraData.quantity}
                </p>
              </div>
              <div className="flex items-center justify-between ">
                <p className="text-sm font-medium text-gray-900 dark:text-stone-500">
                  Subtotal
                </p>
                <p className="font-semibold text-indigo-900 dark:text-green-200">
                  Rs {Subtotal}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900 dark:text-stone-500">
                  Charges
                </p>
                <p className="font-semibold text-green-700">Rs 0</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900 dark:text-stone-500">
                  Discount
                </p>
                <p className="font-semibold text-red-400"> - Rs {Discount}</p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Total
              </p>
              <p className="text-2xl font-semibold text-green-600">
                Rs.{amount}
              </p>
            </div>
          </div>
          <button
            onClick={handlePlaceOrder}
            className="mb-8 mt-4 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white"
          >
            Place Order
          </button>
        </div>
      </div>
    </Layout>
  )
}