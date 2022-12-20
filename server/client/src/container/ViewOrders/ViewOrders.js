import React from "react";
import { useSelector } from "react-redux";
import "./ViewOrders.css";

const ViewOrders = () => {
  const { isLogin, user } = useSelector((state) => state.user);
  return (
    <div className="">
      {isLogin ? <div>ViewOrders</div> : <div>You are not logined.</div>}
    </div>
  );
};

export default ViewOrders;
