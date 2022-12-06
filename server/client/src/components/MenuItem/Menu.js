import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addItem } from "../../features/cart/cartSlice";
import "./Menu.css";

const Menu = ({ items }) => {
  const dispatch = useDispatch();

  return (
    <div className="section-center">
      {items.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">{price}</h4>
              </header>
              <p className="item-text">{desc}</p>
              <div className="cart-icon-container">
                <button
                  onClick={() =>
                    dispatch(addItem({ id, title, amount: 1, price, img }))
                  }
                  className="cartBtn"
                >
                  <FaCartPlus className="cart-icon" />
                </button>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
