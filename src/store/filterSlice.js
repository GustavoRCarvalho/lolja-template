import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  filters: {},
  actualPage: 1,
}

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, { payload }) => {
      const filtersKeys = Object.keys(state.filters)
      if (filtersKeys.find((value) => value === payload)) {
        state.filters = {
          ...state.filters,
          [payload]: !state.filters[payload],
        }
      } else {
        state.filters = { ...state.filters, [payload]: true }
      }
    },
    setFilterRadio: (state, { payload }) => {
      state.filters = {
        ...state.filters,
        "MAIS RECENTES": false,
        "MAIS ANTIGOS": false,
        "MENOR PREÇO": false,
        "MAIOR PREÇO": false,
        [payload]: !state.filters[payload],
      }
    },
    setFilterPrice: (state, { payload }) => {
      state.filters = {
        ...state.filters,
        preço: payload,
      }
    },
    resetFilter: (state, _) => {
      state.filters = { preço: state.filters["preço"] }
    },
  },
})

export const { setFilter, setFilterRadio, setFilterPrice, resetFilter } =
  filterSlice.actions
export default filterSlice.reducer
