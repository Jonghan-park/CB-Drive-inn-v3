import React, { useState, useEffect } from "react";

import axios from "axios";
import "./Login.css";
import Google from "../../images/google.png";
import Github from "../../images/github.png";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setUser, userLogin } from "../../features/user/userSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      navigate("/");
    }
  }, []);

  const google = () => {
    try {
      window.open(
        "https://cb-drive-inn-ks9s.onrender.com/auth/google",
        "_self"
      );
    } catch (error) {
      console.log(error);
    }
  };

  const github = () => {
    window.open("https://cb-drive-inn-ks9s.onrender.com/auth/github", "_self");
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://cb-drive-inn-ks9s.onrender.com/user/login",
        {
          email,
          password,
        }
      );
      if (data.token) {
        localStorage.setItem("authToken", data.token);
        navigate("/");
        // window.open("http://localhost:3000/", "_self");
        dispatch(userLogin());
        dispatch(setUser(data.user));
        toast.success("Login Successful");
      }
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        toast.error(error.response.data.message);
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
