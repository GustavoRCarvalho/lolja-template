import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  listCart: new Map([]),
}

function constructKey(product) {
  return `${product.id}-${product.size}-${product.color}-${product.gender}`
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setInitialCart: (state, { payload }) => {
      for (const product of payload) {
        const key = constructKey(product)
        state.listCart.set(key, product)
      }
    },
    addProductToCart: (state, { payload }) => {
      const key = constructKey(payload)

      const savedProduct = state.listCart.get(key) || payload
      let quantity = payload.quantity

      if (state.listCart.has(key)) {
        quantity += savedProduct?.quantity
      }
      state.listCart.set(key, {
        ...savedProduct,
        quantity: quantity,
      })
    },
    removeProductFromCart: (state, { payload }) => {
      const key = constructKey(payload)

      state.listCart.delete(key)
    },
    updateCartProductQuantity: (state, { payload }) => {
      const newQuantity = Number(
        payload.newNumber.toString().replace(/\D/g, "")
      )

      const key = constructKey(payload.product)
      const savedProduct = state.listCart.get(key)

      let quantity = newQuantity
      if (newQuantity >= 99) {
        quantity = 99
      } else if (newQuantity < 1) {
        quantity = 1
      }

      state.listCart.set(key, {
        ...savedProduct,
        quantity: quantity,
      })
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
