import React from 'react';
import Template from '../components/Template/PagesTemplate';
import Banner from '../components/Molecules/Banner';
import About from '../components/Organisms/About';
import aboutData from '../data/about.json';

const AboutPage = () => {
  return (
    <Template>
      <Banner page="AboutPage"/>
      <About items={aboutData} />
    </Template>
  );
};

export default AboutPage;