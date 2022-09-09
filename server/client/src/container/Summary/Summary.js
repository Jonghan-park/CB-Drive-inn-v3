import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../App";
import CartContext from "../../store/cart-context";
import "./Summary.css";

const Summary = () => {
  const [taxAmount, setTaxAmount] = useState(0);
  const [totalPlusTax, setTotalPlusTax] = useState(0);
  const userCtx = useContext(UserContext);
  const cartCtx = useContext(CartContext);
  const { items, totalAmount } = cartCtx;

  const plusTaxTotalAmount = () => {
    const tax = 5;
    const totalTax = totalAmount * (tax / 100);
    setTaxAmount(totalTax);
    const plusTaxAmount = totalTax + totalAmount;
    setTotalPlusTax(plusTaxAmount.toFixed(2));
  };

  useEffect(() => {
    plusTaxTotalAmount();
  }, []);

  return (
    <div>
      <h3 className="summaryTitle">Order Summary</h3>
      <div className="underline" />
      {userCtx.user ? (
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
              <div className="tax_amount">Tax: ${taxAmount}</div>
              <div className="total-amount">${totalPlusTax}</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="summary">
          <h2>You cannot proceed next step without login</h2>
        </div>
      )}
    </div>
  );
};

export default Summary;
