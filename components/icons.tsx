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
  success: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  ),
  delete: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  ),
}