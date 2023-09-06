import React from "react";
import logoFooter from "../../assets/logo/logo-kasa.svg"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="logo-footer">
                <img src={logoFooter} alt="Logo Kasa" />
            </div>
            <div>
                <p>&copy; 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;