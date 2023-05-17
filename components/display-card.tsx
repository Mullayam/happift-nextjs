import Image from "next/image"
import { useRouter } from "next/router"
import { Loader2 } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

interface Album {
  id: string
  name: string
  cover: string
}
const listenNowAlbums: Album[] = [
  {
    id: "a8a5feaseeb8b348656c43895",
    name: "Amazon Gift Voucher",
    cover:
      "https://az15297.vo.msecnd.net/images/rewards/rc/medium/AmazonPayIN_262x164.png",
  },
  {
    id: "a8 a5 fbafef 8b348656c43895",
    name: "Flipkart Gift Voucher",
    cover:
      "https://az15297.vo.msecnd.net/images/rewards/rc/medium/Flipkart_262x164.png",
  },
  {
    id: "a8 a5 faffab 8b348656c43895",
    name: "BigBasket Gift Voucher",
    cover:
      "https://az15297.vo.msecnd.net/images/rewards/rc/medium/bigbasket_262x164.png",
  },
  {
    id: "a8 a5 sdfb 8b348656c43895",
    name: "PVR Cinemas Gift Voucher",
    cover:
      "https://az15297.vo.msecnd.net/images/rewards/rc/medium/PVRCinemas_262x164.png",
  },
  {
    id: "a8 a5 sfdb 8b348656c43895",
    name: "BookMyShow Gift Voucher",
    cover:
      "https://az15297.vo.msecnd.net/images/rewards/rc/medium/CafeCoffeeDay_262x164.png",
  },
  {
    id: "a8 a5 fb ad8b348656c43895",
    name: "CoffeCafe Day Gift Voucher",
    cover:
      "https://az15297.vo.msecnd.net/images/rewards/rc/medium/CafeCoffeeDay_262x164.png",
  },
  {
    id: "a8 a5 fbdsa 8b348656c43895",
    name: "Croma Day Gift Voucher",
    cover:
      "https://az15297.vo.msecnd.net/images/rewards/rc/medium/Croma_262x164.png",
  },
]
export default function DisplayCard({ worth }: { worth: string }) {
  const router = useRouter()
  const loading = false
  function redirect(id: string): any {
    router.push(`/user/payment/${id}/confirm-purchase`)
  }
  return (
    <div className="flex flex-wrap">
      {listenNowAlbums.map((album) => {
        return (
          <div key={album.id}>
            <HoverCard>
              <HoverCardTrigger asChild>
                <div className="m-2">
                  <div>
                    <Image
                      src={album.cover}
                      alt={album.name}
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
                        onClick={() => redirect(album.id)}
                        className="cursor-pointer bg-orange-600"
                      >
                        {loading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                            Please Wait...
                          </>
                        ) : (
                          album.name
                        )}
                      </Button>
                    </h4>

                    <div className="flex items-center pt-2">
                      <span className="text-muted-foreground text-xs">
                        Stock Left:<Badge variant="destructive">14</Badge>
                        Starting Price: <Badge variant="destructive">100</Badge>
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
