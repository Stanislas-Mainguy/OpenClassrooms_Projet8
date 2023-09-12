import React from "react";

const AppartmentBlock = ({ appartement }) => {
    console.log(appartement);
    return (
        <>
            <h1>Appartment avec l'id : {appartement.id}</h1>
        </>
    );
};

export default AppartmentBlock;