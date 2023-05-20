import React from "react"

export default function WarningPopup() {
  return (
    <div className="rounded-lg bg-white p-8 shadow-2xl dark:bg-amber-500">
      <h2 className="text-lg font-bold">Are you sure you want to do that?</h2>

      <p className="mt-2 text-sm text-gray-500 dark:text-black">
        Doing that could have cause some issues elsewhere, are you 100% sure it
        s OK?
      </p>

      <div className="mt-4 flex gap-2">
        <button
          type="button"
          className="cursor-pointer rounded bg-green-50 px-4 py-2 text-sm font-medium text-green-600 dark:bg-black dark:text-white"
        >
          Yes, I m sure
        </button>

        <button
          type="button"
          className="rounded bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600"
        >
          Stay Here
        </button>
      </div>
    </div>
  )
}
