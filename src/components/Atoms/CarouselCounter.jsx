import React from 'react';

const CarouselCounter = ({ currentImageIndex, totalImages }) => {
    return (
        <span className="carousel-counter">
            {currentImageIndex + 1}/{totalImages}
        </span>
    );
};

export default CarouselCounter;