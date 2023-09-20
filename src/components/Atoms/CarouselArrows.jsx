import React from 'react';
import ArrowLeft from "../../assets/pictures/carousel-arrow-left.svg";
import ArrowRight from "../../assets/pictures/carousel-arrow-right.svg";

const CarouselArrows = ({ handleArrowClick }) => {
    return (
        <>
            <div className="carousel-prev" onClick={() => handleArrowClick(-1)}>
                <img src={ArrowLeft} alt="Flèche gauche" />
            </div>
            <div className="carousel-next" onClick={() => handleArrowClick(1)}>
                <img src={ArrowRight} alt="Flèche droite" />
            </div>
        </>
    );
};

export default CarouselArrows;