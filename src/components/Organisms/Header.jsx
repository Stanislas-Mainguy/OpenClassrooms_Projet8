import React from "react";
import Logo from "../Atoms/Logo";
import Nav from "../Molecules/Navigation";

const Header = () => {
    return (
        <header className="header">
            <Logo />
            <Nav />
        </header>
    );
};

export default Header;