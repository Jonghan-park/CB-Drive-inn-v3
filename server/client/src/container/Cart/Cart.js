import React, { useState, useContext } from "react";
import CartContext from "../../store/cart-context";
import { UserContext } from "../../App";
import CartItem from "./CartItem";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const userCtx = useContext(UserContext);
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
        <div className="cart-items">
          {cartCtx.items.length === 0 ? (
            <h3 className="empty-msg">
              Your cart is empty. <Link to="/menu">Go to menu</Link>
            </h3>
          ) : (
            cartCtx.items.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onRemove={cartItemDecrementHandler.bind(null, item.id)}
                onAdd={cartItemIncrementHandler.bind(null, item)}
              />
            ))
          )}
        </div>
        <hr className="cart-line" />
        <div className="cart-checkout">
          <div className="checkout_box">
            <div className="subtotal">Sub-Total</div>
            <div className="total-amount">${totalAmount}</div>
            {userCtx.user ? (
              <Link to="/cart/summary" className="checkout-button">
                Checkout
              </Link>
            ) : (
              <Link to="/login" className="checkout-button">
                Login to checkout
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
