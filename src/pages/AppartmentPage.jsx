import React from "react";
import Header from "../components/Organisms/Header";
import Main from "../components/Organisms/Main";
import Footer from "../components/Organisms/Footer";

const AppartmentPage = () => {
    return (
        <div id="global">
            <Header />
            <Main page="AppartmentPage"/>
            <Footer />
        </div>
    );
};

export default AppartmentPage;