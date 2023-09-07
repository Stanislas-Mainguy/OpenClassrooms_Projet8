import React from 'react';
import Header from '../components/Organisms/Header';
import Main from '../components/Organisms/Main';
import Footer from '../components/Organisms/Footer';

const AboutPage = () => {
  return (
    <div id="global">
      <Header />
      <Main page="AboutPage" />
      <Footer />
    </div>
  );
};

export default AboutPage;