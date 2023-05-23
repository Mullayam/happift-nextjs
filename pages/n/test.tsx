/* eslint-disable @next/next/no-img-element */
import Head from "next/head"

import { Layout } from "@/components/layout"

export default function About(props) {
  return (
    <Layout>
      <Head>
        <title>Data - Happift</title>
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
      <div className="container mx-auto py-10"></div>
    </Layout>
  )
}
