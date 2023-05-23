import React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Card } from "@/components/card"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const Cards = [
  {
    value: "amazon",
    label: "Amazon",
  },
  {
    value: "flipkart",
    label: "Flipkart",
  },
  {
    value: "bigbasket",
    label: "BigBasket",
  },
]
export default function SellCards() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  return (
    <Card className="w-full">
      <div className="grid grid-cols-2 gap-4">
        <Card className="w-full">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-[200px] justify-between"
              >
                {value
                  ? Cards.find((card) => card.value === value)?.label
                  : "Select Vouchers..."}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandInput placeholder="Search Vouchers..." />
                <CommandEmpty>No Voucher found.</CommandEmpty>
                <CommandGroup>
                  {Cards.map((card) => (
                    <CommandItem
                      key={card.value}
                      onSelect={(currentValue) => {
                        setValue(
                          currentValue === value ? currentValue : currentValue
                        )
                        setOpen(false)
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value === card.value ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {card.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
        </Card>
        {value && <Card>dfds</Card>}
      </div>
      <div className="mt-10 flex items-center justify-center">
        {/* <CardSellingDetailsForm /> */}fgfg
      </div>
    </Card>
  )
}
