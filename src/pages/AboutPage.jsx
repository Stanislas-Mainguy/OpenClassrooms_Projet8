import React from 'react';
import Template from '../components/Template/PagesTemplate';
import Banner from '../components/Molecules/Banner';
import AboutBlock from '../components/Organisms/AboutBlock';
import aboutData from '../data/about.json';

const AboutPage = () => {
  return (
    <Template>
      <Banner page="AboutPage"/>
      <AboutBlock items={aboutData} />
    </Template>
  );
};
export default AboutPage;