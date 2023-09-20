import React from "react";

const CarouselPictures = ({ apartment, currentImageIndex }) => {
    return (
        <div className="carousel-pictures">
            <img src={apartment.pictures[currentImageIndex]}
            alt={`Visuel de l'appartement ${currentImageIndex + 1}`}
            />
        </div>
    );
};

export default CarouselPictures;