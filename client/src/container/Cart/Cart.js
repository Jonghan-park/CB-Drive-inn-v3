import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import "./Cart.css";

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;

  const cartItemDecrementHandler = (id) => {
    cartCtx.decrementItem(id);
  };

  const cartItemIncrementHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  return (
    <div className="cart">
      <div className="cart-container">
        <div className="cart-header">
          <h3 className="cart-heading">Order Cart</h3>
        </div>

        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onRemove={cartItemDecrementHandler.bind(null, item.id)}
            onAdd={cartItemIncrementHandler.bind(null, item)}
          />
        ))}
        <h1>${totalAmount}</h1>
      </div>
    </div>
  );
};

export default Cart;
