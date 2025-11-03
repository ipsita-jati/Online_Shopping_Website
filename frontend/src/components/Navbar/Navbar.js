import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import Searchbar from "./Searchbar";
import Dropdown from "./Dropdown";

const Navbar = () => {
    return(
        <nav className="navbar">
            <div className="logo"><img src="/Ipsora_Fashion_logo.png" alt=""/></div>
            <NavLink to="/" end className="nav-link">Home</NavLink>
            <NavLink to="/Men" className="nav-link">Men</NavLink>
            <NavLink to="/Women" className="nav-link">Women</NavLink>
            <NavLink to="/Kides" className="nav-link">Kides</NavLink>
            <NavLink to="/Shop" className="nav-link">Shop</NavLink>
            <NavLink to="/Contact" className="nav-link">Contact</NavLink>
            <Searchbar/>
            
            <div className="details">
                <Dropdown/>
                <a className="Cart" href="/Cart"><i className="bi bi-cart3 cart">Cart</i></a>
            </div>


        </nav>
    );
};

export default Navbar;