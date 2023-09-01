import React from "react";
import kFooter from "../../assets/logo/k-footer.png";
import houseFooter from "../../assets/logo/house-footer.png";
import sFooter from "../../assets/logo/s-footer.png";
import aFooter from "../../assets/logo/a-footer.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="logo-container">
                <div className="block-k">
                    <img src={kFooter} alt="Lettre K du logo"></img>
                </div>
                <div className="block-house">
                    <img src={houseFooter} alt="Petite maison du logo"></img>
                </div>
                <div className="block-s">
                    <img src={sFooter} alt="Lettre S du logo"></img>
                </div>
                <div className="block-a">
                    <img src={aFooter} alt="Lettre A du logo"></img>
                </div>
            </div>
            <div className="footer-block-text">
                <p className="footer-text">&copy; 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;