import React from "react";
import { useDispatch } from "react-redux";
import {
  decrementItem,
  incrementItem,
  removeItem,
} from "../../features/cart/cartSlice";
import "./CartItem.css";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const price = `$${props.item.price.toFixed(2)}`;
  return (
    <div className="each_cart_items">
      <div className="image-box">
        <img src={props.item.img} alt={props.item.title} />
      </div>
      <div className="cart-about">
        <h1 className="cart-title">{props.item.title}</h1>
      </div>
      <div className="counter_price">
        <div className="cart-counter">
          <button
            className="cart-btn"
            disabled={props.item.amount === 1}
            onClick={() => dispatch(decrementItem(props.item))}
          >
            -
          </button>
          <div className="cart-count">{props.item.amount}</div>
          <button
            className="cart-btn"
            disabled={props.item.amount > 9}
            onClick={() => dispatch(incrementItem(props.item))}
          >
            +
          </button>
        </div>
        <div className="cart-prices">
          <div className="cart-amount">{price}</div>
          <div>
            <button
              className="cart-remove"
              onClick={() => dispatch(removeItem(props.item))}
              variant="light"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
