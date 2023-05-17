import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper"

import { AuthenticationDataType } from "../../types/userAuth"

export interface AuthenticationState {
  isAuth: boolean
  data?: AuthenticationDataType | null
}
const initialState: AuthenticationState = {
  isAuth: false,
  data: null,
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
  },
})
export const { setAuth, setUserData } = Auth.actions
export const AuthState = (state: AuthenticationState) => state.isAuth
export default Auth.reducer