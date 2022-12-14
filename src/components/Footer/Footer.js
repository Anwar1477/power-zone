import React from "react";
import "./Footer.css";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="text-center mt-5 p-3">
      <p>
        <small className="text-white">copyright @ {year} </small>
      </p>
    </footer>
  );
};

export default Footer;
