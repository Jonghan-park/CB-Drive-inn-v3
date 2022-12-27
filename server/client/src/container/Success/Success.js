import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import "./Success.css";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../features/cart/cartSlice";

const Success = () => {
  const [customerName, setCustomerName] = useState("");
  const search = useLocation().search;
  const sessionId = new URLSearchParams(search).get("session_id");

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const saveOrder = async () => {
    try {
      await axios.post(
        "https://cb-drive-inn-ks9s.onrender.com/stripe/order/save",
        user.id
      );
    } catch (error) {
      console.log(error);
    }
  };

  const getCustomer = async () => {
    try {
      const response = await axios.get(
        `https://cb-drive-inn-ks9s.onrender.com/stripe/order/success?session_id=${sessionId}`
      );
      const data = await response.data;
      if (data.customer && data.session.payment_status === "paid") {
        saveOrder();
        setCustomerName(data.customer.name);
        dispatch(clearCart());
        localStorage.removeItem("cartItems");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (sessionId) {
      getCustomer();
    }
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
