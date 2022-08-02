import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;

  const cartItemDecrementHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemIncrementHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  return (
    <div>
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
  );
};

export default Cart;
