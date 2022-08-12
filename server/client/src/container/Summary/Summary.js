import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import "./Summary.css";

const Summary = () => {
  const cartCtx = useContext(CartContext);
  const { items, totalAmount } = cartCtx;

  return (
    <div className="summary">
      <h3 className="summaryTitle">Order Summary</h3>
      <div className="underline" />
      <div className="order_summary_container">
        {items.length === 0 && <h2>No items</h2>}
        {items &&
          items.map((item) => {
            const { id, title, amount, price, img } = item;
            return (
              <div className="eachItem" key={id}>
                <img src={img} />
                <div className="">
                  <div className="summary_title">{title}</div>
                  <div className="summary_amount">{amount}</div>
                  <div className="summary_price">{price}</div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Summary;
