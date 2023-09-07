import React from 'react';
import { useLocation } from 'react-router-dom';
import AboutBlock from './AboutBlock';
import Banner from '../Molecules/Banner';
import Gallery from './Gallery';
import aboutData from '../../data/about.json';

const AboutPageMain = () => {
  return (
    <main className="main">
      <Banner page="AboutPage"/>
      <AboutBlock items={aboutData} />
    </main>
  );
};

const ErrorPageMain = () => {
  return (
    <main className="main">
      {/* Contenu pour la page d'erreur */}
    </main>
  );
};

const AppartmentPageMain = () => {
  return (
    <main className="main">
      {/* Contenu pour la page d'appartement */}
    </main>
  );
};

const HomePageMain = () => {
  return (
    <main className="main">
      <Banner />
      <Gallery />
    </main>
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