import React from "react";

const HostPictureAndName = ({ appartement }) => {
    const picture = appartement.host.picture;
    const hostName = appartement.host.name;

    return (
        <div className="host-info">
            <span className="host-info-name">{hostName}</span>
            <div className="host-info-picture">
                <img src={picture} alt="Visage de l'host"/>
            </div>
        </div>
    );
};

export default HostPictureAndName;