import React from "react";
import Header from "../Organisms/Header";
import Footer from "../Organisms/Footer";

const Template = ({ children }) => {
    return (
        <div id="global">
            <Header />
            <div className="main">
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default Template;