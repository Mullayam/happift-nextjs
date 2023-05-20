import { Plus, Settings2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Icons } from "../icons"
import { SelectPaymentModeDialog } from "./PaymentMethodDialog"

export function WalletPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-10 rounded-full p-0">
          <Icons.ruppees w={24} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Your Wallet</h4>
            <p className="text-muted-foreground text-sm">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Current </Label>
              <span className="col-span-2 inline-flex h-8">
                <Icons.ruppees w={24} />
                1000
              </span>
            </div>
            <div className="grid grid-cols-3  items-center gap-4">
              <SelectPaymentModeDialog />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
