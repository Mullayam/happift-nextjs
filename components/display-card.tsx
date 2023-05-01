import Image from "next/image"
import { useRouter } from "next/router"
import { Loader2, Podcast } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent } from "@/components/ui/tabs"

interface Album {
  id: string
  name: string
  cover: string
}
const listenNowAlbums: Album[] = [
  {
    id: "a8 a5 feas eeb 8b348656c43895",
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
export default function DisplayCard({worth}:{worth:string}) {
  const router = useRouter()
  const loading = false
  function redirect(id: string): any {
    router.push(`/payment/${id}/order-process`)
  }
  return (
    <Tabs defaultValue="music" className="h-full space-y-6">
      <TabsContent value="music" className="border-none p-0">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">
              Gift Card Available For {worth}
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Top picks for you. Updated daily.
            </p>
          </div>
        </div>
        <Separator className="my-4" />
        <div className="relative">
          <div className="relative flex space-x-4">
            {listenNowAlbums.map((album) => {
              return (
                <div key={album.id}>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Image
                        src={album.cover}
                        alt={album.name}
                        width={300}
                        height={100}
                        className="cursor-pointer object-cover transition-all hover:scale-110"
                      />
                    </HoverCardTrigger>
                    <HoverCardContent className="w-70 bg-teal-400 shadow-xl">
                      <div className="flex justify-between space-x-4">
                        <div className="space-y-1">
                          <h4 className="text-sm font-semibold">
                            <Button
                              disabled={loading}
                              onClick={() => redirect(album.id)}
                              className="cursor-pointer bg-orange-600"
                            >
                              {loading ? (
                                <>
                                  {" "}
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
                              Starting Price:{" "}
                              <Badge variant="destructive">100</Badge>
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
        </div>
      </TabsContent>
      <TabsContent
        value="podcasts"
        className="h-full flex-col border-none p-0 data-[state=active]:flex"
      >
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">
              New Episodes
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Your favorite podcasts. Updated daily.
            </p>
          </div>
        </div>
        <Separator className="my-4" />
        <div className="flex h-[450px] shrink-0 items-center justify-center rounded-md border border-dashed border-slate-200 dark:border-slate-700">
          <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
            <Podcast className="h-10 w-10 text-slate-400" />
            <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-slate-50">
              No episodes added
            </h3>
            <p className="mb-4 mt-2 text-sm text-slate-500 dark:text-slate-400">
              You have not added any podcasts. Add one below.
            </p>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  )
}
