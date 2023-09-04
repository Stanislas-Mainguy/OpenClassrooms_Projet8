import React from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();

  return (
    <div id="global">
      <nav className="nav">
        <ul className="nav-item">
          <li>
            <Link
              to="/"
              className={location.pathname === "/" ? "nav-link active" : "nav-link"}
              onClick={(e) => {
                if (location.pathname === "/") {
                  e.preventDefault();
                  window.location.reload();
                }
              }}
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
    </div>
  );
};

export default Nav;