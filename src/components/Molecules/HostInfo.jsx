import React from "react";
import Stars from "./Stars";
import HostPictureAndName from "../Atoms/HostPictureAndName";

const HostInfo = ({ appartement }) => {
    return (
        <div className="host-block">
            <HostPictureAndName appartement={appartement} />
            <Stars appartement={appartement} />
        </div>
    );
};

export default HostInfo;