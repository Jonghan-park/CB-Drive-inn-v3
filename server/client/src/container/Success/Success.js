import React, { useEffect } from "react";
import axios from "axios";
import "./Success.css";
import { useSelector } from "react-redux";

const Success = () => {
  const { orderId } = useSelector((state) => state.order);
  const getCustomer = async () => {
    try {
      console.log(orderId);
      const data = await axios.get(
        "https://cb-drive-inn-ks9s.onrender.com/stripe/order/success"
      );
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
      <h3>Thank you for your order, </h3>
      <p>We are delighted to inform you that we received your payments</p>
      <button className="view_orders">View Orders</button>
    </div>
  );
};

export default Success;
