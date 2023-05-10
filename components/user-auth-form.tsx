"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { toast } from "@/hooks/use-toast"
import axios from "axios"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLFormElement> {}

export type InputData = {
  firstName: string
  lastName: string
  phone: number
  email: string
  password: string
}
export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const FormType = props.typeof
  const [isLoading, setIsLoading] = React.useState(false)
  const [disabled, setDisabled] = React.useState(false)
  const [inputs, setInputs] = React.useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
  })

  const router = useRouter()
  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    toast({
      title: "Ruko Zara, Sabar Kro...",
    })
    setIsLoading(true)
    // Simulate a login request
    await new Promise((resolve) => setTimeout(resolve, 1000))
    FormType === "signin" ? await LoginHandle() : await SignUpHandle()
  }
  async function LoginHandle() {
    const { data } = await axios.post("/api/auth/login", {
      email: inputs.email,
      password: inputs.password,
    })
    if (data.success) {
      setTimeout(() => {
        router.push("/")
      }, 4000)
      return toast({
        title: "Redirecting...",
        description: data.message,
      })
    } else {
      return toast({
        title: "Something went wrong",
        description: data.message,
      })
    }
  }
  async function SignUpHandle() {
    const { data } = await axios.post("/api/auth/new", inputs)
    if (data.success) {
      setTimeout(() => {
        router.push("/")
      }, 4000)
      return toast({
        title: "Redirecting...",
        description: data.message,
      })
    } else {
      return toast({
        title: "Something went wrong",
        description: data.message,
      })
    }
  }
  function handleChangeInputValue(e: React.ChangeEvent<HTMLInputElement>) {
    setInputs({ ...inputs, [e.target.id]: e.target.value })
  }
  React.useEffect(() => {
    if (FormType === "signin") {
      if (inputs.email && inputs.password) {
        return setDisabled(false)
      }
      setDisabled(true)
    } else {
      if (inputs.firstName && inputs.phone && inputs.password && inputs.email) {
        return setDisabled(false)
      }
      setDisabled(true)
    }
  }, [FormType, inputs])
  return (
    <>
      <form
        onSubmit={(event) => onSubmit(event)}
        className={cn("grid gap-6", className)}
        {...props}
      >
        <div className="flex flex-col space-y-4">
          {FormType === "signup" ? (
            <>
              <div className="grid gap-2">
                <Input
                  id="firstName"
                  type="text"
                  autoCapitalize="none"
                  placeholder="First Name"
                  value={inputs.firstName}
                  onChange={handleChangeInputValue}
                />
              </div>
              <div className="grid gap-2">
                <Input
                  id="phone"
                  type="number"
                  placeholder="Enter your Phone"
                  value={inputs.phone}
                  onChange={handleChangeInputValue}
                />
              </div>
            </>
          ) : null}

          <div className="grid gap-2">
            <Label htmlFor="email" className="sr-only">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              placeholder="Enter your email address..."
              value={inputs.email}
              onChange={handleChangeInputValue}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email" className="sr-only">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Password"
              value={inputs.password}
              onChange={handleChangeInputValue}
            />
          </div>
          <Button type="submit" disabled={disabled}>
            {FormType === "signup" ? "Sign Up" : "Login"}{" "}
          </Button>
        </div>
      </form>
      <Separator />

      <Button type="submit" disabled={isLoading} variant="outline">
        <Icons.google className="mr-2 h-5 w-5" />
        Continue with Google
      </Button>
    </>
  )
}