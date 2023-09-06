import React from "react";
import Banner from "../Molecules/Banner";
import Gallery from "./Gallery";
import AboutBlock from "../Organisms/AboutBlock";

const Main = ({ page }) => {
    return (
        <main className="main">
            <Banner page={page} />
            {page === "AboutPage" ? (
                <AboutBlock />
            ) : (
                <Gallery />
            )}
        </main>
    );
};

export default Main;