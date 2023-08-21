/* eslint-disable @next/next/no-img-element */
import React from "react"
import { InferGetServerSidePropsType } from "next"
import { useRouter } from "next/navigation"
import { retriveCookie } from "@/helpers/functions"
import { toast } from "@/hooks/use-toast"
import axios from "axios"
import { hasCookie } from "cookies-next"



import { responseBody } from "@/types/txnStatus"
import make from "@/lib/secure"
import { Spinner } from "@/components/spinner"


type MyCookie = {
  cookieName?: string
  value?: string
}

const PaymentResponse = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const { cookieName, value }: MyCookie = props.myCookie
  const router = useRouter()
  let decodedData = make.decrypt(decodeURIComponent(value))
  const [whatToDo, setwhatToDo] = React.useState(props.response)
  const [txnStatus, setTxnStatus] = React.useState<responseBody>({
    body: {
      resultInfo: {
        resultStatus: "PENDING",
        resultCode: "400",
        resultMsg: "Transaction status not confirmed yet.",
      },
    },
  })

  async function VerifyTXN() {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_SITE_DOMAIN}/api/v1/payment/verify-transaction`,
      {
        decodedData: JSON.parse(decodedData),
      }
    )
    setTxnStatus(data)
    if (data.body.resultCode === "01") {
      setwhatToDo("fulfilled")
      setTimeout(() => {
        router.push("/user/my-account")
      }, 5000)
      return toast({
        title: "Transaction is successful",
      })
    } else {
      setwhatToDo("fulfilled")
      return toast({
        title: "Transaction Failed",
      })
    }
  }
  React.useEffect(() => {
    VerifyTXN()
    let retry = true
    setTimeout(() => {
      if (retry) {
        if (!hasCookie(cookieName)) {
          router.push("/user/my-account")
          retry = false
        }
      }
    }, 2000)
  }, [])

  return (
    <>
      {whatToDo === "wait" ? (
        <>
          <Spinner />
          <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
            <div className="mx-auto max-w-screen-sm text-center">
              <h1 className="text-primary-600 dark:text-primary-500 mb-4 text-7xl font-extrabold tracking-tight lg:text-9xl">
                Hold On...
              </h1>
              <p className="mb-4 text-3xl font-bold tracking-tight text-amber-500 dark:text-white md:text-4xl">
                Payment Confirmation Under Process
              </p>
              <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                it will take 10-15 seconds to verify the payment from Bank.
              </p>
            </div>
          </div>
        </>
      ) : txnStatus.body.resultInfo.resultCode === "01" ? (
        <>
          <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
            <div className="mx-auto max-w-screen-sm text-center">
              <h1 className="mb-4 text-7xl font-extrabold tracking-tight text-green-600 dark:text-green-500 lg:text-9xl">
                Payment Successfull Redirecting ...
              </h1>
            </div>
          </div>
        </>
      ) : (
        <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="text-primary-600 dark:text-primary-500 mb-4 text-7xl font-extrabold tracking-tight lg:text-9xl">
              {txnStatus.body.resultInfo.resultCode}
            </h1>
            <p className="mb-4 text-3xl font-bold tracking-tight text-red-500 dark:text-white md:text-4xl">
              {txnStatus.body.resultInfo.resultStatus}
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              {txnStatus.body.resultInfo.resultMsg}
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              Go Back and Try Again, If amount is deducted Please Wait 5-10
              minutes to confirm payment from Payament Gateway.
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              Still Facing Issue, Please Contact Support, our Support Team will
              response immediately within 5 minutes
            </p>

            <a
              href="/"
              className="focus:ring-primary-300 dark:focus:ring-primary-900 my-4 inline-flex rounded-lg bg-indigo-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-indigo-800 focus:outline-none focus:ring-4"
            >
              Back to Homepage
            </a>
            <a
              href="/n/contact-us"
              className="focus:ring-primary-300 dark:focus:ring-primary-900 m-2 my-4 inline-flex rounded-lg bg-orange-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-indigo-800 focus:outline-none focus:ring-4"
            >
              Go To Support
            </a>
          </div>
        </div>
      )}
    </>
  )
}

export default PaymentResponse
export async function getServerSideProps(context) {
  let getNamedCookie

  if (context.req.headers.cookie) {
    getNamedCookie =
      (await retriveCookie(context.req.headers.cookie.split(";"))) || undefined
  } else {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    }
  }

  return {
    props: {
      response: "wait",
      myCookie: getNamedCookie,
    },
  }
}