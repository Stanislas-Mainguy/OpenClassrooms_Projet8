// Structure de HomePage //

import React from "react";
import Template from "../components/Template/PagesTemplate";
import Banner from "../components/Molecules/Banner";
import Gallery from "../components/Organisms/Gallery";

const Home = () => {
  return (
    <Template>
      <Banner page="home-page" />
      <Gallery />
    </Template>
  );
}

export default Home;