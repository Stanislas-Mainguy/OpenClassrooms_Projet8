import React from "react";

const AppartementInfo = ({ appartement }) => {
    const title = appartement.title;
    const location = appartement.location;
    const tags = appartement.tags;

    if (!Array.isArray(tags)) {
        return null;
    }

    const tagDivs = tags.map((tag, index) => (
        <div key={index} className="appartment-block-tag">
            <span>{tag}</span>
        </div>
    ));

    return (
        <div className="appartment-block">
            <span className="appartment-block-info">{title}</span>
            <span className="appartment-block-location">{location}</span>
            <div className="appartment-block-all-tags">
                {tagDivs}
            </div>
        </div>
    );
};

export default AppartementInfo;