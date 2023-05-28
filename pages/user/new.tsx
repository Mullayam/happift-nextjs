"use client";

import React from "react"
import Head from "next/head"

import { Layout } from "@/components/layout"

export default function NewUser(props) {
  function redirectToMainWindow() {
    return window.close()
  }
  React.useEffect(() => {
    setTimeout(() => {
      close()
    }, 6500)
  }, [])
  return (
    <Layout>
      <Head>
        <title>New Account Setup - Happift</title>
        <meta name="description" content="Account Setup in progress" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Sell Gift Cards, Amazon Gift Card: Happift"
        />
      </Head>
      <section className="mb-32 text-center text-gray-800">
        <div className="px-6 py-12 md:px-12">
          <h2 className="my-12 text-5xl font-bold tracking-tight">
            Happift Account <br />
            <span className="text-blue-600">created Successfully</span>
          </h2>
          <span
            className="mb-2 inline-block rounded bg-blue-600 px-7 py-3 text-sm font-medium uppercase leading-snug text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg md:mr-2"
            onClick={() => redirectToMainWindow}
            role="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            Get started
          </span>
        </div>
      </section>
    </Layout>
  )
}