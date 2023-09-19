import React from "react";
import ratePicture from "../../assets/pictures/rate.svg";

const Rate = ({ appartement }) => {
    const rateNumber = appartement.rating;
    const baseStarColor = "#E3E3E3";
    const starColor = rateNumber >= 1 ? "#FF6060" : baseStarColor;

    return (
        <div className="host-rating">
            <img src={ratePicture} alt="Host Rating" style={{ fill: starColor }} />
        </div>
    );
};

export default Rate;