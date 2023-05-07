import React from "react"
import Head from "next/head"

import FAQs from "@/components/faq"
import { Layout } from "@/components/layout"
import Questions from "@/components/questions"
import { SiteFooter1 } from "@/components/site-footer"

export default function Terms() {
  return (
    <Layout>
      <Head>
        <title>Terms Conditions- Happift</title>
        <meta
          name="description"
          content="Contact Us  | Send Us Your expeience feedback with our site "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Sell Gift Cards, Amazon Gift Card: Happift"
        />
      </Head>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <h1>Ters</h1>
      </section>
      <SiteFooter1 />
    </Layout>
  )
}
