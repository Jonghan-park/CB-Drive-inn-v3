import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./Success.css";
import { useDispatch } from "react-redux";
import { clearCart } from "../../features/cart/cartSlice";

const Success = () => {
  const [customerName, setCustomerName] = useState("");
  const search = useLocation().search;
  const sessionId = new URLSearchParams(search).get("session_id");

  const dispatch = useDispatch();

  const getCustomer = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/stripe/order/success?session_id=${sessionId}`
      );

      if (
        response.data.customer &&
        response.data.session.payment_status === "paid"
      ) {
        setCustomerName(response.data.customer.name);
        dispatch(clearCart());
        localStorage.removeItem("cartItems");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCustomer();
  }, []);
  return (
    <div className="success_container">
      <i class="checkmark">✓</i>
      <h2>Payment successful !</h2>
      <h3>Thank you for your order, {customerName} </h3>
      <p>We are delighted to inform you that we received your payments</p>
      <button className="view_orders">View Orders</button>
    </div>
  );
};

export default Success;
