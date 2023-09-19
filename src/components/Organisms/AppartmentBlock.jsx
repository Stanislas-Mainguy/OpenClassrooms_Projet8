import React from "react";
import Carousel from "../Molecules/Carousel";
import HostInfo from "../Molecules/HostInfo";
import AppartementInfo from "../Molecules/AppartmentInfo";
import Collapse from "../Molecules/Collapse";

const AppartmentBlock = ({ appartement }) => {
    return (
        <div className="appartment-block">
            <Carousel appartement={appartement} />
            <div className="appart-host-block">
                <AppartementInfo appartement={appartement} />
                <HostInfo appartement={appartement} />
            </div>
            <div className="collapse-appartment-block">
                <Collapse appartement={appartement} page="/appartment" />
            </div>
        </div>
    );
};

export default AppartmentBlock;