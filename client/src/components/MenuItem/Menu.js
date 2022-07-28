import React, { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";

import { connect } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";

const Menu = ({ items, addToCart }) => {
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
                <button onClick={() => addToCart()} className="cartBtn">
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

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(Menu);
