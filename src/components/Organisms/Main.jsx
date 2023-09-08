import React from 'react';
import { useLocation } from 'react-router-dom';
import AboutBlock from './AboutBlock';
import Banner from '../Molecules/Banner';
import Gallery from './Gallery';
import aboutData from '../../data/about.json';

const AboutPageMain = () => {
  return (
    <>
      <Banner page="AboutPage"/>
      <AboutBlock items={aboutData} />
    </>
  );
};

const ErrorPageMain = () => {
  return (
    <>
      {/* Contenu pour la page d'erreur */}
    </>
  );
};

const AppartmentPageMain = () => {
  return (
    <>
      {/* Contenu pour la page d'appartement */}
    </>
  );
};

const HomePageMain = () => {
  return (
    <>
      <Banner />
      <Gallery />
    </>
  );
};

const Main = () => {
  const location = useLocation();

  const getPageContent = (() => {
    switch (location.pathname) {
      case '/about':
        return <AboutPageMain />;
      case '/error404':
        return <ErrorPageMain />;
      case '/appartment':
        return <AppartmentPageMain />;
      default:
        return <HomePageMain />;
    }
  })();

  return (
    <main className="main">
        {getPageContent}
    </main>
  );
};

export default Main;