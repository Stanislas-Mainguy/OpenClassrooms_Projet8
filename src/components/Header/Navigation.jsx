import React from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();

  return (
    <nav className="nav">
      <ul className="nav-item">
        <li>
          <Link
            to="/"
            className={location.pathname === "/" ? "nav-link active" : "nav-link"}
          >
            Accueil
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
          >
            A propos
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;