import React, { useState, useEffect } from "react";

const Slider = ({ appartmentData }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageCount, setImageCount] = useState(0);

  useEffect(() => {
    // Faire le lien entre l'ID de la page d'accueuil et le lien image avec la bonne ID //
    if (appartmentData.pictures && appartmentData.pictures.length > 0) {
      setImageCount(appartmentData.pictures.length);
    }
  }, [appartmentData]);

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => {
      if (prevIndex === imageCount - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => {
      if (prevIndex === 0) {
        return imageCount - 1;
      } else {
        return prevIndex - 1;
      }
    });
  };

  return (
    <div className="slider">
      <img
        src={appartmentData.pictures && appartmentData.pictures[currentImageIndex]}
        alt={`Appartement ${currentImageIndex + 1}`}
      />
      {imageCount > 1 && (
        <div className="slider-controls">
          <button onClick={handlePrevClick}>&lt;</button>
          <p>{`${currentImageIndex + 1} / ${imageCount}`}</p>
          <button onClick={handleNextClick}>&gt;</button>
        </div>
      )}
    </div>
  );
};

export default Slider;