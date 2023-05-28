/* eslint-disable @next/next/no-img-element */

import { url } from "inspector"
import React, { useState } from "react"
import { InferGetServerSidePropsType } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import { toast } from "@/hooks/use-toast"
import { useAuth } from "@/hooks/useCustomHooks"
import { RootState } from "@/redux/store"
import { setCookie } from "cookies-next"
import { useSelector } from "react-redux"

import make from "@/lib/secure"
import SideAlert from "@/components/SideAlert"
import { Icons } from "@/components/icons"
import { Layout } from "@/components/layout"

export default function OrderProcess(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const { data } = useSelector((state: RootState) => state.auth)
  const router = useRouter()
  const [value, setValue] = useState(100)
  const { giftCardId } = router.query

  const [showSelectedCard, setShowSelectedCard] = useState(false)
  const [quantity, setQuantity] = useState<string | number>("1")
  const [responseData, setResponseData] = useState<any>({})
  function handleClickChange(price) {
    setValue(price)
    setShowSelectedCard(true)
  }
  const { setLoader, setExtraData } = useAuth()
  async function handleSubmitCard() {
    setLoader(true)

    if (quantity > responseData?.stockAvailable) {
      const remove = +quantity - responseData?.stockAvailable

      return toast({
        title: "Over Quantity",
        description: ` You have choosen ${quantity} cards, but ${responseData?.stockAvailable} only available, Please remove ${remove}`,
        variant: "destructive",
      })
    }
    const orderData = {
      basePrice: value,
      cardName: responseData?.AllCards.cardName,
      image: responseData?.AllCards.image,
      amount: (value * 90) / 100,
      quantity,
      cvId: giftCardId,
      email: data.email,
    }
    setExtraData(orderData)
    await setCookie("rfclipro_", make.encrypt(orderData))
    router.push({
      pathname: `/user/payment/${giftCardId}/confirm-purchase`,
    })
    setLoader(false)
  }

  React.useEffect(() => {
    setResponseData(props.responseData)
  }, [value])

  return (
    <Layout>
      <Head>
        <title>Select Reward Worth - Happift</title>
        <meta
          name="description"
          content="Happift Sell and Buy your Gift Voucher "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Sell Gift Cards, Amazon Gift Card: Happift"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {showSelectedCard && (
        <SideAlert
          text={`Rs.${value} Gift Cart Selected`}
          button={true}
          handleClickChange={() => setShowSelectedCard(false)}
        />
      )}
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            Process Order
          </h1>
        </div>
        <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16">
          <h2 className="m-2 mb-5">Choose Worth of Gift Card </h2>
          <fieldset className="flex flex-wrap gap-3">
            {responseData?.availableCard?.map((val) => {
              return (
                <div key={val}>
                  <input
                    type="radio"
                    name="three"
                    disabled={true}
                    className="peer hidden [&:checked_+_label_svg]:block"
                    defaultChecked={val === 500}
                  />

                  <label
                    htmlFor="ColorBlack"
                    className={`flex cursor-pointer items-center justify-center gap-2 rounded-md border border-gray-100  ${
                      val === value ? "bg-blue-500 text-white" : "bg-white"
                    } px-3 py-2 text-gray-900 hover:border-gray-200 peer-checked:border-blue-500 peer-checked:bg-blue-500 peer-checked:text-white`}
                  >
                    <svg
                      className="hidden h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <p
                      className="text-sm font-medium"
                      onClick={() => handleClickChange(val)}
                    >
                      Rs.{val}
                    </p>
                  </label>
                </div>
              )
            })}
          </fieldset>
          {showSelectedCard && (
            <div className="flex w-fit">
              <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                  <div className="mx-auto max-w-3xl border-solid border-red-400 shadow-amber-500">
                    <header className="text-center">
                      <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
                        Selected Card
                      </h1>
                    </header>

                    <div className="mt-8">
                      <ul className="space-y-4">
                        <li className="flex items-center gap-4">
                          <img
                            src={responseData?.AllCards.image}
                            alt={responseData?.AllCards.cardName}
                            className="h-24 w-fit rounded object-cover"
                          />

                          <div>
                            <h3 className="text-sm text-gray-900">
                              {responseData?.AllCards.cardName}
                            </h3>
                            <dd>Rs. {value}</dd>
                          </div>

                          <div className="flex flex-1 items-center justify-end gap-2">
                            <form>
                              <label htmlFor="Line1Qty" className="sr-only">
                                Quantity
                              </label>

                              <input
                                type="number"
                                min={1}
                                max={responseData?.AllCards.stock}
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                                id="Line1Qty"
                                className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                              />
                            </form>

                            <button
                              className="text-gray-600 transition hover:text-red-600"
                              onClick={() => setShowSelectedCard(false)}
                            >
                              <span className="sr-only">Remove item</span>
                              <Icons.delete />
                            </button>
                          </div>
                        </li>
                      </ul>

                      <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                        <div className="w-screen max-w-lg space-y-4">
                          <div className="col-span-6">
                            <button
                              onClick={handleSubmitCard}
                              className="block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg"
                            >
                              Next
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          )}
        </div>
      </section>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const getCurrentCard = await fetch(
    process.env.NEXT_PUBLIC_SITE_DOMAIN +
      `/api/v1/cards/${context.params.giftCardId};${context.query.type}`
  )

  const response = await getCurrentCard.json()
  return {
    props: {
      responseData: response.content,
    },
  }
}