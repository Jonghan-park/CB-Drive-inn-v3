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
      <h3 className="cartTitle">Order Cart</h3>
      <div className="underline" />
      <div className="cart-container">
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onRemove={cartItemDecrementHandler.bind(null, item.id)}
            onAdd={cartItemIncrementHandler.bind(null, item)}
          />
        ))}

        <hr className="cart-line" />
        <div className="cart-checkout">
          <div className="subtotal">Sub-Total</div>
          <div className="total-amount">${totalAmount}</div>
          <button className="checkout-button">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
