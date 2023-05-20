import React from "react"
import Link from "next/link"
import { RootState } from "@/redux/store"
import { ChevronRight, FileBadge2, XCircle } from "lucide-react"
import { useSelector } from "react-redux"

import { Icons } from "../icons"
import { ManageCardsDropdownMenu } from "./ManageCards"
import UserLayoutNavbar from "./navbar"

const UserSidebarMenu = [
  {
    id: 1,
    icon: "home",
    label: "Dashboard",
    href: "dash",
    bagde: "",
    subMmenu: [],
  },
  {
    id: 2,
    icon: "icon",
    label: "Ecommerce",
    href: "dash",
    bagde: "",
    subMmenu: [{ href: "", label: "" }],
  },

  {
    id: 4,
    icon: "icon",
    label: "",
    href: "dash",
    bagde: "",
    subMmenu: [],
  },
  {
    id: 5,
    icon: "icon",
    label: "",
    href: "dash",
    bagde: "",
    subMmenu: [],
  },
]
export default function UserLayoutSidebar() {
  const auth = useSelector((state: RootState) => state.auth)
  const role = auth.data?.role === "K_3566" ? true : false
  const color = role
    ? "bg-green-200  text-green-800 dark:bg-green-200 dark:text-green-800"
    : "bg-red-200  text-red-800 dark:bg-red-200 dark:text-red-800"
  return (
    <>
      <UserLayoutNavbar />
      <aside
        id="sidebar-multi-level-sidebar"
        className="fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full border-r border-gray-200 bg-white pt-20 transition-transform dark:border-gray-700 dark:bg-gray-800 sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full overflow-y-auto bg-white px-3 pb-4 dark:bg-gray-800">
          {auth.data?.role === "F_3026" ? (
            <ul className="space-y-2 font-medium">
              <li>
                <figure
                  className="group flex w-full items-center rounded-lg p-2 text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  aria-controls="dropdown-example"
                  data-collapse-toggle="dropdown-example"
                >
                  <span
                    className="ml-3 flex-1 whitespace-nowrap text-left"
                    sidebar-toggle-item="true"
                  >
                    Manage Cards
                  </span>

                  <ManageCardsDropdownMenu />
                </figure>
              </li>
            </ul>
          ) : null}

          <ul className="mt-4 space-y-2 border-t border-gray-200 pt-4 font-medium dark:border-gray-700">
            <li>
              <Link
                href="/user/all-transactions"
                className="group flex items-center rounded-lg p-2 text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                  <path
                    fillRule="evenodd"
                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="ml-3">Transaction Logs</span>
              </Link>
            </li>
          </ul>
          <hr />
          <div
            id="dropdown-cta"
            className="mt-6 rounded-lg bg-blue-50 p-4 dark:bg-blue-900"
            role="alert"
          >
            <span
              className={`text-md dark:bg- mr-2 inline-flex rounded px-2.5 py-0.5 font-semibold ${color}`}
            >
              {role ? (
                <>
                  KYC VERIFIED <Icons.verified />
                </>
              ) : (
                <>
                  KYC UNVERIFIED <XCircle size={24} className="ml-2" />
                </>
              )}
            </span>
          </div>
        </div>
      </aside>
    </>
  )
}
