import React from "react"
import Link from "next/link"
import { DecryptData } from "@/helpers/decryptTokenData"
import { getCookie, hasCookie } from "cookies-next"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { buttonVariants } from "@/components/ui/button"
import UserDropdownMenu from "./user-layout-parts/dropdown-menu"

export function SiteHeader() {
  const [isAuth, setAuth] = React.useState(false)
  const [payload, setPayload] = React.useState({})

  React.useEffect(() => {
    async function getToken() {
      if (hasCookie("access_token")) {
        const data = getCookie("access_token")
        setAuth(true)
        const payload = await DecryptData(`${data}`)
        setPayload(payload)
      } else {
        setAuth(false)
      }
    }
    getToken()
  }, [])
  return (
    <header className="sticky top-0 z-40 w-full border-b border-b-slate-200 bg-white dark:border-b-slate-700 dark:bg-slate-900">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                  className: "text-slate-700 dark:text-slate-400",
                })}
              >
                <Icons.google className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <ThemeToggle />
            {isAuth ? (
              <UserDropdownMenu />
            ) : (
              <Link
                rel="noreferrer"
                href="/auth/login"
                className={buttonVariants({
                  variant: "destructive",
                  size: "lg",
                })}
              >
                Login
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}
