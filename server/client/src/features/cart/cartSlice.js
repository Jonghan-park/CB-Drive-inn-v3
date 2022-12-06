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
      localStorage.setItem("cartItems", JSON.stringify(state));
    },
    decrementItem: (state, action) => {
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cartItems[existingItemIndex].amount -= 1;
      state.totalAmount -= action.payload.price;
      localStorage.setItem("cartItems", JSON.stringify(state));
    },
    incrementItem: (state, action) => {
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cartItems[existingItemIndex].amount += 1;
      state.totalAmount += action.payload.price;
      localStorage.setItem("cartItems", JSON.stringify(state));
    },
    removeItem: (state, action) => {
      const updatedItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      const updateTotalAmount =
        state.totalAmount - action.payload.price * action.payload.amount;
      state.cartItems = updatedItems;
      state.totalAmount = updateTotalAmount;
      localStorage.setItem("cartItems", JSON.stringify(state));
    },
    setCart: (state, action) => {
      let cartFromLocal = [];
      cartFromLocal = action.payload.cartItems;
      const totalAmountFromLocal = action.payload.totalAmount;
      if (state.cartItems.length === 0) {
        state.cartItems = cartFromLocal;
        state.totalAmount = totalAmountFromLocal;
      }
    },
  },
});

export const { addItem, decrementItem, incrementItem, removeItem, setCart } =
  cartSlice.actions;

export default cartSlice.reducer;
