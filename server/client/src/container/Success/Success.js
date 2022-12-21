import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
      const { data } = await response.data;
      if (data.customer && data.session.payment_status === "paid") {
        console.log(data);
        setCustomerName(data.customer.name);

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

      <Link to="/viewOrders">
        <button className="checkout-button">View Orders</button>
      </Link>
    </div>
  );
};

export default Success;
