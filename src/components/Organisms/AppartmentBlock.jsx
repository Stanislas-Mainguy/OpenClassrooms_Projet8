import React from "react";
import Rate from "../Molecules/Rate";
import Host from "../Molecules/Host";
import Carousel from "../Molecules/Carousel";
import AppartmentInfo from "../Molecules/AppartmentInfo";
import CollapseBlock from "../Molecules/CollapseBlock";
import appartmentData from '../../data/data.json';

const AppartmentBlock = ({ match }) => {
    const { id } = match.params;
    return (
        <>
            <Carousel appartmentId={id} appartments={appartmentData} />
            <AppartmentInfo appartmentId={id} appartments={appartmentData} />
            <Host appartmentId={id} appartments={appartmentData} />
            <Rate appartmentId={id} appartments={appartmentData} />
            <CollapseBlock appartmentId={id} appartments={appartmentData} />
        </>
    );
};

export default AppartmentBlock;
