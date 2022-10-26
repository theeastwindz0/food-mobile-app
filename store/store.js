import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "./slices/basketSlice";
import { restaurantSlice } from "./slices/restaurantSlice";

export const store = configureStore({
  reducer: { basket: basketSlice.reducer, restaurant: restaurantSlice.reducer },
});
 