"use client"

import React from "react"
import { InferGetServerSidePropsType } from "next"
import { useRouter } from "next/navigation"
import { toast } from "@/hooks/use-toast"
import axios from "axios"

import { Icons } from "@/components/icons"

export default function ChangePassword(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const { data } = props
  const router = useRouter()
  const [disabled, setDisabled] = React.useState(false)

  const [passwordValue, setPasswordValue] = React.useState({
    password: "",
    confirm_password: "",
  })
  function CheckTokenValidOrNot() {
    if (!data.success) {
      return toast({
        title: "Not Found",
        description: data.message,
        variant: "destructive",
      })
    }
  }

  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPasswordValue({ ...passwordValue, [e.target.name]: e.target.value })
  }
  async function handlePasswordSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const res = await axios.post("/api/auth/change-password", {
      passwordValue,
      email: data.content.email,
      token: data.token,
    })
    console.log(res.data.success)
    if (res.data.success) {
      setTimeout(() => {
        router.push("/auth/login")
      }, 1500)
      return toast({
        title: "Redirecting...",
        description: res.data.message,
      })
    } else {
      return toast({
        title: res.data.message,

        variant: "destructive",
      })
    }
  }
  React.useEffect(() => {
    if (passwordValue.password && passwordValue.confirm_password) {
      return setDisabled(false)
    }
    setDisabled(true)
  }, [passwordValue])
  React.useEffect(() => {
    CheckTokenValidOrNot()
  }, [])

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        {data.success ? (
          <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
            <a
              href="/"
              className="mb-6 flex items-center text-2xl font-semibold text-gray-900 dark:text-white"
            >
              <Icons.logo />
              Happift
            </a>
            <div className="w-full rounded-lg bg-white p-6 shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md sm:p-8 md:mt-0">
              <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
                Change Password
              </h2>
              <form
                className="mt-4 space-y-4 md:space-y-5 lg:mt-5"
                onSubmit={handlePasswordSubmit}
              >
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
                    defaultValue={data.content.email}
                    className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                    placeholder="name@company.com"
                    readOnly
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    New Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                    value={passwordValue.password}
                    onChange={handlePasswordChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm password
                  </label>
                  <input
                    type="password"
                    name="confirm_password"
                    id="confirm_password"
                    placeholder="••••••••"
                    className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                    value={passwordValue.confirm_password}
                    onChange={handlePasswordChange}
                  />
                </div>

                <button
                  type="submit"
                  className="focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 cursor: not-allowed w-full rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-violet-700 focus:outline-none  focus:ring-4 disabled:bg-gray-500"
                  disabled={disabled}
                >
                  Change password
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
            <div className="mx-auto max-w-screen-sm text-center">
              <h1 className="text-primary-600 dark:text-primary-500 mb-4 text-7xl font-extrabold tracking-tight lg:text-9xl">
                402
              </h1>
              <p className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
                {data.message}.
              </p>
              <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                Go Back and Try Again to create a new Request to change password
              </p>
              <a
                href="/"
                className="focus:ring-primary-300 dark:focus:ring-primary-900 my-4 inline-flex rounded-lg bg-indigo-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-indigo-800 focus:outline-none focus:ring-4"
              >
                Back to Homepage
              </a>
            </div>
          </div>
        )}
      </section>
    </>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_DOMAIN}/api/auth/verify-reset-token`,
    {
      method: "POST",
      body: JSON.stringify(context.params),
    }
  )
  const data = await res.json()
  return {
    props: {
      data,
      token: context.params.token,
    },
  }
}
