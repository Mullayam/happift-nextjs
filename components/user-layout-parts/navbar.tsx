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
            <button
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 sm:hidden"
            >
             
              <svg
                className="h-6 w-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>
            <Link href="/" className="ml-2 flex md:mr-24">
              <Icons.logo />
              <span className="ml-2 hidden self-center whitespace-nowrap text-xl font-semibold dark:text-white sm:text-2xl  md:block">
                Happift
              </span>
            </Link>
            <ThemeToggle />
          </div>
          <div className="ml-3 flex items-center">
            <div className="ml-3 flex items-center">
              <div className="hidden md:block">
                <button className="mr-2 inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75">
              <span className="block rounded-full bg-transparent px-6 py-2 text-sm font-medium hover:bg-transparent">
                {auth.data?.firstName }
              </span>
            </button>
              </div>
              <div className="invisible md:visible">
                <WalletPopover />
              </div>
              <div className="mx-3">
                <DropdownMenuCheckboxes />
              </div>
              <div>
                <UserDropdownMenu />
              </div>
            </div>
             
          </div>
        </div>
      </div>
    </nav>
  )
}
