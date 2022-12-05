import { createContext } from "react";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Provider } from "react-redux";
import { store } from "./store/store";
import jwt_decode from "jwt-decode";
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
import CartProvider from "./store/CartProvider";
import Summary from "./container/Summary/Summary";
import Success from "./container/Success/Success";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get("http://localhost:5000/auth/login/success");
        localStorage.setItem("authToken", res.token);
        setUser(res.user);
      } catch (error) {
        console.log(error);
      }
    };
    const isLoggedIn = () => {
      const token = localStorage.getItem("authToken");
      if (token) {
        const tokenUser = jwt_decode(token);
        setUser(tokenUser);
        if (!tokenUser) {
          localStorage.removeItem("authToken");
        }
      }
    };

    getUser();
    isLoggedIn();
  }, []);

  return (
    <div className="backgroundColor">
      <Router>
        <Provider store={store}>
          <CartProvider>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              draggable
              theme="dark"
            />
            <Navbar />
            <UserContext.Provider value={{ user, setUser }}>
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
                <Route path="/success" element={<Success />} />
              </Routes>
            </UserContext.Provider>
            <Footer />
          </CartProvider>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
