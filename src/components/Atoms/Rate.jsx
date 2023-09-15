import React from "react";
import ratePicture from "../../assets/pictures/rate.svg";

const Rate = ({ appartement }) => {
    const rateNumber = appartement.rating;

    // Définir la couleur de base des étoiles
    const baseStarColor = "#E3E3E3";

    // Définir la couleur des étoiles en fonction du rating
    const starColor = rateNumber >= 1 ? "#FF6060" : baseStarColor;

    return (
        <div className="host-rating">
            {/* Utiliser le SVG en tant qu'image et appliquer la couleur */}
            <img src={ratePicture} alt="Host Rating" style={{ fill: starColor }} />
        </div>
    );
};

export default Rate;