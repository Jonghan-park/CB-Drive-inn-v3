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
      const updateTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;

      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.item.id
      );

      const existingItem = state.cartItems[existingItemIndex];
      let updatedItems;
      if (existingItem) {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount + action.item.amount,
        };
        updatedItems = [...state.cartItems];
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        updatedItems = state.cartItems.concat(action.item);
      }
      state.cartItems.push(updatedItems);
      state.totalAmount = updateTotalAmount;
    },
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
