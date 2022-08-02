import React, { useState, useEffect } from "react";

import axios from "axios";
import "./Login.css";
import Google from "../../images/google.png";
import Github from "../../images/github.png";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      navigate("/");
    }
  }, []);

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
      window.open("http://localhost:3000/", "_self");
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
    <>
      <div className="login">
        <h3 className="loginTitle">Login</h3>
        <div className="underline" />
        <form className="login-form" onSubmit={loginHandler}>
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
          <button type="submit" className="submit">
            Login
          </button>
          <div className="link-to-register">
            Don't have an account? <Link to="/register">Register</Link>
          </div>
          <div className="social-media">
            {error && <span>{error}</span>}
            <ul>
              <li className="google-container" onClick={google}>
                <img src={Google} alt="google" />
              </li>
              <li className="github-container" onClick={github}>
                <img src={Github} alt="github" />
              </li>
            </ul>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
