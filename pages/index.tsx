import Head from "next/head"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import DisplayCard from "@/components/display-card"
import { Layout } from "@/components/layout"
import { SiteFooter } from "@/components/site-footer"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>GV-BOX</title>
        <meta
          name="description"
          content="GV-BOX Sell and Buy your Gift Voucher "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Sell Gift Cards, Amazon Gift Card: GV-BOX"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            Buy & Sell Variety of Gift Cards <br className="hidden sm:inline" />
            at the cheaper Rates
          </h1>
          <p className="max-w-[700px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
           Don&apos;t miss out on savings when you shop on Amazon or Flipkart. Buy discounted gift cards from our website and enjoy even more value for your money. Or sell your unused cards to declutter and earn some cash. It&apos;s easy, safe, and convenient. Try it now.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href={siteConfig.links.docs}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ size: "lg" })}
          >
            Get Started
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            Cards
          </Link>
        </div>
        <DisplayCard />
      </section>
      <SiteFooter />
    </Layout>
  )
}
