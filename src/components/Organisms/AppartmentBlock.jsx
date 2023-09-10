import React from "react";
import Rate from "../Molecules/Rate";
import Host from "../Molecules/Host";
import Carousel from "../Molecules/Carousel";
import AppartmentInfo from "../Molecules/AppartmentInfo";
import CollapseBlock from "../Molecules/CollapseBlock";

const AppartmentBlock = () => {
    return (
        <>
            <Carousel />
            <AppartmentInfo />
            <Host />
            <Rate />
            <CollapseBlock />
        </>
    );
};

export default AppartmentBlock;