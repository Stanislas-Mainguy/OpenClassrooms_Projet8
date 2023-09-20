import React, { useState } from "react";
import CarouselPictures from "../Atoms/CarouselPictures";
import CarouselArrows from "../Atoms/CarouselArrows";
import CarouselCounter from "../Atoms/CarouselCounter";

const ApartmentCarousel = ({ apartment }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleArrowClick = (direction) => {
        const newIndex = currentImageIndex + direction;
    
        if (newIndex < 0) {
            setCurrentImageIndex(apartment.pictures.length - 1);
        } else if (newIndex >= apartment.pictures.length) {
            setCurrentImageIndex(0);
        } else {
            setCurrentImageIndex(newIndex);
        }
    };

    const showControls = apartment.pictures.length > 1;

    return (
        <div className="carousel">
            <CarouselPictures apartment={apartment} currentImageIndex={currentImageIndex} />
            {showControls && (
                <>
                    <CarouselArrows handleArrowClick={handleArrowClick} />
                    <CarouselCounter currentImageIndex={currentImageIndex} totalImages={apartment.pictures.length} />
                </>
            )}
        </div>
    );
};

export default ApartmentCarousel;