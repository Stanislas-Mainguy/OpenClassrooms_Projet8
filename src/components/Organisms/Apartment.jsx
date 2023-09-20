import React from "react";
import Carousel from "../Molecules/Carousel";
import HostInfo from "../Molecules/HostInfo";
import ApartmentInfo from "../Molecules/ApartmentInfo";
import Collapse from "../Molecules/Collapse";

const Apartment = ({ apartment }) => {
    return (
        <div className="apartment-host-block">
            <Carousel apartment={apartment} />
            <div className="apartment-host-block-info">
                <ApartmentInfo apartment={apartment} />
                <HostInfo apartment={apartment} />
            </div>
            <div className="apartment-collapse-block">
                <Collapse title="Description" content={apartment.description} />
                <Collapse title="Équipements" content={apartment.equipments} liste={true} />
            </div>
        </div>
    );
};

export default Apartment;