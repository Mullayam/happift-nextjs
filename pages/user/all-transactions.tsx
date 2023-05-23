/* eslint-disable @next/next/no-img-element */
import Head from "next/head"
import { FileText, PlusCircle, PrinterIcon } from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TransactionsTable } from "@/components/user-layout-parts/PaymentDataTable"
import { CustomScrollArea } from "@/components/user-layout-parts/ScrollArea"
import UserLayout from "./layout"

export default function AccountSettings(props) {
  return (
    <UserLayout>
      <Head>
        <title>All Transactions - Happift</title>
        <meta
          name="description"
          content="About  | Send Us Your expeience feedback with our site "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Sell Gift Cards, Amazon Gift Card: Happift"
        />
      </Head>
      <div className="p-4 sm:ml-64">
        <div className="mt-14 rounded-lg  p-4 dark:border-gray-700">
          <div className="mb-4 h-fit items-center justify-center rounded bg-gray-50 p-10 dark:bg-gray-800">
            <div className="mb-8 flex h-10 justify-end rounded bg-gray-50 dark:bg-gray-800">
              <div className="mx-2 flex flex-row gap-4">
                {/* <PlusCircle />
                <PrinterIcon />
                <FileText /> */}
              </div>
            </div>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="all">All Transactions</TabsTrigger>
                <TabsTrigger value="inlet">Made By You</TabsTrigger>
                <TabsTrigger value="outlet">Made By Us</TabsTrigger>
              </TabsList>
              <TabsContent value="all">
                <CustomScrollArea>
                  <TransactionsTable />
                </CustomScrollArea>
              </TabsContent>
              <TabsContent value="inlet"></TabsContent>
              <TabsContent value="outlet"></TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </UserLayout>
  )
}
