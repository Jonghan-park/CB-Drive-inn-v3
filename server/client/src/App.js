import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useDispatch } from "react-redux";

import { setCart } from "./features/cart/cartSlice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./container/Footer/Footer";
import Main from "./container/Main/Main";
import Contact from "./container/Contact/Contact";
import About from "./container/About/About";
import Cart from "./container/Cart/Cart";
import Menu from "./components/MenuItem/Menus";
import Login from "./container/Login/Login";
import Register from "./container/Register/Register";
import LoginStatus from "./container/LoginStatus/LoginStatus";
import Mypage from "./container/MyPage/MyPage";

import Summary from "./container/Summary/Summary";
import Success from "./container/Success/Success";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get("http://localhost:5000/auth/login/success");
        localStorage.setItem("authToken", res.token);
      } catch (error) {
        console.log(error);
      }
    };
    const getCart = () => {
      let cartItemFromLocal = [];
      if (localStorage.getItem("cartItems") !== []) {
        cartItemFromLocal = JSON.parse(localStorage.getItem("cartItems"));
      }
      dispatch(setCart(cartItemFromLocal));
    };

    if (localStorage.getItem("cartItems")) {
      getCart();
    }
    getUser();
  }, []);

  return (
    <div className="backgroundColor">
      <Router>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          draggable
          theme="dark"
        />
        <Navbar />
        <LoginStatus />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user/mypage" element={<Mypage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/summary" element={<Summary />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/stripe/order/success" element={<Success />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
