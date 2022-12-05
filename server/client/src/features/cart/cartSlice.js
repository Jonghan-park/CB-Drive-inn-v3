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
      console.log(existingItemIndex);
      const existingItem = state.cartItems[existingItemIndex];
      let updatedItems;
      if (existingItem) {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount + 1,
        };
        updatedItems = [...state.cartItems];
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        updatedItems = action.payload;
      }
      state.cartItems.push(updatedItems);
      state.totalAmount = updateTotalAmount;
    },
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
