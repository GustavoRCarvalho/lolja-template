import { configureStore } from "@reduxjs/toolkit"

import cartReducer from "./cartSlice"
import modalReducer from "./modalSlice"
import filterReducer from "./filterSlice"

export default configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
    filter: filterReducer,
  },
})
