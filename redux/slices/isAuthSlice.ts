import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper"

import { AuthenticationDataType } from "../../types/userAuth"

export interface AuthenticationState {
  isAuth: boolean
  data?: AuthenticationDataType | null
  push: string
}
const initialState: AuthenticationState = {
  isAuth: false,
  data: null,
  push: "",
}
export const Auth = createSlice({
  name: "isAuthenticated",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.isAuth = action.payload
    },
    setUserData: (state, action) => {
      state.data = action.payload
    },
    setPush: (state, action) => {
      state.push = action.payload
    },
  },
})
export const { setAuth, setUserData, setPush } = Auth.actions
export const AuthState = (state: AuthenticationState) => state.isAuth
export default Auth.reducer