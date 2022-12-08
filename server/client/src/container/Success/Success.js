import React, { useEffect } from "react";
import axios from "axios";
import "./Success.css";

const Success = () => {
  const getCustomer = async () => {
    try {
      const data = await axios.get(
        "http://localhost:5000/stripe/order/success"
      );
      console.log(data);
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
