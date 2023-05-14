"use client"

import React, { createContext } from "react"

interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
}
interface State {
  loading: boolean
  error: string | null
  data: User | null
}
interface AuthState extends State {
  setAuthState: React.Dispatch<React.SetStateAction<State>>
}
let Auth
export const AuthenticationContext = createContext<AuthState>({
  loading: false,
  data: null,
  error: null,
  setAuthState: () => {},
})

export default function AuthContext({
  children,
}: {
  children: React.ReactNode
}) {
  const [authState, setAuthState] = React.useState<State>({
    loading: true,
    data: null,
    error: null,
  })

  return
}
