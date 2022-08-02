import React, { useContext } from "react";
import { UserContext } from "../../App";
import "./MyPage.css";

function MyPage() {
  const user = useContext(UserContext);

  return (
    <>
      <div className="myPage">
        <h3 className="myPageTitle">My Page</h3>
        <div className="underline" />
        {user.user.displayName ? (
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
            <h2>Hello, {user.user.name}!</h2>
            <h3>Your Email:</h3>
            <h4 className="userEmail">{user.user.email}</h4>
            <div className="myPagePic">
              <img src={user.user.pic} alt="avatar in my page" />
            </div>
            <button type="submit" className="submit">
              Change the profile
            </button>
          </form>
        )}
      </div>
    </>
  );
}

export default MyPage;
