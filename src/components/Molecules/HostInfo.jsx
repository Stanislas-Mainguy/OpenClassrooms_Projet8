import React from "react";
import Rate from "../Atoms/Rate";
import HostPictureAndName from "../Atoms/HostPictureAndName";

const HostInfo = ({ appartement }) => {
    return (
        <div className="host-block">
            <HostPictureAndName appartement={appartement} />
            <Rate appartement={appartement} />
        </div>
    );
};

export default HostInfo;