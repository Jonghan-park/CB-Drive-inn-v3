import React, { useState } from "react";
import "../SendEmail/SendEmail.css";

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
    try {
      const res = await fetch("/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName,
          userEmail,
          userMessage,
        }),
      });
      if (res.status === 400 || !res) {
        window.alert("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
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
