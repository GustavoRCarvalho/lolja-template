import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  cartModal: false,
  filterModal: false,
}

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    switchCartModal: (state, _) => {
      state.cartModal = !state.cartModal
    },
    switchFilterModal: (state, _) => {
      state.filterModal = !state.filterModal
    },
  },
})

export const { switchCartModal, switchFilterModal } = modalSlice.actions
export default modalSlice.reducer
