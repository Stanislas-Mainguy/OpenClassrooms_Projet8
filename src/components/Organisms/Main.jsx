import React from 'react';
import { useLocation } from 'react-router-dom';
import AboutBlock from './AboutBlock';
import Banner from '../Molecules/Banner';
import Gallery from './Gallery';
import aboutData from '../../data/about.json';
import Error from '../../components/Molecules/Error';

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
      <Error />
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
      case '/':
        return <HomePageMain />;
      case '/appartment':
        return <AppartmentPageMain />;
      default:
        return <ErrorPageMain />;
    }
  })();

  return (
    <main className="main">
        {getPageContent}
    </main>
  );
};

export default Main;