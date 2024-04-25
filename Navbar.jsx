import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { BrowserRouter as Router,Route, Link,Switch } from "react-router-dom";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const menuRef = useRef();

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsActive(false);
    }
  };

  const handleMenuItemClick = (item) => {
    setSelectedItem(item);
    setIsActive(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <div className="navbar" style={{ backgroundColor: "#7f7f7f", position: "fixed"}}>
        <div className="nav-logo" style={{"padding": "8-px", "marginLeft": "50px"}}>
          <h1 style={{ color: "#000000" }}>SAMTECH</h1>
        </div>
        <ul className={`nav-menu ${isActive ? "active" : ""}`} ref={menuRef}>
          <li
            onClick={() => handleMenuItemClick("HOME")}
            className={selectedItem === "HOME" ? "active" : ""}
          >
            <Link to = "/home">HOME</Link>
          </li>
          <li
            onClick={() => handleMenuItemClick("PRODUCTS")}
            className={selectedItem === "PRODUCTS" ? "active" : ""}
          >
            <Link to="/products">PRODUCTS</Link>
          </li>
          <li
            onClick={() => handleMenuItemClick("INFRASTRUCTURE")}
            className={selectedItem === "INFRASTRUCTURE" ? "active" : ""}
          >
            <Link to="/infrastructure">INFRASTRUCTURE</Link>
          </li>
          {/* <li
            onClick={() => handleMenuItemClick("Business")}
            className={selectedItem === "Business" ? "active" : ""}
          >
            <Link to="/business">BUSINESS</Link>
          </li> */}
          <li
            onClick={() => handleMenuItemClick("CONTACT US")}
            className={selectedItem === "CONTACT US" ? "active" : ""}
          >
            <Link to="/contactus">CONTACT US</Link>
          </li>
          <li
            onClick={() => handleMenuItemClick("ABOUT US")}
            className={selectedItem === "ABOUT US" ? "active" : ""}
          >
            <Link to="/aboutus">ABOUT US</Link>
          </li>
        </ul>
        <label
          htmlFor="menu"
          className={`nav-icon ${isActive ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <div className="icon"></div>
          <div className="icon"></div>
          <div className="icon"></div>
        </label>
      </div>
      <input
        type="checkbox"
        role="button"
        aria-label="Display the menu"
        className="menu"
        checked={isActive}
        onChange={toggleMenu}
      />
    </>
  );
};

export default Navbar;
