import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./MyPage.css";

function MyPage() {
  const { user } = useSelector((state) => state.user);
  return (
    <>
      <div className="myPage">
        <h3 className="myPageTitle">My Page</h3>
        <div className="underline" />
        {user.displayName ? (
          <form className="myPage-form">
            <h2>Hello, {user.user.displayName}!</h2>
            <div className="myPagePic">
              <img src={user.user.photos[0].value} alt="avatar in my page" />
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
                <button type="submit" className="submit">
                  Change your picture
                </button>
              </div>
              <div className="myOrders">
                <Link to="/viewOrders">
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
