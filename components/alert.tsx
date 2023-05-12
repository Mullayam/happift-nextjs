import { Terminal, Waves } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function Alerts({
  title = "Heads up!",
  info = "Pass information ",
}: {
  title?: string
  info?: string
}) {
  return (
    <Alert className="bg-red-400">
      <Terminal className="h-4 w-4" />
      <AlertTitle className="text-white">{title}</AlertTitle>
      <AlertDescription className="font-semibold text-black">
        {info}
      </AlertDescription>
    </Alert>
  )
}
