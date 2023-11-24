import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



const initialState = {}
export const userDetails = createAsyncThunk('user/userDetails', async (_, { getState, dispatch }) => {
    // API call over here 
})


const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [userDetails.fulfilled]: (state, action) => {
      state.user = action.payload
    },
    [userDetails.rejected]: (state, _) => {
      state.user = []
    },
    [userDetails.pending]: (state, _) => {
      state.user = []
    },
  },
});

export const { } = userSlice.actions

export default userSlice.reducer