import { configureStore } from "@reduxjs/toolkit"

import loaderSlice from "./slices/loaderSlice"

export const store = configureStore({
  reducer: {
    loader: loaderSlice,
  },
})
