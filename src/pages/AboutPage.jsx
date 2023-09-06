import React from 'react';
import Header from '../components/Organisms/Header';
import Main from '../components/Organisms/Main';
import Footer from '../components/Organisms/Footer';
import Collapse from '../components/Molecules/Collapse';
import aboutData from '../data/about.json';

const AboutPage = () => {
  return (
    <div id="global">
      <Header />
      <Main page="AboutPage" />
      <Footer />
      <div className="about-content">
        {aboutData.map((item) => (
          <Collapse key={item.id} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
  );
};

export default AboutPage;