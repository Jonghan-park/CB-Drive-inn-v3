import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { setUser, userLogin } from "../../features/user/userSlice";
import "./MyPage.css";

function MyPage() {
  const [nameFromOAuth, setNameFromOAuth] = useState("");
  const { isLogin, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const token = localStorage.getItem("authToken");

  const getUser = async () => {
    if (token) {
      const tokenUser = jwt_decode(token);
      dispatch(setUser(tokenUser));
      dispatch(userLogin());

      if (!tokenUser) {
        localStorage.removeItem("authToken");
      }
    } else {
      dispatch(setUser(null));
    }
  };

  if (!isLogin) {
    getUser();
  }

  return (
    <>
      <div className="myPage">
        <h3 className="myPageTitle">My Page</h3>
        <div className="underline" />
        {nameFromOAuth ? (
          <form className="myPage-form">
            <h2>Hello, {user.displayName}!</h2>
            <div className="myPagePic">
              <img src={user.photos[0].value} alt="avatar in my page" />
            </div>
            <button type="submit" className="submit">
              Order History
            </button>
          </form>
        ) : (
          <form className="myPage-form">
            <h2>Hello, {user.name}!</h2>
            <div className="myInfo">
              <div className="myEmail">
                <h3>Your Email:</h3>
                <h4 className="userEmail">{user.email}</h4>
              </div>
              <div className="myPagePic">
                <img src={user.pic} alt="avatar in my page" />
                <button type="submit" className="submit" disabled>
                  Change your picture
                </button>
              </div>
              <div className="myOrders">
                <Link to={`/viewOrders/${user.id}`}>
                  <button type="submit" className="submit">
                    View your orders
                  </button>
                </Link>
              </div>
            </div>
          </form>
        )}
      </div>
    </>
  );
}

export default MyPage;
