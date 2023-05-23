import { NavItem } from "@/types/nav";


interface SiteConfig {
  name: string
  description: string
  mainNav: NavItem[]
}

export const siteConfig: SiteConfig = {
  name: "Happift",
  description:
    "Happift is a gift card store to buy or sell gift cards online from shopping sites like Flipkart, Amazon,BigBasket,Dominos,PVR,Bigbaazar,Microsoft GC,Bookmyshow &amp; more at Best Prices",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Buy",
      href: "/n/gift-cards",
    },
    {
      title: "Sell Cards",
      href: "/n/sell-cards",
    },
    {
      title: "Contact -Us",
      href: "/n/contact-us",
    },
  ],
}

let websiteType
if (process.env.PAYTM_ENVIRONMENT === "DEV") {
  websiteType = "WEBSTAGING"
} else {
  websiteType = "DEFAULT"
}
export const PaytmConfig = {
  mid: process.env.PAYTM_MERCHANT_ID,
  key: process.env.PAYTM_MERCHANT_KEY,
  website: websiteType,
  callbackUrl: `${process.env.NEXT_PUBLIC_SITE_DOMAIN}/user/payment/response`,
}