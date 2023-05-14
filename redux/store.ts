import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"

import AuthSlice from "./slices/isAuthSlice"
// slices
import loaderSlice from "./slices/loaderSlice"

export const store = configureStore({
  reducer: {
    loader: loaderSlice,
    auth: AuthSlice,
  },
  devTools: true,
})
// export const StoreWrapper = createWrapper(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector