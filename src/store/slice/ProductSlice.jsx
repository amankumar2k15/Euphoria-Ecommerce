import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {}
export const fetchProducts = createAsyncThunk('products/fetchProducts', async (_, { getState, dispatch }) => {
 // Api call over here of fetch products 
})


const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: {
    [fetchProducts.fulfilled]: (state, action) => {
      state.products = action.payload
    },
    [fetchProducts.rejected]: (state, _) => {
      state.products = []
    },
    [fetchProducts.pending]: (state, _) => {
      state.products = []
    },
  },
});

export const { } = productsSlice.actions

export default productsSlice.reducer