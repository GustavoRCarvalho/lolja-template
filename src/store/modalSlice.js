import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  cartModal: false,
}

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    switchCartModal: (state, _) => {
      state.cartModal = !state.cartModal
    },
  },
})

export const { switchCartModal } = modalSlice.actions
export default modalSlice.reducer
