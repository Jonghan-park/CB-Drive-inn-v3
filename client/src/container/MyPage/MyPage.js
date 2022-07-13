import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../App";
import axios from "axios";
import "./MyPage.css";

function MyPage() {
  const user = useContext(UserContext);

  return (
    <div className="myPage">
      <h3 className="myPageTitle">My Page</h3>
      <div className="underline" />
      <form className="myPage-form">
        <h2>Hello, {user.user.name}!</h2>
        <h3>Your Email:</h3>
        <h4>{user.user.email}</h4>
        <div className="myPagePic">
          <img src={user.user.pic} alt="avatar in my page" />
        </div>
        <button type="submit" className="submit">
          Change the profile
        </button>
      </form>
    </div>
  );
}

export default MyPage;
