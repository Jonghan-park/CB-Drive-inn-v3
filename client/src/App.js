import { createContext } from "react";
import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./container/Footer/Footer";
import Main from "./container/Main/Main";
import Contact from "./container/Contact/Contact";
import About from "./container/About/About";
import Menu from "./components/MenuItem/Menus";
import Login from "./container/Login/Login";
import Register from "./container/Register/Register";
import LoginStatus from "./container/LoginStatus/LoginStatus";
import Mypage from "./container/MyPage/MyPage";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({
    user: undefined,
    token: undefined,
  });

  useEffect(() => {
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
    isLoggedIn();
  }, []);

  return (
    <div className="backgroundColor">
      <Router>
        <Navbar />
        <UserContext.Provider value={{ user, setUser }}>
          <LoginStatus />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/user/mypage" element={<Mypage />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </UserContext.Provider>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
