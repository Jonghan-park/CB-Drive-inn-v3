import React, { useState } from "react";
import { toast } from "react-toastify";
import "./SendEmail.css";

export default function SendEmail() {
  const [values, setValues] = useState({
    userName: "",
    userEmail: "",
    userMessage: "",
  });

  const handleChange = (n) => (e) => {
    setValues({ ...values, [n]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    const { userName, userEmail, userMessage } = values;

    await fetch("/contact/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName,
        userEmail,
        userMessage,
      }),
    })
      .then((res) => {
        toast("Thank you for sending a message!");
      })
      .catch((error) => {
        window.alert("Something went wrong");
      });
  };

  return (
    <div className="form-container">
      <form onSubmit={sendEmail}>
        <input
          type="text"
          name="name"
          value={values.userName}
          onChange={handleChange("userName")}
          placeholder="Your Full Name"
          required
        />
        <input
          type="email"
          name="email"
          value={values.userEmail}
          onChange={handleChange("userEmail")}
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          rows="7"
          value={values.userMessage}
          onChange={handleChange("userMessage")}
          placeholder="Your Message"
          required
        />
        <button type="submit" className="sendButton">
          Send Message
        </button>
      </form>
    </div>
  );
}
