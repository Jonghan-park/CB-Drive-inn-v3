import React, { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./ScrollDownCart.css";
import { useSelector } from "react-redux";

const ScrollDownCart = () => {
  const { cartItems } = useSelector((state) => state.cart);
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
              <div className="item_num_of_cart">{cartItems.length}</div>
              <FaShoppingCart />
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ScrollDownCart;
