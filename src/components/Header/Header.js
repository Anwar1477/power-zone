import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-area">
      <nav className="d-flex justify-content-around">
        <div className="title">
          <h1>
            Power <span>Zone</span>
          </h1>
        </div>
        <Link className="link" to="/home">Home</Link>
        <Link className="link" to="/services">Services</Link>
        <Link className="link" to="/about">About</Link>
        <Link className="link" to="/blogs">Blogs</Link>
        <Link className="link" to="/login">Login</Link>
      </nav>
    </div>
  );
};

export default Header;
