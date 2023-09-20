import React from "react";
import Stars from "./Stars";
import HostPictureAndName from "../Atoms/HostPictureAndName";

const HostInfo = ({ apartment }) => {
    return (
        <div className="host-block">
            <HostPictureAndName apartment={apartment} />
            <Stars apartment={apartment} />
        </div>
    );
};

export default HostInfo;