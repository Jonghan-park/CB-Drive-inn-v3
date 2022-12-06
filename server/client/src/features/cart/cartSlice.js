import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const updateTotalAmount = state.totalAmount + action.payload.price;
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      const existingItem = state.cartItems[existingItemIndex];
      console.log(existingItem);
      let updatedItems = [];
      if (existingItem) {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount + action.payload.amount,
        };

        updatedItems = [...state.cartItems];

        updatedItems[existingItemIndex] = updatedItem;
      } else {
        updatedItems = state.cartItems.concat(action.payload);
      }

      state.cartItems = updatedItems;
      state.totalAmount = updateTotalAmount;
    },
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
