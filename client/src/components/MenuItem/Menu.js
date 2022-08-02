import React, { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";
import CartContext from "../../store/cart-context";
import "./Menu.css";

const Menu = ({ items, onAddToCart }) => {
  const cartCtx = useContext(CartContext);

  const findItemById = (id) => {
    const { item } = items.findIndex((x) => x.id === id);
    console.log(item);
    return item;
  };

  const addToCart = (id, title, price, img) => {
    // const foundItem = findItemById(id);

    onAddToCart(id, title, price, img);
  };
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
                  onClick={() => addToCart(id, title, price, img)}
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
