import React from "react";
import Filter from "../Atoms/Filter";
import PictureBanner from "../../assets/pictures/bannerPicture.png";
import AboutPictureBanner from "../../assets/pictures/aboutPictureBanner.png";

const Banner = ({ page }) => {
  let imgSrc, altText;

  if (page === "AboutPage") {
    imgSrc = AboutPictureBanner;
    altText = "Bannière à propos";
  } else {
    imgSrc = PictureBanner;
    altText = "Bannière de présentation";
  }

  return (
    <div className="banner">
      <Filter />
      <img src={imgSrc} alt={altText} />
      {page === "AboutPage" ? null : (
        <p className="banner-text">Chez vous, partout et ailleurs</p>
      )}
    </div>
  );
};

export default Banner;