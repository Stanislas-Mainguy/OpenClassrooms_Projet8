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

const AppartmentPageMain = (props) => {
  const { id } = props;
  return (
    <>
      <AppartmentBlock id={id} items={aboutData} />
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

const Main = (props) => {
  const location = useLocation();
  
  switch (location.pathname) {
    case '/appartment/:id':
      return <AppartmentPageMain id={props.id} />;
    case '/about':
      return <AboutPageMain />;
    case '/':
      return <HomePageMain />;
    default:
      if (location.pathname === '/error404') {
        return <ErrorPageMain />;
      }
  };  
};

export default Main;