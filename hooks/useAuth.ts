import React, { useContext } from "react"
import axios from "axios"
import { getCookie, removeCookies } from "cookies-next"

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
  const currentUser = async () => {
    setAuthState({ data: null, error: null, loading: true })
    try {
      const access_token = getCookie("access_token")
      if (!access_token) {
        return setAuthState({
          data: null,
          error: "Please Login",
          loading: false,
        })
      }
      const response = await axios.get("http://localhost:3000/api/auth/me", {
        headers: {
          Authorization: "Bearer " + access_token,
        },
      })
      ;(axios.defaults.headers.common["Authorization"] =
        "Bearer " + access_token),
        setAuthState({
          data: response.data.message,
          error: null,
          loading: false,
        })
    } catch (error: any) {
      setAuthState({
        data: null,
        error: error.response.data.message,
        loading: false,
      })
    }
  }
  React.useEffect(() => {
    currentUser()
  }, [])
  return { signin, signup, signout }
}

export default useAuth
