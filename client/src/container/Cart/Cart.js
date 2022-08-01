import React, { useContext } from "react";
import CartContext from "../../store/cart-context";

const Cart = () => {
  const cartCtx = useContext(CartContext);
  return (
    <div>
      {cartCtx.items.map((item) => (
        <div>
          <h2>{item.title}</h2>
          <h2>{item.amount}</h2>
        </div>
      ))}
    </div>
  );
};

export default Cart;
