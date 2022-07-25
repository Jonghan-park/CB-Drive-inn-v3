import React, { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";
import { Store } from "../../Store";

const Menu = ({ items }) => {
  // Change the dispatch name to ctxDispatch
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const addToCartHandler = () => {
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...items, quantity: 1 },
    });
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
                <button onClick={addToCartHandler} className="cartBtn">
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
