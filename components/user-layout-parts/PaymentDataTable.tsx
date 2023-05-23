import { useEffect, useState } from "react"
import { delay } from "@/helpers/functions"
import { useAuth } from "@/hooks/useCustomHooks"
import axios from "axios"
import { MoreHorizontalIcon, Verified } from "lucide-react"
import moment from "moment"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Icons } from "../icons"
import { Badge } from "../ui/badge"
import { PaymentPreview } from "./PaymentPreview"

export function TransactionsTable() {
  const [responseData, setResponsData] = useState([])
  const { loader, setLoader } = useAuth()
  async function getTransactionRecords() {
    const { data } = await axios.get("/api/v1/payment/all-txn")
    setResponsData(data.content)
    await delay(1500)
    setLoader(false)
  }
  useEffect(() => {
    setLoader(true)
    getTransactionRecords()
  }, [])

  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead>Order Id</TableHead>
          <TableHead className="text-right">Date</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {!loader &&
          responseData.map((details, i) => (
            <TableRow key={details.orderId}>
              <TableCell className="font-medium">#INV00{i + 1}</TableCell>
              <TableCell>
                <Icons.badge
                  className={
                    details.status === "SUCCESS"
                      ? "bg-green-200 text-green-800"
                      : "bg-amber-200 text-red-800"
                  }
                >
                  {details.status}{" "}
                  {details.status === "SUCCESS" ? <Verified size={18} /> : null}
                </Icons.badge>
              </TableCell>
              <TableCell>
                <Icons.paytm />
              </TableCell>
              <TableCell>{details.orderId}</TableCell>
              <TableCell className="text-right">
                {moment(details.createdAt)
                  .utcOffset("+0530")
                  .format("YYYY/MM/DD HH:mm a")}
              </TableCell>
              <TableCell className="text-right">
                <Badge
                  variant="destructive"
                  className="cursor-pointer bg-stone-200 dark:bg-sky-200 dark:text-stone-800"
                >
                  <PaymentPreview responseData={details.paymentDetails}>
                    <MoreHorizontalIcon />
                  </PaymentPreview>
                </Badge>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  )
}
