import React from "react";
import Header from "../Organisms/Header";
import Footer from "../Organisms/Footer";

const Template = ({ children }) => {
    return (
        <>
            <div id="global">
                <Header />
                <main className="main">
                    {children}
                </main>
            </div>
            <Footer />
        </>
    );
};

export default Template;