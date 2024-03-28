import React, { useState } from "react";
import "./Navbar.css";


const Navbar = () => {
    const[menu,setMenu]=useState("shop");
    return (
        <>
            <div className="navbar">
                <div className="nav-logo">
                    <h1>SAMTECH</h1>
                </div>
                <ul className="nav-menu">
                    <li onClick={()=>{setMenu("home")}}>HOME{menu==="home"?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("products")}}>PRODUCTS{menu==="products"?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("infrastructure")}}>INFRASTRUCTURE{menu==="infrastructure"?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("blog")}}>BLOG{menu==="blog"?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("careers")}}>CAREERS{menu==="careers"?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("contact")}}>CONTACT US{menu==="contact"?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("about")}}>ABOUT US{menu==="about"?<hr/>:<></>}</li>
                </ul>
            </div>
        </>
    );
}

export default Navbar;
