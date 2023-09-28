import React from "react";
import NavLink from "../Atoms/NavLink";
import { useLocation } from "react-router-dom";

const Nav = () => {
    const location = useLocation()
  return (
    <nav className="nav">
      <ul className="nav-item">
        <NavLink currentLocation={location} link="/" titre="Acceuil" />
        <NavLink currentLocation={location} link="/about" titre="A propos" />
      </ul>
    </nav>
  )
};

export default Nav;