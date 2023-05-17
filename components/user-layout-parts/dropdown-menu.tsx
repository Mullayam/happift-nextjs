import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { toast } from "@/hooks/use-toast"
import { setAuth, setUserData } from "@/redux/slices/isAuthSlice"
import { useAppDispatch } from "@/redux/store"
import { deleteCookie } from "cookies-next"
import {
  CreditCard,
  Keyboard,
  LogOut,
  Mail,
  MessageSquare,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const UserMenu = [
  {
    id: 1,
    icon: <User className="mr-2 h-4 w-4" />,
    href: "/user/my-account",
    label: "My Profile",
    rsc: "",
  },

  {
    id: 2,
    icon: <User className="mr-2 h-4 w-4" />,
    href: "/user/my-listings",

    label: "My Listing",
    rsc: "",
  },
  {
    id: 5,
    icon: <Keyboard className="mr-2 h-4 w-4" />,
    href: "/user/my-orders",

    label: "My Orders",
    rsc: "",
  },
  {
    id: 8,
    icon: <Keyboard className="mr-2 h-4 w-4" />,
    href: "/user/payout-details",

    label: "Payouts",
    rsc: "",
  },
  {
    id: 50,
    icon: <CreditCard className="mr-2 h-4 w-4" />,
    href: "/user/wallet",

    label: "My Wallet",
    rsc: "",
  },
]
export default function UserDropdownMenu() {
  const router = useRouter()
  const dispatch = useAppDispatch()
  async function handleLogout() {
    deleteCookie("access_token")
    dispatch(setAuth(false))
    dispatch(setUserData(null))
    toast({
      title: "Logout Successfully",
    })
    router.push("/")
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="" />
            <AvatarFallback>MJ</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {UserMenu.map((item) => {
            return (
              <DropdownMenuItem key={item.id}>
                {item.icon}
                <Link href={item.href}> {item.label}</Link>
                <DropdownMenuShortcut> {item.rsc}</DropdownMenuShortcut>
              </DropdownMenuItem>
            )
          })}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <Link href={"/n/"}>Settings</Link>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <UserPlus className="mr-2 h-4 w-4" />
              <Link href={"/n/"}>Invite users</Link>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent forceMount>
                <DropdownMenuItem>
                  <Mail className="mr-2 h-4 w-4" />
                  <Link href={"/n/"}>Email</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  <Link href={"/n/"}>Message</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  <Link href={"/n/"}>More...</Link>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          <span onClick={handleLogout}>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
