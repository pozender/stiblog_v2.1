import React from "react";
import image from "../assets/Logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={image} alt="" />
      </Link>
    </div>
  );
};

export default Header;
