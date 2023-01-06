import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import { toast } from "react-toastify";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const registerHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-type": "application/json",
      },
    };
    if (password !== confirmpassword) {
      setPassword("");
      setConfirmPassword("");

      return toast.error("Passwords do not match");
    }
    try {
      await axios.post(
        "https://cb-drive-inn-client.onrender.com/user/register",
        { name, email, password },
        config
      );
      toast.success("Register Successfully");
      navigate("/login");
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  return (
    <div className="register">
      <h3 className="registerTitle">Register</h3>
      <div className="underline" />
      <form onSubmit={registerHandler} className="register-form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          required
          id="name"
          placeholder="Enter Your Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <label htmlFor="confirmpassword">Confirm Password:</label>
        <input
          type="password"
          required
          id="confirmpassword"
          placeholder="Confirm Password"
          value={confirmpassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button type="submit" className="submit">
          Register
        </button>
        <div className="link-to-login">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
