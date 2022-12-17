import React from "react";

import CartItem from "./CartItem";
import "./Cart.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Cart = () => {
  const { cartItems, totalAmount } = useSelector((state) => state.cart);
  const { isLogin } = useSelector((state) => state.user);
  const totalAmountInCart = `${totalAmount.toFixed(2)}`;

  return (
    <div className="cart">
      <h3 className="cartTitle">Order Cart</h3>
      <div className="underline" />
      <div className="cart-container">
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <h3 className="empty-msg">
              Your cart is empty. <Link to="/menu">Go to menu</Link>
            </h3>
          ) : (
            cartItems.map((item) => <CartItem key={item.id} item={item} />)
          )}
        </div>
        <hr className="cart-line" />
        <div className="cart-checkout">
          <div className="checkout_box">
            <div className="subtotal">Sub-Total</div>
            <div className="total-amount">${totalAmountInCart}</div>
            {isLogin ? (
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
