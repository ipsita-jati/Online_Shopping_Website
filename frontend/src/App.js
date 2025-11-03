import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Men from "./components/Men/Men";
import Women from "./components/Women/Women";
import Kides from "./components/Kides/Kides";
import Shop from "./components/Shop/Shop";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Register from "./components/User/Register";
import Login from "./components/User/Login";
import Cart from "./components/Navbar/Cart";
import Profile from "./components/User/Profile";
import Orders from "./components/User/Orders";
import Wishlist from "./components/User/Wishlist";
import Rewards from "./components/User/Rewards";
import Giftcard from "./components/User/Giftcard";




function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Men" element={<Men />} />
        <Route path="/Women" element={<Women />} />
        <Route path="/Kides" element={<Kides />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="/Rewards" element={<Rewards />} />
        <Route path="/Giftcard" element={<Giftcard />} />
      </Routes>
    </Router>
  );
}

export default App;
