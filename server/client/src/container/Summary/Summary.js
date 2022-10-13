import axios from "axios";
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
  const { user } = userCtx;

  const plusTaxTotalAmount = () => {
    const tax = 5;
    const totalTax = Number(totalAmount) * (tax / 100);
    setTaxAmount(totalTax.toFixed(2));
    const plusTaxAmount = Number(taxAmount) + Number(totalAmount);
    setTotalPlusTax(plusTaxAmount.toFixed(2));
  };

  const checkoutHandler = async () => {
    try {
      await axios
        .post("http://localhost:5000/stripe/create-checkout-session", {
          items,
          totalAmount,
          user,
        })
        .then((res) => {
          if (res.data.url) {
            window.location.href = res.data.url;
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    plusTaxTotalAmount();
  }, [items.length]);

  return (
    <div>
      <h3 className="summaryTitle">Order Summary</h3>
      <div className="underline" />
      {user ? (
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
                    <div className="summary_amount">
                      <div className="order_amount">{amount}</div>
                      {amount < 2 ? "order" : "orders"}
                    </div>
                    <div className="summary_price">${price}</div>
                  </div>
                );
              })}

            <div className="summary_checkout">
              <hr className="summary-line" />
              <div className="subtotal">Sub-Total</div>
              <div className="total_amount">
                Order: ${totalAmount.toFixed(2)}
              </div>
              <div className="tax_amount">Tax: ${taxAmount}</div>
              <div className="total_amount_plus_tax">${totalPlusTax}</div>
              <button className="checkout-button" onClick={checkoutHandler}>
                Proceed to check out
              </button>
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
