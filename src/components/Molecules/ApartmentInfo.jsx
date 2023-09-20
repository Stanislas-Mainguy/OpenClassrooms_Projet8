import React from "react";

const ApartmentInfo = ({ apartment }) => {
    const { title, location, tags } = apartment;

    if (!Array.isArray(tags)) {
        return null;
    }

    const tagDivs = tags.map((tag, index) => (
        <div key={index} className="tag">
            <span>{tag}</span>
        </div>
    ));

    return (
        <div className="apartment-block">
            <span className="apartment-block-info">{title}</span>
            <span className="apartment-block-location">{location}</span>
            <div className="apartment-block-all-tags">{tagDivs}</div>
        </div>
    );
};

export default ApartmentInfo;