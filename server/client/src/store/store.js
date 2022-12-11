import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import orderReducer from "../features/order/orderSlice";
import userReducer from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    order: orderReducer,
    user: userReducer,
  },
});
