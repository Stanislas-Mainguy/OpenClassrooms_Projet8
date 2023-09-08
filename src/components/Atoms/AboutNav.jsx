import React from "react";
import { Link, useLocation } from "react-router-dom";

const AboutNav = () => {
  const location = useLocation();

  return (
    <li>
      <Link
        to={location.pathname === "/about" ? "#" : "/about"}
        className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
      >
        A propos
      </Link>
    </li>
  );
};

export default AboutNav;