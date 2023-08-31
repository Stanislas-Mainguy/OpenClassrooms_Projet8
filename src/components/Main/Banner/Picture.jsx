import React from "react";
import PictureBanner from "../../../assets/pictures/bannerPicture.png";

const BannerPicture = () => {
    return (
        <img className="banner-picture" src={PictureBanner} alt="Bannière de présentation" />
    );
};

export default BannerPicture;