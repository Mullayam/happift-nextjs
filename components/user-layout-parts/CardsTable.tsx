import React from "react"
import Image from "next/image"
import Link from "next/link"
import axios from "axios"

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

export function CardsTable({ cards }) {
  const [cardStatus, setCardStatus] = React.useState(false)
  const [currentCard, setCurrentCard] = React.useState(null)
  async function handleCardStatusChange(id: string, cardStatus: boolean) {
    // await axios.post("/api/v1/cards/", { id, cardStatus })
    setCurrentCard(id)
  }
  return (
    <Table>
      <TableCaption className="mb-5">
        {cards.length > 0 ? "A list of your Cards." : "No Cards Founds"}
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-fit]">Card Name</TableHead>
          <TableHead className="w-fit]">Image</TableHead>
          <TableHead>Stock</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Selling At</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cards.map((card) => (
          <TableRow key={card.id}>
            <TableCell className="cursor-pointer font-medium">
              <Link
                href={`/user/manage/cards/handle-card?giftCardId=${card.id}`}
              >
                {card.cardName}
              </Link>
            </TableCell>
            <TableCell className="font-medium">
              <Image
                src={card.image}
                width={32}
                height={64}
                alt={card.cardName}
              />
            </TableCell>
            <TableCell>{card.stock}</TableCell>
            <TableCell className="cursor-pointer">
              <Icons.badge
                className={card.isAvailable ? "bg-green-700 " : "bg-red-700"}
              >
                <span
                  onClick={() =>
                    handleCardStatusChange(card.id, card.isAvailable)
                  }
                >
                  {currentCard === card.id
                    ? `${!card.isAvailable}`
                    : card.isAvailable
                    ? "Available"
                    : "Not Available"}
                </span>
              </Icons.badge>
            </TableCell>
            <TableCell className="text-right">Rs.{card.buyPrice}</TableCell>
            <TableCell className="text-right">Rs.{card.worth}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
