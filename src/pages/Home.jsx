// Structure de HomePage //

import React from "react";
import Template from "../components/Template/PagesTemplate";
import Banner from "../components/Molecules/Banner";
import Gallery from "../components/Organisms/Gallery";
import imageHome from "../assets/pictures/bannerPicture.png";

const Home = () => {
    const image = {
      src: imageHome,
      alt: 'Bannière à propos',
      slogan: 'Chez vous, partout et ailleurs',
    }
  return (
    <Template>
      <Banner datas={image} />
      <Gallery />
    </Template>
  )
}

export default Home;