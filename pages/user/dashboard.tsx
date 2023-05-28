import React from "react"
import Head from "next/head"
import axios from "axios"

import { CardsTable } from "@/components/user-layout-parts/CardsTable"
import { CustomScrollArea } from "@/components/user-layout-parts/ScrollArea"
import UserLayout from "./layout"

export default function AccountSettings(props) {
  const [giftCards, setGiftCards] = React.useState([])
  const getCards = async () => {
    const { data } = await axios.get("/api/v1/cards/get-cards")
    setGiftCards(data.content.AllCards)
  }
  React.useEffect(() => {
    getCards()
  }, [])

  return (
    <UserLayout>
      <Head>
        <title>Dashboard - Happift</title>
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
          <div className="mx-2 flex flex-row gap-4 rounded-md border border-solid">
            <CustomScrollArea>
              <CardsTable cards={giftCards} />
            </CustomScrollArea>
          </div>
        </div>
      </div>
    </UserLayout>
  )
}
