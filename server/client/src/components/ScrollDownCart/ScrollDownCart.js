import React, { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./ScrollDownCart.css";

const ScrollDownCart = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  return (
    <div>
      {showTopBtn && (
        <div className="scroll_down_icon_container">
          <Link to="/cart">
            <div className="scroll_down_icon">
              <div className="item_num_of_cart">1</div>
              <FaShoppingCart />
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ScrollDownCart;
