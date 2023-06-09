import Head from "next/head"

import DisplayCard from "@/components/display-card"
import { Layout } from "@/components/layout"

export default function IndexPage(props) {
  return (
    <Layout>
      <Head>
        <title>Cards - Happift</title>
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
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            Available Gift Cards
          </h1>
        </div>

        <DisplayCard worth={"Rs .100"} />
      </section>
    </Layout>
  )
}
