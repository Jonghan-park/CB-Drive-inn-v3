import React from "react";
import Iframe from "react-iframe";
import "./Location.css";

const Location = () => {
  return (
    <div className="location-container">
      <div className="title">
        <h1>Location</h1>
        <div className="underline" />
      </div>
      <Iframe
        className="location-iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2506.40358431753!2d-114.09925702051311!3d51.0825589495983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716f78cf5eebf9%3A0x55fddbd72a7f1c85!2sC.B.%20Drive%20Inn!5e0!3m2!1sen!2skr!4v1652932141298!5m2!1sen!2skr"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></Iframe>
    </div>
  );
};
export default Location;
