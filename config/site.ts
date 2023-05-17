import { NavItem } from "@/types/nav";


interface SiteConfig {
  name: string
  description: string
  mainNav: NavItem[]
  links: {
    twitter: string
    github: string
    docs: string
  }
}
let PAYTM_STATUS_QUERY_NEW_URL
let PAYTM_TXN_URL
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
      title: "Gift Cards",
      href: "/n/gift-cards",
    },
    {
      title: "Contact -Us",
      href: "/n/contact-us",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
// <li>
//               <Link
//                 href="#"
//                 className="flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
//               >
//                 <svg
//                   aria-hidden="true"
//                   className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
//                   <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
//                 </svg>
//                 <span className="ml-3">Dashboard</span>
//               </Link>
//             </li>
const UserNavbar = () => {
  return {
    Home: [
      {
        title: "Home",
        href: "/",
      },
      {
        title: "Gift Cards",
        href: "/n/gift-cards",
      },
    ],
    Settings: [
      {
        title: "Profile",
        href: "/",
      },
      {
        title: "ApiKeys",
        href: "/n/gift-cards",
        submenu: [
          {
            title: "Generate",
            href: "/",
          },
          {
            title: "Show All",
            href: "/",
          },
        ],
      },
      {
        title: "More",
        submenu: ["Calenders", "etc", "etc2"],
      },
    ],
  }
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
  callbackUrl: "http://localhost:3000/user/payment/response",
}