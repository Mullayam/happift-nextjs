import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import { Loader2 } from "lucide-react";



import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function DisplayCard({ worth }: { worth: string }) {
  const router = useRouter()
  const loading = false
  const [cards, setCards] = React.useState([])
  function redirect(id: string, category: string): any {
    router.push(`/user/payment/${id}/order-process?type=${category}`)
  }
  async function getAllCards() {
    const { data } = await axios.get("/api/v1/cards/get-cards")
    setCards(data.content.AllCards)
  }
  React.useEffect(() => {
    getAllCards()
  })

  return (
    <div className="flex flex-wrap gap-6">
      {cards.map((card) => {
        return (
          <div key={card.id}>
            <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
              <Image
                src={card.image}
                alt={card.cardName}
                width={300}
                height={100}
                className="cursor-pointer object-cover transition-all hover:scale-110"
                // className="rounded-t-lg p-8"
              />

              <div className="px-5 pb-5 mt-2">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {card.cardName}
                </h5>

                <div className="mb-5 mt-2.5 flex items-center">
                  <div className="flex items-center pt-2">
                    <span className="text-muted-foreground text-xs">
                      Stock Left:
                      <Badge variant="destructive">{card.stock}</Badge>
                      Starting Price:
                      <Badge variant="destructive">{card.buyPrice}</Badge>
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    Rs.{card.buyPrice}
                  </span>
                  <Button
                    disabled={loading}
                    onClick={() => redirect(card.id, card.category)}
                    className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please
                        Wait...
                      </>
                    ) : (
                      <span>GET</span>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}