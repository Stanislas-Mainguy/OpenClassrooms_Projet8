import React from 'react';
import { useLocation } from 'react-router-dom';
import AboutBlock from './AboutBlock';
import Banner from '../Molecules/Banner';
import Gallery from './Gallery';
import aboutData from '../../data/about.json';
import Error from '../../components/Molecules/Error';
import AppartmentBlock from './AppartmentBlock';

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
      <AppartmentBlock />
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

  if (location.pathname.startsWith('/appartment')) {
    return <AppartmentPageMain />;
  }

  switch (location.pathname) {
    case '/about':
      return <AboutPageMain />;
    case '/error404':
      return <ErrorPageMain />;
    default:
      return <HomePageMain />;
  }
};

export default Main;