import React, { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return(
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
        <a href="/Login"><i className="bi bi-person-circle dropdown">Login<i className={`bi bi-chevron-down dropdown-icon ${
          isOpen ? "rotate" : ""
          }`}></i></i></a>
      {/* Dropdown Menu */}
      <div className={`dropdown-content ${isOpen ? "show" : ""}`}>
        <div className="register">New Customer?<a href="/Register">Sign Up</a></div>
        <a href="/Profile"><i className="bi bi-person-circle"></i> My profile</a>
        <a href="/Orders"><i className="bi bi-box-seam"></i> Orders</a>
        <a href="/Wishlist"><i className="bi bi-heart"></i> Wishlist</a>
        <a href="/Rewards"><i className="bi bi-gift"></i> Rewards</a>
        <a href="/Giftcard"><i className="ti ti-gift-card"></i> Gift Cards</a>
      </div>
    </div>
  );
};

export default Dropdown;