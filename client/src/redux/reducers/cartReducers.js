import * as actionTypes from "../constants/cartConstants";

const INITIAL_STATE = {
  products: [], // id, title, desc, price, img
  cart: [], // id, title, desc, price, img, qty
  currentItem: null,
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Check exist item in cart
      const item = action.payload;
      const existItem = state.cart.find((item) =>
        item.product === action.payload.product ? true : false
      );
      return {
        ...state,
        cart: existItem
          ? state.cart.map((item) =>
              item.product === action.payload.product
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {};
    case actionTypes.ADJUST_QTY:
      return {};
    case actionTypes.LOAD_CURRENT_ITEM:
      return {};
    default:
      return state;
  }
};
