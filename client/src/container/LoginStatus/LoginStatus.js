import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";
import "../LoginStatus/LoginStatus.css";

function LoginStatus({ snsuser }) {
  const [user, setUser] = useState(null);

  const logout = () => {
    localStorage.removeItem("authToken");
    window.open("http://localhost:5000/auth/logout", "_self");
  };

  const getUser = () => {
    const token = localStorage.getItem("authToken");
    if (token) {
      const tokenUser = jwt_decode(token);
      setUser(tokenUser);
      if (!tokenUser) {
        localStorage.removeItem("authToken");
      }
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="loginStatus-container">
      {snsuser ? (
        <ul className="list">
          <li className="listItem">
            <img src={snsuser.photos[0].value} alt="" className="avatar" />
          </li>
          <li className="listItem">{snsuser.displayName}</li>
          <Link to="/mypage">
            <li className="listItem">My page</li>
          </Link>
          <button onClick={logout}>Logout</button>
        </ul>
      ) : (
        <div className="link-container">
          <Link className="link" to="/login">
            Login
          </Link>
          <Link className="link" to="/register">
            Register
          </Link>
        </div>
      )}
    </div>
  );
}

export default LoginStatus;
