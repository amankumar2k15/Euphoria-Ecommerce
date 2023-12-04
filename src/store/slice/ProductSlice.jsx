import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductGetService } from "../../service/api.service";


const initialState = {
  products: []
}
export const fetchProducts = createAsyncThunk('products/fetchProducts', async (_, { getState, dispatch }) => {
  // Api call over here of fetch products 
  const response = await ProductGetService().then((res)=>{
  console.log(res);
  const data = res.data
  return {
    data
  }
  }).catch((err)=>{
    console.log(err);
  })

  return response
})


const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: {
    [fetchProducts.fulfilled]: (state, action) => {
      state.products = action.payload.data
    },
    [fetchProducts.rejected]: (state, action) => {
      state.products = []
    },
    [fetchProducts.pending]: (state, action) => {
      state.products = []
    },
  },
});



export const { } = productsSlice.actions

export default productsSlice.reducer