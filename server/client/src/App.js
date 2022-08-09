import { createContext } from "react";
import { useState, useEffect } from "react";
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

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("https://cb-drive-inn.herokuapp.com/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          localStorage.setItem("authToken", resObject.token);
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const isLoggedIn = async () => {
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
        <CartProvider>
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
            </Routes>
          </UserContext.Provider>
          <Footer />
        </CartProvider>
      </Router>
    </div>
  );
}

export default App;
