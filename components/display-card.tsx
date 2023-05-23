import React from "react"
import Image from "next/image"
import { useRouter } from "next/router"
import axios from "axios"
import { Loader2 } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export default function DisplayCard({ worth }: { worth: string }) {
  const router = useRouter()
  const loading = false
  const [cards, setCards] = React.useState([])
  function redirect(id: string): any {
    router.push(`/user/payment/${id}/order-process`)
  }
  React.useEffect(() => {
    async function getAllCards() {
      const { data } = await axios.get("/api/v1/cards/get-cards")
      setCards(data.content.AllCards)
    }
    getAllCards()
  })

  return (
    <div className="flex flex-wrap">
      {cards.map((card) => {
        return (
          <div key={card.id}>
            <HoverCard>
              <HoverCardTrigger asChild>
                <div className="m-2">
                  <div>
                    <Image
                      src={card.image}
                      alt={card.cardName}
                      width={300}
                      height={100}
                      className="cursor-pointer object-cover transition-all hover:scale-110"
                    />
                  </div>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-full">
                <div className="flex items-center justify-between space-x-4">
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">
                      <Button
                        disabled={loading}
                        onClick={() => redirect(card.id)}
                        className="cursor-pointer bg-orange-600"
                      >
                        {loading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                            Please Wait...
                          </>
                        ) : (
                          card.cardName
                        )}
                      </Button>
                    </h4>

                    <div className="flex items-center pt-2">
                      <span className="text-muted-foreground text-xs">
                        Stock Left:
                        <Badge variant="destructive">{card.stock}</Badge>
                        Starting Price:
                        <Badge variant="destructive">{card.buyPrice}</Badge>
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        )
      })}
    </div>
  )
}
