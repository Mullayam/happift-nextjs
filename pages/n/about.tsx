/* eslint-disable @next/next/no-img-element */
import Head from "next/head"

import AboutUs from "@/components/AboutUs"
import { Layout } from "@/components/layout"
import { SiteFooter1 } from "@/components/site-footer"

export default function About(props) {
  return (
    <Layout>
      <Head>
        <title>About - Happift</title>
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

      <AboutUs />
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16">
          <p className="mb-8 text-lg font-normal text-gray-500 dark:text-gray-400 sm:px-16 lg:text-xl xl:px-48">
            Our website is designed to be easy to use, with a user-friendly
            interface that allows you to quickly and easily find the gift card
            you are looking for. We also offer a variety of payment options,
            including credit cards, debit cards, and PayPal, to make your
            shopping experience as convenient as possible.
          </p>
          <p className="mb-8 text-lg font-normal text-gray-500 dark:text-gray-400 sm:px-16 lg:text-xl xl:px-48">
            At our gift card website, we believe in providing excellent customer
            service. If you have any questions or concerns, our friendly and
            knowledgeable customer service team is always here to help. We pride
            ourselves on providing fast and efficient service, so you can rest
            assured that your gift card will be delivered promptly.
            <br />
            We are committed to your satisfaction and guarantee that you will be
            completely satisfied with your purchase. So why wait? Start browsing
            our selection of gift cards today and find the perfect gift for your
            loved one!
          </p>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl items-center gap-16 px-4 py-8 lg:grid lg:grid-cols-2 lg:px-6 lg:py-16">
          <div className="font-light text-gray-500 dark:text-gray-400 sm:text-lg">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Thank you for choosing us
            </h2>
            <p className="mb-4">
              At our gift card website, we are committed to making gift-giving
              easy, convenient, and hassle-free. We understand that finding the
              perfect gift for someone can be a time-consuming and stressful
              process. That&apos;s why we&apos;ve created a platform that offers
              a wide range of gift card options from popular retailers and
              merchants, giving your loved ones the freedom to choose the gift
              that they truly want.
            </p>
            <p>
              We believe that giving a gift should be a joyful experience, not a
              burden. That&apos;s why we&apos;ve designed our website to be
              user-friendly and intuitive, with a seamless purchasing process
              and various delivery options to fit your needs. Our mission is to
              make your gift-giving experience as stress-free as possible, so
              you can focus on what matters most - showing your loved ones that
              you care.
            </p>
            <p></p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <img
              className="w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full rounded-lg lg:mt-10"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="office content 2"
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}
