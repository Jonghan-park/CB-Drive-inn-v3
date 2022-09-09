import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import "./Summary.css";

const Summary = () => {
  const cartCtx = useContext(CartContext);
  const { items, totalAmount } = cartCtx;

  const plusTaxTotalAmount = () => {
    const tax = 5;
    const totalTax = totalAmount * (tax / 100);
    const plusTaxAmount = totalTax + totalAmount;
    return plusTaxAmount.toFixed(2);
  };

  return (
    <div>
      <h3 className="summaryTitle">Order Summary</h3>
      <div className="underline" />
      <div className="summary">
        <div className="order_summary_container_left">
          {items.length === 0 && <h2>No items</h2>}
          {items &&
            items.map((item) => {
              const { id, title, amount, price, img } = item;
              return (
                <div className="eachItem" key={id}>
                  <img src={img} />

                  <div className="summary_title">{title}</div>
                  <div className="summary_amount">{amount} ea</div>
                  <div className="summary_price">${price}</div>
                </div>
              );
            })}

          <div className="summary_checkout">
            <hr className="summary-line" />
            <div className="subtotal">Sub-Total</div>
            <div className="total-amount">${plusTaxTotalAmount()}</div>
          </div>
        </div>
        {/* <div className="order_summary_container_right">
          <form action="">
            <label htmlFor="">dddd</label>
            <input type="text" />
          </form>
        </div> */}
      </div>
    </div>
  );
};

export default Summary;
