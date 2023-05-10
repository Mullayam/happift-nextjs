import { createSlice } from "@reduxjs/toolkit"

export interface LoadingState {
  isLoading: boolean
}
const initialState: LoadingState = {
  isLoading: false,
}
export const LoaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    setLoader: (state, action) => {
      state.isLoading = action.payload
    },
  },
})
export const { setLoader } = LoaderSlice.actions
export const loadingState = (state: LoadingState) => state.isLoading
export default LoaderSlice.reducer
