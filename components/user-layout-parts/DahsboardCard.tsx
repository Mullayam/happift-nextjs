import React from "react"

import { Icons } from "../icons"

export default function DashboardInfoCard({ title, amount, description }) {
  return (
    <div className="bg-card text-card-foreground rounded-lg border shadow-sm">
      <div className="flex flex-row items-center justify-between space-y-0 p-6 pb-2">
        <h3 className="text-sm font-medium tracking-tight">{title}</h3>
        {/* icon  */}
      </div>
      <div className="p-6 pt-0">
        <div className="inline-flex text-2xl font-bold">
          <Icons.ruppees />
          {amount}
        </div>
        <p className="text-muted-foreground text-xs">{description}</p>
      </div>
    </div>
  )
}
