import React from "react"
import Head from "next/head"

import { Layout } from "@/components/layout"
import { SiteFooter1 } from "@/components/site-footer"

/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
export default function PrivacyPolicy() {
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
      <main className="bg-white pb-16 pt-8 dark:bg-gray-900 lg:pb-24 lg:pt-16">
        <div className="mx-auto flex  justify-between px-4 ">
          <article className="format format-sm sm:format-base lg:format-lg format-blue dark:format-invert mx-auto w-2/3 ">
            <header className="not-format mb-4 justify-center  lg:mb-6">
               <h1 className="mb-4 text-center text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
           Privacy Policy </h1>
            </header>
            <h2 className="mb-4 text-xl  leading-tight text-gray-900 dark:text-white lg:mb-6 lg:text-xl">
              Thank you for visiting Happift, a gift card website dedicated to
              helping you find the perfect gift for any occasion. Your privacy
              is important to us, and we are committed to protecting your
              personal information.
            </h2>

            <h4 className="mb-4 mt-2 text-xl font-bold leading-tight text-gray-900 dark:text-white lg:mb-6 lg:text-xl">
              Collection of Personal Information
            </h4>
            <p className="lead">
              We collect personal information such as your name, email address,
              phone number, and billing information when you make a purchase on
              our website. We may also collect information about your browsing
              activity on our website, such as the pages you visit and the links
              you click.
            </p>
            <h4 className="mb-4 mt-2 text-xl font-bold leading-tight text-gray-900 dark:text-white lg:mb-6 lg:text-xl">
              Use of Personal Information
            </h4>
            <p className="lead">
              We use your personal information to process your orders and
              provide customer service. We may also use your information to send
              you promotional emails about our products and services, if you
              have opted-in to receive such communications.
            </p>
            <h4 className="mb-4 mt-2 text-xl font-bold leading-tight text-gray-900 dark:text-white lg:mb-6 lg:text-xl">
              Disclosure of Personal Information
            </h4>
            <p className="lead">
              We do not sell or rent your personal information to third parties.
              However, we may share your information with our service providers
              who assist us in providing our services. We may also disclose your
              information to comply with legal obligations or to protect our
              rights and interests
            </p>
            <h4 className="mb-4 mt-2 text-xl font-bold leading-tight text-gray-900 dark:text-white lg:mb-6 lg:text-xl">
              Cookies and Other Technologies
            </h4>
            <p className="lead">
              We use cookies and other technologies to track your browsing
              activity on our website and to personalize your experience. We may
              also use cookies to collect information about your device, such as
              your IP address and browser type.
            </p>
            <h4 className="mb-4 mt-2 text-xl font-bold leading-tight text-gray-900 dark:text-white lg:mb-6 lg:text-xl">
              Data Security
            </h4>
            <p className="lead">
              We take reasonable measures to protect your personal information
              from unauthorized access, use, or disclosure. However, no method
              of transmission over the Internet or method of electronic storage
              is completely secure.
            </p>
            <h4 className="mb-4 mt-2 text-xl font-bold leading-tight text-gray-900 dark:text-white lg:mb-6 lg:text-xl">
             Children&apos;s Privacy
            </h4>
            <p className="lead">
           Our website is not intended for use by children under the age of 15. We do not knowingly collect personal information from children under the age of 15.
            </p>
            <h4 className="mb-4 mt-2 text-xl font-bold leading-tight text-gray-900 dark:text-white lg:mb-6 lg:text-xl">
             Changes to this Privacy Policy
            </h4>
            <p className="lead">
           We may update this Privacy Policy from time to time. We will post the updated Privacy Policy on our website and will notify you of any material changes.
            </p>

             <h4 className="mb-4 mt-2 text-xl font-bold leading-tight text-gray-900 dark:text-white lg:mb-6 lg:text-xl">
             If you have any questions or concerns about this Privacy Policy, please contact us at privacy@happift.com.
            </h4>
          </article>
        </div>
      </main>

      <SiteFooter1 />
    </Layout>
  )
}
