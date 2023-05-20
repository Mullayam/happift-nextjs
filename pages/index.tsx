/* eslint-disable @next/next/no-img-element */
import Head from "next/head"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import MainSection from "@/components/MainSection"
import { Layout } from "@/components/layout"
import Team from "@/components/our-teams"
import { SiteFooter1 } from "@/components/site-footer"
import Testimonials from "@/components/testimonials"
import { buttonVariants } from "@/components/ui/button"


export default function IndexPage(props) {
  return (
    <Layout>
      <Head>
        <title>Happift - ENJOYS</title>
        <meta
          name="description"
          content="Happift Sell and Buy your Gift Voucher "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Sell Gift Cards, PVR,Dominos,Amazon Gift Card: GHappift"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
          <div className="flex max-w-[980px] flex-col items-start gap-2">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
              Welcome to Happift
              <br className="hidden sm:inline" /> Buy & Sell Variety of Gift
              Cards at the cheaper Rates
            </h1>
            <p className="max-w-[700px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
              Don&apos;t miss out on savings when you shop on Amazon or
              Flipkart. Buy discounted gift cards from our website and enjoy
              even more value for your money. Or sell your unused cards to
              declutter and earn some cash. It&apos;s easy, safe, and
              convenient. Try it now.
            </p>
          </div>
          <div className="flex gap-4">
            {/* <Link
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
            </Link> */}
          </div>

       
        </section>
      </section>
      <MainSection />
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
          <div className="max-w-screen-lg text-gray-500 dark:text-gray-400 sm:text-lg">
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Here&apos;s a little bit about who we are and what we do.
            </h2>
            <p className="mb-4 font-light">
              Our mission is to make gift-giving simple, easy, and convenient.
              We believe that everyone deserves to feel special, and
              there&apos;s no better way to do that than with a thoughtful gift.
              Our gift cards are designed to give your loved ones the freedom to
              choose the gift that they want most, without the hassle of
              traditional gift-giving. We work with a variety of retailers and
              merchants to offer a wide range of gift card options. Whether
              you&apos;re looking for a gift card for a popular clothing store,
              a restaurant, or even an experience like a spa day or adventure
              activity, we&apos;ve got you covered. Our goal is to make sure
              that there&apos;s something for everyone, no matter their
              interests or preferences.
            </p>
            <p className="mb-4 font-medium">
              At our website, we pride ourselves on our user-friendly interface
              and top-notch customer service. We want your gift-giving
              experience to be as stress-free as possible, which is why
              we&apos;ve made it easy to purchase, send, and use our gift cards.
              If you ever have any questions or concerns, our support team is
              always ready and willing to help. Thank you for choosing our gift
              card website as your go-to for all your gifting needs. We hope to
              continue to serve you for many years to come!
            </p>
            <a
              href="#"
              className="text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700 inline-flex items-center font-medium"
            >
              Learn more
              <svg
                className="ml-1 h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
      <Team />

      <Testimonials />
     
    </Layout>
  )
}