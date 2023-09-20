import React from "react";

const HostPictureAndName = ({ apartment: { host: { picture, name } } }) => {
    return (
        <div className="host-block-info">
            <span className="host-block-info-name">{name}</span>
            <div className="host-block-info-picture">
                <img src={picture} alt="Portrait de l'host"/>
            </div>
        </div>
    );
};

export default HostPictureAndName;