import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import { connect, useDispatch, useSelector } from "react-redux";
import items from "../../data/data";
import "../MenuItem/MenuStyle.css";
import { getProducts as listProducts } from "../../redux/actions/productAction";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const Menus = () => {
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;
  console.log(products);
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

  useEffect(() => {
    dispatch(listProducts());
  }, []);

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h1>menu</h1>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.cart.products,
  };
};

export default connect(mapStateToProps)(Menus);
