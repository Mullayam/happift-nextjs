import Image from "next/image";
import Hapiift from "@/public/fullLogo.png";
import GoogleImg from "@/public/google.png";
import Logo from "@/public/logo3.png";
import { Laptop, Moon, SunMedium, Twitter, type Icon as LucideIcon } from "lucide-react";





export type Icon = LucideIcon

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  laptop: Laptop,
  twitter: Twitter,
  happift: (props) => (
    <Image {...props} src={Hapiift} width="auto" height="auto" alt="Happift" />
  ),
  logo: (props) => (
    <Image src={Logo} {...props} width="48" height="48" alt="Happift" />
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