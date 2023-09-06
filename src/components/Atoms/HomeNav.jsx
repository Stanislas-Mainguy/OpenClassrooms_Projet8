import React from "react";
import { Link, useLocation } from "react-router-dom";

const HomeNav = () => {
  const location = useLocation();

  return (
    <li>
      <Link
        to={location.pathname === "/" ? "#" : "/"}
        className={location.pathname === "/" ? "nav-link active" : "nav-link"}
      >
        Accueil
      </Link>
    </li>
  );
};

export default HomeNav;