/* eslint-disable @next/next/no-img-element */

import React from "react"
import Head from "next/head"
import { delay } from "@/helpers/functions"
import { toast } from "@/hooks/use-toast"
import { useAuth } from "@/hooks/useCustomHooks"
import { Label } from "@radix-ui/react-label"
import axios from "axios"

import { Card } from "@/components/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import UserLayout from "../layout"

type CardInfo = {
  cardName: String
  image: String
  stock: String
  isAvailable: Boolean
  worth: String
  buyPrice: String
  cardDetails: string
}
export default function AccountSettings(props) {
  const { setLoader } = useAuth()
  const [newCardInfo, setNewCardInfo] = React.useState<CardInfo>({
    cardName: "",
    image: "  ",
    stock: "0",
    isAvailable: false,
    worth: "0",
    buyPrice: "1",
    cardDetails: `Gift Card Pin : XXXXX \nGift Card Number : XXXXXXXXXXXX \nExpiry:23/05/2023`,
  })
  const [cardImg, setCardImg] = React.useState<File | null>(null)

  function handleOnchange(e) {
    setNewCardInfo({ ...newCardInfo, [e.target.id]: e.target.value })
  }

  function onImageChange(e) {}
  async function handleAddCard() {
    if (newCardInfo.cardName === "") {
      return toast({ title: "Card name cant be empty", variant: "destructive" })
    }
    if (Number(newCardInfo.worth) < Number(newCardInfo.buyPrice)) {
      return toast({
        title: "Selling Price not be greater than worth Of Voucher",
        variant: "destructive",
      })
    }
    if (newCardInfo.cardDetails === "") {
      return toast({
        title: "Please Enter Card Details",
        variant: "destructive",
      })
    }
    setLoader(true)
    const { data } = await axios.post("/api/v1/cards/add-card", {
      newCardInfo,
    })

    if (data.success) {
      toast({ title: data.message })
      await delay(2000)
    } else {
      toast({ title: data.message, variant: "destructive" })
    }
    console.log(data.message)
    setLoader(false)
  }
  return (
    <UserLayout>
      <Head>
        <title>Add New Gift Card - Happift</title>
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
          <div className="mb-4 flex h-fit  items-center justify-center rounded bg-transparent dark:bg-gray-800">
            {/* <WarningPopup /> */}
            <h1 className="text-5xl font-extrabold  ">Add New Card</h1>
          </div>
          <Card>
            <div className="grid md:grid-cols-3 md:gap-6">
              <div className="space-y-1">
                <Label htmlFor="card_name">Card Name</Label>
                <Input id="cardName" type="text" onChange={handleOnchange} />
              </div>

              <div className="grid w-full   items-center gap-1.5">
                <Label htmlFor="picture">Picture</Label>
                <Input id="picture" type="file" accept="image/*" />
                <p
                  className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                  id="file_input_help"
                >
                  SVG, PNG, JPG or GIF (MAX. 800x400px).
                </p>
              </div>
              <div className="space-y-1">
                <Select>
                  <SelectTrigger className="mt-8 w-full">
                    <SelectValue placeholder="Is Available" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="true">Available</SelectItem>
                    <SelectItem value="false">Out of Stock </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid md:grid-cols-3 md:gap-6">
              <div className="space-y-1">
                <Label htmlFor="Orignal Price">Orignal Price</Label>
                <Input
                  id="worth"
                  type="number"
                  defaultValue={0}
                  onChange={handleOnchange}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="Selling Price">Selling Price</Label>
                <Input
                  id="buyPrice"
                  type="number"
                  defaultValue={1}
                  onChange={handleOnchange}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="stock">Current Stock</Label>
                <Input
                  id="stock"
                  type="number"
                  defaultValue={0}
                  onChange={handleOnchange}
                />
              </div>
            </div>

            <div className="grid w-full gap-1.5">
              <Label htmlFor="message-2">Card Details</Label>
              <Textarea
                id="cardDetails"
                defaultValue={newCardInfo.cardDetails}
                onChange={handleOnchange}
              />
              <div className="text-muted-foreground text-sm">
                Enter Card Details Gift Card Number/Pin/Code{" "}
                {newCardInfo.cardDetails === "" ? (
                  <p>
                    <pre>
                      eg.
                      <code>
                        Gift Card Pin : XXXXX Gift Card Number : XXXXXXXXXXXX
                        Voucher Code: XXXXXXXXXXXX Expiry:23/05/2023
                      </code>
                    </pre>
                  </p>
                ) : null}
              </div>
            </div>
            <Button onClick={handleAddCard} variant="default">
              Add New Card
            </Button>
          </Card>
        </div>
      </div>
    </UserLayout>
  )
}
