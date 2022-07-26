import React, { useState, useEffect, useContext } from "react";
import jwt_decode from "jwt-decode";
import { Badge } from "react-bootstrap";

import { Link } from "react-router-dom";
import "../LoginStatus/LoginStatus.css";

function LoginStatus() {
  const [user, setUser] = useState(null);

  const logout = () => {
    localStorage.removeItem("authToken");
    window.open("http://localhost:5000/auth/logout", "_self");
  };

  const getUser = async () => {
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
      {/* <ul className="cart-box">
        <Link to="/cart" className="cart-link">
          Cart
          {cart.cartItems.length > 0 && (
            <Badge pill bg="danger">
              {cart.cartItems.length}
            </Badge>
          )}
        </Link>
      </ul> */}

      {user ? (
        <ul className="loginStatus-list">
          <li className="loginStatus-listItem">
            <img src={user.pic} alt="" className="avatar" />
          </li>
          <li className="loginStatus-listItem">{user.name}</li>

          <li className="loginStatus-listItem">
            <Link to="/user/mypage" className="mypage-link">
              My page
            </Link>
          </li>

          <button className="logout-btn" onClick={logout}>
            Logout
          </button>
        </ul>
      ) : (
        <div className="loginstatus-link-container">
          <Link className="loginstatus-link" to="/login">
            Login
          </Link>
          <Link className="loginstatus-link" to="/register">
            Register
          </Link>
        </div>
      )}
    </div>
  );
}

export default LoginStatus;
