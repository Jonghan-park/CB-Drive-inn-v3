import React, { useState, useContext } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "../../data/data";
import "../MenuItem/MenuStyle.css";
import CartContext from "../../store/cart-context";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const Menus = (props) => {
  const cartCtx = useContext(CartContext);
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  const addItemToCart = (id, title, price) => {
    cartCtx.addItem({
      id,
      title: title,
      amount: 1,
      price: price,
    });
    console.log(title, price);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h1>menu</h1>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} onAddToCart={addItemToCart} />
      </section>
    </main>
  );
};

export default Menus;
