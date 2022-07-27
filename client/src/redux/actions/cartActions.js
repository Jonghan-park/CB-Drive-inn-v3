import * as actionTypes from "../constants/cartConstants";
export const addToCart = (menuId) => {
  return {
    tpye: actionTypes.ADD_TO_CART,
    payload: {
      id: menuId,
    },
  };
};
export const removeFromCart = (menuId) => {
  return {
    tpye: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: menuId,
    },
  };
};
export const adjustQty = (menuId, value) => {
  return {
    tpye: actionTypes.ADJUST_QTY,
    payload: {
      id: menuId,
      qty: value,
    },
  };
};

export const loadCurrentItem = (item) => {
  return {
    tpye: actionTypes.LOAD_CURRENT_ITEM,
    payload: item,
  };
};
