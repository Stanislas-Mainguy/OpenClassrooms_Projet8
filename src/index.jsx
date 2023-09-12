import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/main.scss';
import Home from './pages/Home.jsx';
import About from './pages/AboutPage';
import Error from './pages/ErrorPage';
import Appartment from './pages/AppartmentPage';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/appartment/:id" element={<Appartment />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} status={404} />
      </Routes>
    </Router>
  </React.StrictMode>
);