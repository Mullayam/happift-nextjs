import type { AppProps } from "next/app"
import { Inter as FontSans } from "@next/font/google"
import { ThemeProvider } from "next-themes"
import { Provider, useSelector } from "react-redux"

import { Toaster } from "@/components/ui/toaster"
import { store } from "../redux/store"
import "@/styles/globals.css"
import { loadingState } from "@/redux/slices/loaderSlice"

import { Spinner } from "@/components/spinner"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export default function App({ Component, pageProps }: AppProps) {
  const isLoading = false
  // const Info = useSelector(loadingState)

  return (
    <>
      {isLoading && <Spinner />}
      <Toaster />
      <style jsx global>{`
        :root {
          --font-sans: ${fontSans.style.fontFamily};
        }
      `}</style>
      <Provider store={store}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  )
}
