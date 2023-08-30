import React from "react";
import Logo from "./Logo";
import Nav from "./Navigation";

const Header = () => {
    return (
        <header className="header">
            <Logo />
            <Nav />
        </header>
    );
};

export default Header;