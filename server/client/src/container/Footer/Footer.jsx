import React from "react";
import { BsInstagram, BsFacebook, BsYoutube } from "react-icons/bs";
import "./Footer.css";
import Iframe from "react-iframe";
import logo from "../../images/logo.png";

const Footer = () => (
  <footer>
    <div className="row">
      <div className="col">
        <img src={logo} alt="logo" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, sit
          accusamus.{" "}
        </p>
      </div>
      <div className="col">
        <h3>Find Our Restaurant</h3>
        <p>789 Northmount Dr NW, Calgary, AB T2L 0L6, Canada</p>
        <Iframe
          title="Address"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2506.40358432295!2d-114.0992623849479!3d51.08255894949828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716f78cf5eebf9%3A0x55fddbd72a7f1c85!2sC.B.%20Drive%20Inn!5e0!3m2!1sen!2skr!4v1652872981071!5m2!1sen!2skr"
          width="200"
          height="200"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></Iframe>
      </div>

      <div className="col">
        <div className="hours-operation">
          <h3>Hours Of Operation</h3>
          <p>Mon - Fri:</p>
          <p>10:00 A.M - 06:00 P.M</p>
          <p>Sat & Sun:</p>
          <p>11:00 A.M - 06:00 P.M</p>
        </div>

        <div className="contactUs-footer">
          <h3>Contact Us</h3>
          <ul className="socialMedia-footer">
            <li>
              <a href="#">
                <BsInstagram className="icon" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/cbdriveinn">
                <BsFacebook className="icon" />
              </a>
            </li>
            <li>
              <a href="#">
                <BsYoutube className="icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>
        copyright &copy;2022 CB Drive INN. designed by <span>Jonghan Park</span>
      </p>
    </div>
  </footer>
);

export default Footer;
