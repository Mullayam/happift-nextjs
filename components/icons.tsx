import Image from "next/image";
import GoogleImg from "@/public/google.png";
import Logo from "@/public/logo3.png";
import { Laptop, Moon, SunMedium, Twitter, type Icon as LucideIcon } from "lucide-react";





export type Icon = LucideIcon

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  laptop: Laptop,
  twitter: Twitter,
  logo: (props) => (
    <Image {...props} src={Logo} width="48" height="48" alt="Happift" />
  ),
  google: (props) => (
    <Image
      {...props}
      src={GoogleImg}
      width="24"
      height="24"
      alt="Login with Google"
    />
  ),
}