import React from "react"

export default function Sepratore({
  name,
  value,
  children,
}: {
  name: string
  value?: string
  children?: JSX.Element
}) {
  return (
    <div className="flex w-full justify-between">
      <span>{name}</span>
      {value ? <span>{value}</span> : children}
    </div>
  )
}
