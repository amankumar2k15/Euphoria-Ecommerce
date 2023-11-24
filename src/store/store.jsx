import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./slice/headerSlice"
import userReducer from "./slice/userSlice"
import productReducer from "./slice/ProductSlice"
import cartReducer from "./slice/CartSlice"
import filterReducer from "./slice/filterSlice"




const rootReducer = combineReducers({
   header : headerReducer,
   user : userReducer,
   product : productReducer,
   cart : cartReducer,
   filter : filterReducer
});

// export default createStore(rootReducer);
export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});
