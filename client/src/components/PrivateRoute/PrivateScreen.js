import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function PrivateScreen() {
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");
  const navigation = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      navigation("/login");
    }

    const fetchPrivateData = async () => {
      const config = {
        header: {
          "Content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };
      try {
        const { data } = await axios("/private/mypage", config);
        setPrivateData(data.data);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not authorized please login");
      }
    };
    fetchPrivateData();
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    navigation("/login");
  };
  return error ? (
    <span className="error-message"> {error}</span>
  ) : (
    <>
      <div style={{ background: "green", color: "white" }}>{privateData}</div>
      <button onClick={logoutHandler}>Logout</button>
    </>
  );
}

export default PrivateScreen;
