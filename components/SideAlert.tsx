import React, { ReactElement } from "react"

import { Icons } from "./icons"

type SideAlert = {
  text: string
  button?: boolean
  handleClickChange?: () => void
}
export default function SideAlert({
  text,
  button = false,
  handleClickChange,
}: SideAlert) {
  return (
    <aside className="top-center-4 z-100 fixed end-10 flex items-center justify-center gap-4 rounded-lg bg-black px-5 py-3 text-white">
      <span className="text-sm font-medium hover:opacity-75">{text}</span>

      {button && (
        <button
          className="rounded bg-white/20 p-1 hover:bg-white/10"
          onClick={handleClickChange}
        >
          <span className="sr-only">Close</span>
          <Icons.delete />
        </button>
      )}
    </aside>
  )
}
