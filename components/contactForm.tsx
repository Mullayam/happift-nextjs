"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { toast } from "@/hooks/use-toast"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLFormElement> {}

export default function ContactUsForm({
  className,
  ...props
}: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState(false)
  const router = useRouter()

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setIsLoading(true)

    // Simulate a login request
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // setTimeout(() => {
    //   router.push("/")
    // }, 5000)

    return toast({
      title: "Check your email",
      description: "We sent you a login link. Be sure to check your spam too.",
    })
  }

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-md px-4 py-8 lg:py-16">
          <h1 className="mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Contact Us
          </h1>
          <p className="mb-8 text-center font-light text-gray-500 dark:text-gray-400 sm:text-xl lg:mb-16">
            Got a technical issue? Want to send feedback about a feature? Need
            details about our Business plan? Let us know.
          </p>
          <form
            onSubmit={(event) => onSubmit(event)}
            className={cn("space-y-8", className)}
            {...props}
          >
            <div>
              <Label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Email
              </Label>
              <Input
                id="email"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                placeholder="Enter your email address..."
                disabled={isLoading}
                className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
                defaultValue="demo@example.com"
              />
            </div>

            <div className="grid w-full gap-1.5">
              <Label htmlFor="message-2">Your Message</Label>
              <Textarea placeholder="Type your message here." id="message-2" />
              <p className="text-muted-foreground text-sm">
                Your message will be Forward to the support team.
              </p>
            </div>
            <Button type="submit" disabled={isLoading}>
              Send Message
            </Button>
          </form>
        </div>
      </section>
    </>
  )
}
