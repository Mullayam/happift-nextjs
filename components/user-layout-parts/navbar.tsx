/* eslint-disable @next/next/no-img-element */
import React from "react"
import Link from "next/link"
import { RootState } from "@/redux/store"
import { BellRing } from "lucide-react"
import { useSelector } from "react-redux"

import { Icons } from "../icons"
import { ThemeToggle } from "../theme-toggle"
import { DropdownMenuCheckboxes } from "./Nofication"
import { WalletPopover } from "./WalletPopover"
import UserDropdownMenu from "./dropdown-menu"

export default function UserLayoutNavbar() {
  const auth = useSelector((state: RootState) => state.auth)

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
      <div className="p-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <Link href="/" className="ml-2 flex md:mr-24">
              <Icons.logo />
              <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white sm:text-2xl">
                Happift
              </span>
            </Link>
            <ThemeToggle />
          </div>
          <div className="flex items-center">
            <button className="mr-2 inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75">
              <span className="block rounded-full bg-transparent px-6 py-2 text-sm font-medium hover:bg-transparent">
                {auth.data?.name}
              </span>
            </button>

            <div className="mx-3 flex items-center">
              <WalletPopover />
            </div>
            <div className="mx-3 flex items-center">
              <DropdownMenuCheckboxes />
            </div>
            <div className="mx-3 flex items-center">
              <UserDropdownMenu />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}