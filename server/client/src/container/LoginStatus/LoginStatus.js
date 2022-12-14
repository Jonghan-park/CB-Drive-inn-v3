import React, { useEffect } from "react";
import jwt_decode from "jwt-decode";

import { Link, useNavigate } from "react-router-dom";
import "./LoginStatus.css";
import { useDispatch, useSelector } from "react-redux";
import { userLogout, setUser, userLogin } from "../../features/user/userSlice";
import { toast } from "react-toastify";

function LoginStatus() {
  const { cartItems } = useSelector((state) => state.cart);
  const { isLogin, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("authToken");
    dispatch(userLogout());
    navigate("/");
    toast.success("Logout Successful");
  };

  const getUser = async () => {
    const token = localStorage.getItem("authToken");
    if (token) {
      const tokenUser = jwt_decode(token);
      dispatch(setUser(tokenUser));
      dispatch(userLogin());

      if (!tokenUser) {
        localStorage.removeItem("authToken");
      }
    } else {
      setUser(null);
    }
  };

  useEffect(() => {
    getUser();
  }, [isLogin]);

  return (
    <div className="loginStatus-container">
      <ul className="cart-box">
        <Link to="/cart" className="cart-link">
          Cart
          {cartItems.length > 0 && (
            <span className="cart-badge">{cartItems.length}</span>
          )}
        </Link>
      </ul>

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
