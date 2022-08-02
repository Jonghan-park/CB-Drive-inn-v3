import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import "./CartItem.css";

const CartItem = (props) => {
  const cartCtx = useContext(CartContext);

  const removeItemHandler = (item) => {
    cartCtx.removeItem(item);
  };

  const price = `$${props.item.price.toFixed(2)}`;
  return (
    <div className="cart-items">
      <div className="image-box">
        <img src={props.item.img} alt={props.item.title} />
      </div>
      <div className="cart-about">
        <h1 className="cart-title">{props.item.title}</h1>
      </div>
      <div className="cart-counter">
        <button
          className="cart-btn"
          disabled={props.item.amount === 1}
          onClick={props.onRemove}
        >
          -
        </button>
        <div className="cart-count">{props.item.amount}</div>
        <button className="cart-btn" onClick={props.onAdd}>
          +
        </button>
      </div>
      <div className="cart-prices">
        <div className="cart-amount">{price}</div>
        <div>
          <button
            className="cart-remove"
            onClick={() => removeItemHandler(props.item)}
            variant="light"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
