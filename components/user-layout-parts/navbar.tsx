/* eslint-disable @next/next/no-img-element */
import React from "react"
import Link from "next/link"

import { Icons } from "../icons"
import UserDropdownMenu from "./dropdown-menu"

export default function UserLayoutNavbar() {
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
          </div>
          <div className="flex items-center">
            <button
              className="mr-4 block w-full rounded-full
      border-0 bg-violet-700 p-2  px-4 text-sm text-white
    file:py-2 file:font-semibold
      hover:bg-indigo-500 "
            >
              Mullayam
            </button>
            <div className="mr-3 flex items-center">
              <UserDropdownMenu />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
