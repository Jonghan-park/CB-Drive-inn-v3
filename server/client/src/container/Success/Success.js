import React, { useEffect } from "react";
import "./Success.css";

const Success = () => {
  console.log();
  return (
    <div className="success_container">
      <i class="checkmark">✓</i>
      <h2>Payment successful !</h2>
      <p>We are delighted to inform you that we received your payments</p>
      <button className="view_orders">View Orders</button>
    </div>
  );
};

export default Success;
