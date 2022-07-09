import React, { useState } from "react";
import axios from "axios";
import "../Login/Login.css";
import Google from "../../images/google.png";
import Github from "../../images/github.png";

function Login() {
  const [error, setError] = useState("");

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const inputChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  const github = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  };

  const registerSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/user/login";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className="login">
      <h3 className="loginTitle">Choose a Login Method</h3>
      <div className="wrapper">
        {error && <div>{error}</div>}
        <div className="left">
          <div className="loginButton google" onClick={google}>
            <img src={Google} alt="google" className="icon" />
            Google
          </div>
          <div className="loginButton github" onClick={github}>
            <img src={Github} alt="github" className="icon" />
            Github
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">Or</div>
          <div className="line" />
        </div>
        <div className="right">
          <form onSubmit={registerSubmit}>
            <input type="email" onChange={inputChange} placeholder="Email" />
            <input type="text" onChange={inputChange} placeholder="Password" />
            <button className="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
