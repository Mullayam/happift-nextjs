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
      href: "/contact-us",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}