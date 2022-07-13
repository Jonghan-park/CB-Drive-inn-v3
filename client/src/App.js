import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
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

function App() {
  const [user, setUser] = useState(null);

  const getUser = async (e) => {
    e.preventDefault();
    try {
      await axios.get("/user/mypage").then((res) => {
        setUser(res.data);
      });
      console.log("User from app.js front end");
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        console.log(error.response.data.message);
      }
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="backgroundColor">
      <Router>
        <Navbar />
        <LoginStatus />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user/mypage" element={<Mypage user={user} />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
