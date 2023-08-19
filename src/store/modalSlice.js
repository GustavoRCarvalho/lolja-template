import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  cartModal: false,
  filterModal: false,
  menuModal: false,
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
    switchMenuModal: (state, _) => {
      state.menuModal = !state.menuModal
    },
  },
})

export const { switchCartModal, switchFilterModal, switchMenuModal } =
  modalSlice.actions
export default modalSlice.reducer
