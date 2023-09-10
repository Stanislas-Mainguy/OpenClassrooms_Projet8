import React from "react";
import Header from "../components/Organisms/Header";
import Main from "../components/Organisms/Main";
import Footer from "../components/Organisms/Footer";
import { useParams } from "react-router-dom";

const AppartmentPage = () => {
    const { id } = useParams();
    return (
        <div id="global">
            <Header />
            <Main page="AppartmentPage" id={id} />
            <Footer />
        </div>
    );
};

export default AppartmentPage;