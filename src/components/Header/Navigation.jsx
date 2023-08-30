import React from "react";

const Nav = () => {
    return (
        <nav className="nav">
            <ul className="nav-item">
                <li>
                    <a className="nav-link" href="/">Accueil</a>
                </li>
                <li>
                    <a className="nav-link" href="/about">A propos</a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;