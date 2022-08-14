import React, { useState, useEffect, useContext } from "react";
import CartContext from "../../store/cart-context";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./ScrollDownCart.css";

const ScrollDownCart = () => {
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const [showTopBtn, setShowTopBtn] = useState(false);

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

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
              <div className="item_num_of_cart">{numberOfCartItems}</div>
              <FaShoppingCart />
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ScrollDownCart;
