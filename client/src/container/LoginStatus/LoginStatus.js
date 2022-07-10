import React from "react";
import { Link } from "react-router-dom";
import "../LoginStatus/LoginStatus.css";

function LoginStatus({ user }) {
  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };

  const token = localStorage.getItem("authToken");
  return (
    <div className="loginStatus-container">
      {user ? (
        <ul className="list">
          <li className="listItem">
            <img src={user.photos[0].value} alt="" className="avatar" />
          </li>
          <li className="listItem">{user.displayName}</li>
          <li className="listItem" onClick={logout}>
            Logout
          </li>
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
