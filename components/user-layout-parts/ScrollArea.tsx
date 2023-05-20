import * as React from "react"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

export function CustomScrollArea({ title = "", children }) {
  const classname = `h-[550px] w-full  rounded-md border`
  console.log(classname)
  return (
    <ScrollArea className={classname}>
      <div className="p-4">
        {title && (
          <h4 className="mb-4 text-sm font-medium leading-none">{title}</h4>
        )}

        <React.Fragment>
          {children}
          <Separator className="my-2" />
        </React.Fragment>
      </div>
    </ScrollArea>
  )
}
