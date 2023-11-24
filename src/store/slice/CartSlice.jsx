import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {}
export const fetchCart = createAsyncThunk('cart/fetchCart', async (_, { getState, dispatch }) => {
  // Api call over here of fetch products 
})


const productsSlice = createSlice({
  name: 'cart',
  initialState,
  extraReducers: {
    [fetchCart.fulfilled]: (state, action) => {
      state.cart = action.payload
    },
    [fetchCart.rejected]: (state, _) => {
      state.cart = []
    },
    [fetchCart.pending]: (state, _) => {
      state.cart = []
    },
  },
});

export const { } = productsSlice.actions

export default productsSlice.reducer