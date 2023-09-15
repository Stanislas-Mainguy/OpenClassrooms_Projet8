import React, { useState } from 'react';
import ArrowLeft from "../../assets/pictures/carousel-arrow-left.svg";
import ArrowRight from "../../assets/pictures/carousel-arrow-right.svg";

const AppartmentCarousel = ({ appartement }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    const handlePreviousClick = () => {
        if (currentImageIndex === 0) {
        setCurrentImageIndex(appartement.pictures.length - 1);
        } else {
        setCurrentImageIndex(currentImageIndex - 1);
        }
    };

    const handleNextClick = () => {
        if (currentImageIndex === appartement.pictures.length - 1) {
        setCurrentImageIndex(0);
        } else {
        setCurrentImageIndex(currentImageIndex + 1);
        }
    };

    return (
        <div className="carousel">
            <div className="carousel-pictures">
                <img src={appartement.pictures[currentImageIndex]} alt={`Visuel de l'appartement ${currentImageIndex + 1}`} />
            </div>
            <div className="carousel-prev" onClick={handlePreviousClick}>
                <img
                    src={ArrowLeft}
                    alt="Flèche gauche"
                />
            </div>
            <span className="carousel-counter">{currentImageIndex + 1}/{appartement.pictures.length}</span>
            <div className="carousel-next" onClick={handleNextClick}>
                <img
                    src={ArrowRight}
                    alt="Flèche droite"
                />
            </div>
        </div>
    );
};

export default AppartmentCarousel;
