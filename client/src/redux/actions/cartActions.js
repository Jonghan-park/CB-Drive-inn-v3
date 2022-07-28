import * as actionTypes from "../constants/cartConstants";
import axios from "axios";
export const addToCart = async (menuId) => {
  const { data } = await axios.get(`/order/cart/${menuId}`);
  return {
    tpye: actionTypes.ADD_TO_CART,
    payload: {
      product: data._id,
      name: data.name,
      imageUrl: data.imageUrl,
      price: data.price,
      countInStock: data.countInStock,
      qty: 0,
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
