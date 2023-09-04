import React from "react";
import PictureBanner from "../../../../assets/pictures/bannerPicture.png";

const Banner = () => {
    return (
        <div className="banner">
            <img src={PictureBanner} alt="Bannière de présentation" />
            <p className="banner-text">Chez vous, partout et ailleurs</p>
        </div>
    );
};

export default Banner;