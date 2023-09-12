import React from "react";
import HomeNav from "../Atoms/HomeNav";
import AboutNav from "../Atoms/AboutNav";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav-item">
        <HomeNav />
        <AboutNav />
      </ul>
    </nav>
  );
};

export default Nav;