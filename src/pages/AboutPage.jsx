import React from 'react';
import Template from '../components/Template/PagesTemplate';
import Banner from '../components/Molecules/Banner';
import About from '../components/Organisms/About';
import aboutData from '../data/about.json';
import imageAbout from '../assets/pictures/aboutPictureBanner.png';

const AboutPage = () => {
  const image = {
    src: imageAbout,
    alt: 'Bannière à propos',
  }
  return (
    <Template>
      <Banner datas={image} />
      <About items={aboutData} />
    </Template>
  )
};

export default AboutPage;