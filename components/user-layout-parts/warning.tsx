import React from "react"

export default function WarningPopup({
  text = "Please Pass text to show message",
  description,
  type = "default",
  button,
}: {
  text: string
  button?: boolean
  description?: string
  type: "default" | "error" | "warning" | "success" | "info"
}) {
  const color = () => {
    if (type === "default") {
      return "text-gray-500 dark:text-black dark:bg-sky-400 "
    }
    if (type === "error") {
      return "bg-red-300 text-red-800 dark:bg-red-200 dark:bg-red-800"
    }
    if (type === "warning") {
      return "bg-amber-500 text-sky-400 dark:bg-amber-500"
    }
    if (type === "success") {
      return "bg-green-200 text-green:700 dark:bg-green-200 dark:text-green-800"
    }
    if (type === "info") {
      return "bg-sky-500 text-black  dark:bg-sky-200 dark:text-black"
    }
  }

  return (
    <div className={`mb-4 rounded-l p-8 shadow-2xl ${color}`}>
      <h2 className="text-lg font-bold">{text}</h2>

      <p className="mt-2 text-sm ">{description}</p>
      {button && (
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
      )}
    </div>
  )
}
