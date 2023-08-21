/* eslint-disable @next/next/no-img-element */

import React from "react"
import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
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
import WarningPopup from "@/components/user-layout-parts/warning"
import UserLayout from "../../layout"

type CardInfo = {
  cardName: String
  image: String
  stock: String
  isAvailable: Boolean
  worth: String
  buyPrice: String
  cardDetails: string
}
export default function AccountSettings(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const { setLoader } = useAuth()
  const router = useRouter()
  const card = props?.existingCard
  const { giftCardId } = router.query

  const [newCardInfo, setNewCardInfo] = React.useState<CardInfo>({
    cardName: card?.cardName || "",
    image: card?.image || "  ",
    stock: card?.stock || "0",
    isAvailable: card?.isAvailable || false,
    worth: card?.worth || "0",
    buyPrice: card?.buyPrice || "1",
    cardDetails:
      card?.cardDetails ||
      `Balance:X \nGift Card Pin : XXXXX \nGift Card Number : XXXXXXXXXXXX \nExpiry:23/05/2023`,
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

    setLoader(false)
  }

  async function handleUpdateCard() {
    if (Number(newCardInfo.worth) < Number(newCardInfo.buyPrice)) {
      return toast({
        title: "Selling Price not be greater than worth Of Voucher",
        variant: "destructive",
      })
    }

    setLoader(true)
    const { data } = await axios.put("/api/v1/cards/add-card", {
      newCardInfo,
      id: card?.id,
    })

    if (data.success) {
      toast({ title: data.message })
      await delay(2000)
    } else {
      toast({ title: data.message, variant: "destructive" })
    }

    setLoader(false)
  }
  return (
    <UserLayout>
      <Head>
        <title> {giftCardId ? "Edit " : "Add New"} Gift Card - Happift</title>
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
          {card?.noCard && <WarningPopup text="Card Not Found" type="error" />}

          <div className="mb-4 flex h-fit  items-center justify-center rounded bg-transparent dark:bg-gray-800">
            <h1 className="text-5xl font-extrabold  ">
              {giftCardId ? "Edit " : "Add New"} Card
            </h1>
          </div>
          <Card>
            <div className="grid md:grid-cols-3 md:gap-6">
              <div className="space-y-1">
                <Label htmlFor="card_name">Card Name</Label>
                <Input
                  id="cardName"
                  defaultValue={newCardInfo.cardName as string}
                  type="text"
                  onChange={handleOnchange}
                />
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
                    <SelectValue placeholder="Is Available " />
                  </SelectTrigger>
                  <SelectContent>
                    {giftCardId && (
                      <SelectItem value={card?.isAvailable}>
                        {card?.isAvailable}
                      </SelectItem>
                    )}

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
                  defaultValue={newCardInfo.worth as string}
                  onChange={handleOnchange}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="Selling Price">Selling Price</Label>
                <Input
                  id="buyPrice"
                  type="number"
                  defaultValue={newCardInfo.buyPrice as string}
                  onChange={handleOnchange}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="stock">Current Stock</Label>
                <Input
                  id="stock"
                  type="number"
                  defaultValue={newCardInfo.stock as string}
                  onChange={handleOnchange}
                />
              </div>
            </div>

            <div className="grid w-full gap-1.5">
              <Label htmlFor="message-2">Card Details</Label>
              <Textarea
                id="cardDetails"
                value={newCardInfo.cardDetails}
                onChange={handleOnchange}
              />

              <div className="text-muted-foreground text-sm">
                Enter Card Details Gift Card Number/Pin/Code{" "}
                {newCardInfo.cardDetails === "" ? (
                  <small>
                    <pre>
                      eg.
                      <code>
                        Balance:X Gift Card Pin : XXXXX Gift Card Number :
                        XXXXXXXXXXXX Voucher Code: XXXXXXXXXXXX
                        Expiry:23/05/2023
                      </code>
                    </pre>
                  </small>
                ) : null}
              </div>
            </div>
            <Button
              onClick={giftCardId ? handleUpdateCard : handleAddCard}
              variant="default"
            >
              {giftCardId ? "Update Card" : "Add New Card"}
            </Button>
          </Card>
        </div>
      </div>
    </UserLayout>
  )
}
export async function getServerSideProps(ctx) {
  let existingCard

  if (ctx.query.giftCardId) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_DOMAIN}/api/v1/cards/get-cards`,
      {
        method: "POST",

        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: ctx.query.giftCardId }),
      }
    )

    existingCard = await response.json()

    return {
      props: {
        existingCard: existingCard?.content,
      },
    }
  }
  return { props: { existingCard: {} } }
}