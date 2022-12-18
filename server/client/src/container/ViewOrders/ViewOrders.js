import React from "react";
import { useParams } from "react-router-dom";
import "./ViewOrders.css";

const ViewOrders = () => {
  const { id } = useParams();
  console.log(id);
  return <div>ViewOrders</div>;
};

export default ViewOrders;
