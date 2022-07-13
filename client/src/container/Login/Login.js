import React, { useState, useEffect } from "react";

import axios from "axios";
import "../Login/Login.css";
import Google from "../../images/google.png";
import Github from "../../images/github.png";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // useEffect(() => {
  //   if (localStorage.getItem("authToken")) {
  //     navigate("/");
  //   }
  // }, []);

  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  const github = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/user/login", {
        email,
        password,
      });
      console.log(data);
      localStorage.setItem("authToken", data.token);
      alert("Login Successful");
      navigate("/");
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
      <h3 className="loginTitle">Login</h3>
      <div className="underline" />
      <div className="wrapper">
        {error && <span>{error}</span>}
        <div className="left">
          <div className="google-btn" onClick={google}>
            <div className="google-icon-wrapper">
              <img src={Google} alt="google" className="icon" />
            </div>
            <p className="btn-text">Sign in with Google</p>
          </div>
          <div className="github-btn" onClick={github}>
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
          <form onSubmit={loginHandler}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              required
              id="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              required
              id="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="submit">Login</button>
            <span>
              Don't have an account? <Link to="/register">Register</Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
