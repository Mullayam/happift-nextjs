import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@radix-ui/react-context-menu"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Card } from "../card"
import { Badge } from "../ui/badge"
import Sepratore from "./Sepratore"

export function PaymentPreview({ responseData, children }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Payment Details ({responseData.resultInfo.resultStatus})
          </DialogTitle>
          <DialogDescription className="w-full">
            <Card>
              <Sepratore
                name="Currency"
                value={responseData?.baseCurrency || "nill"}
              />

              <Sepratore
                name="Paid Amount"
                value={responseData?.txnAmount || "nill"}
              />
              <Sepratore
                name="Bank Txn ID"
                value={responseData?.bankTxnId || "nill"}
              />
              <Sepratore name="Txn ID" value={responseData?.txnId || "nill"} />

              <Sepratore name="Date" value={responseData?.txnDate || "nill"} />
              <Sepratore name="Status">
                <Badge
                  variant="destructive"
                  className="cursor-pointer bg-stone-200 dark:bg-sky-200 dark:text-stone-800"
                >
                  {responseData.resultInfo.resultStatus}
                </Badge>
              </Sepratore>
            </Card>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <small>Incase of Transaction failure all values are nill</small>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
