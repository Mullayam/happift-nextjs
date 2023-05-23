import type { AppProps } from "next/app"
import { Inter as FontSans } from "@next/font/google"
import { ThemeProvider } from "next-themes"
import { Provider } from "react-redux"

import { Toaster } from "@/components/ui/toaster"
import { store } from "../redux/store"
import "@/styles/globals.css"
import { AuthContextProvider } from "@/hooks/useCustomHooks"

import { Spinner } from "@/components/spinner"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <Toaster />
      <style jsx global>{`
        :root {
          --font-sans: ${fontSans.style.fontFamily};
        }
      `}</style>

      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Provider store={store}>
          <AuthContextProvider>
            <Component {...pageProps} />
          </AuthContextProvider>
        </Provider>
      </ThemeProvider>
    </>
  )
}
