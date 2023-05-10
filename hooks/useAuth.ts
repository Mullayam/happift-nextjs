import { useContext } from "react"
import axios from "axios"
import { removeCookies } from "cookies-next"

import { AuthenticationContext } from "../context/AuthContext"

const useAuth = () => {
  const { setAuthState } = useContext(AuthenticationContext)
  const signin = async (
    {
      email,
      password,
    }: {
      email: string
      password: string
    },
    handleClose: () => void
  ) => {
    try {
      setAuthState({ data: null, error: null, loading: true })
      const response = await axios.post(
        "http://localhost:3000/api/auth/signin",
        {
          email,
          password,
        }
      )
      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      setAuthState({
        data: response.data.message,
        error: null,
        loading: false,
      })
      handleClose()
    } catch (error: any) {
      setAuthState({
        data: null,
        error: error.response.data.message,
        loading: false,
      })
    }
  }
  const signup = async (
    {
      email,
      password,
      firstName,
      lastName,
      phone,
    }: {
      email: string
      password: string
      firstName: string
      lastName: string

      phone: string
    },
    handleClose: () => void
  ) => {
    try {
      setAuthState({ data: null, error: null, loading: true })
      const response = await axios.post(
        "http://localhost:3000/api/auth/signup",
        {
          email,
          password,
          firstName,
          lastName,
          phone,
        }
      )
      console.log(response.data.success)
      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      setAuthState({
        data: response.data.message,
        error: null,
        loading: false,
      })
      handleClose()
    } catch (error: any) {
      setAuthState({
        data: null,
        error: error.message || error.response.data.message,
        loading: false,
      })
    }
  }
  const signout = () => {
    removeCookies("jwt")
    setAuthState({
      data: null,
      error: null,
      loading: false,
    })
  }
  return { signin, signup, signout }
}

export default useAuth
