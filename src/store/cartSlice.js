import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  listCart: [],
}

function FindIndex(state, product) {
  return state.listCart.findIndex(({ id, size, color, gender }) => {
    return (
      product.id === id &&
      product.size === size &&
      product.color === color &&
      product.gender === gender
    )
  })
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setInitialCart: (state, { payload }) => {
      return {
        listCart: payload,
      }
    },
    addProductToCart: (state, { payload }) => {
      const index = FindIndex(state, payload)

      if (index > -1) {
        const savedProduct = state.listCart[index]
        state.listCart[index] = {
          ...savedProduct,
          quantity: savedProduct.quantity + payload.quantity,
        }
      } else {
        state.listCart = [...state.listCart, payload]
      }
    },
    removeProductFromCart: (state, { payload }) => {
      const index = FindIndex(state, payload)

      if (index > -1) {
        state.listCart.splice(index, 1)
      }
    },
    updateCartProductQuantity: (state, { payload }) => {
      const newQuantity = payload.newNumber.toString().replace(/\D/g, "")
      const index = FindIndex(state, payload.product)

      if (newQuantity >= 99) {
        state.listCart[index].quantity = 99
      } else if (newQuantity < 1) {
        state.listCart[index].quantity = 1
      } else {
        state.listCart[index].quantity = Number(newQuantity)
      }
    },
  },
})

export const {
  addProductToCart,
  removeProductFromCart,
  updateCartProductQuantity,
  setInitialCart,
} = cartSlice.actions
export default cartSlice.reducer
