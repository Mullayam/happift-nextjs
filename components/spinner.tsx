import React from "react"

type SpinnerProps = {
  children?: string | React.ReactNode
  h?: number | number
}
export function Spinner({ children, h = 12 }: SpinnerProps) {
  return (
    <>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black opacity-70">
        {children ? (
          <span className="text-white">{children}</span>
        ) : (
          <div
            className={`h-${h} w-${h} animate-spin rounded-full border-4 border-gray-100 border-t-transparent`}
          ></div>
        )}
      </div>
    </>
  )
}
