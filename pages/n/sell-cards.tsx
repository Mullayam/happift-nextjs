import Head from "next/head"
import { useAuth } from "@/hooks/useCustomHooks"

import { Layout } from "@/components/layout"
import SellCards from "@/components/sellCards"

export default function IndexPage(props) {
  const { user } = useAuth()
  const role = user?.role === "C_8256" ? true : false
  return (
    <Layout>
      <Head>
        <title>Sell Gift Cards- Happift</title>
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
        <div className="flex max-w-full flex-col items-start gap-2">
          {role ? (
            <SellCards />
          ) : (
            <h1 className="text-4xl font-extrabold">
              You have not authorised to Sell you Gift Card untill you verify
              KYC
            </h1>
          )}
        </div>
      </section>
    </Layout>
  )
}
