import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [selectedItem, setSelectedItem] = useState(""); // Track selected item
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
      <div className="navbar" style={{ backgroundColor: "#27A4EA" }}>
        <div className="nav-logo">
          <h1 style={{ color: "#fff" }}>SAMTECH</h1>
        </div>
        <ul className={`nav-menu ${isActive ? "active" : ""}`} ref={menuRef}>
          <li
            onClick={() => handleMenuItemClick("HOME")}
            className={selectedItem === "HOME" ? "active" : ""}
          >
            HOME
          </li>
          <li
            onClick={() => handleMenuItemClick("PRODUCTS")}
            className={selectedItem === "PRODUCTS" ? "active" : ""}
          >
            PRODUCTS
          </li>
          <li
            onClick={() => handleMenuItemClick("INFRASTRUCTURE")}
            className={selectedItem === "INFRASTRUCTURE" ? "active" : ""}
          >
            INFRASTRUCTURE
          </li>
          <li
            onClick={() => handleMenuItemClick("BLOG")}
            className={selectedItem === "BLOG" ? "active" : ""}
          >
            BLOG
          </li>
          <li
            onClick={() => handleMenuItemClick("CAREERS")}
            className={selectedItem === "CAREERS" ? "active" : ""}
          >
            CAREERS
          </li>
          <li
            onClick={() => handleMenuItemClick("CONTACT US")}
            className={selectedItem === "CONTACT US" ? "active" : ""}
          >
            CONTACT US
          </li>
          <li
            onClick={() => handleMenuItemClick("ABOUT US")}
            className={selectedItem === "ABOUT US" ? "active" : ""}
          >
            ABOUT US
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
