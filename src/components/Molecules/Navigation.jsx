import React from "react";
import HomeNav from "../Atoms/HomeNav";
import AboutNav from "../Atoms/AboutNav";

const Nav = () => {
  return (
    <div id="global">
      <nav className="nav">
        <ul className="nav-item">
          <HomeNav />
          <AboutNav />
        </ul>
      </nav>
    </div>
  );
};

export default Nav;