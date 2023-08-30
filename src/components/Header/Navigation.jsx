import React from "react";

const Nav = () => {
    return (
        <nav className="nav">
            <ul className="nav-item">
                <li className="nav-link">
                    <a href="/">Accueil</a>
                </li>
                <li className="nav-link">
                    <a href="/about">À propos</a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;