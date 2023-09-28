import React from "react";
import { Link } from "react-router-dom";

const HomeNav = ({ currentLocation, link, titre }) => {
  const active = currentLocation.pathname === link
  return (
    <li>
      <Link
        to={active ? '#' : link}
        className={active ? 'nav-link active' : 'nav-link'}
      >
        {titre}
      </Link>
    </li>
  )
}

export default HomeNav;