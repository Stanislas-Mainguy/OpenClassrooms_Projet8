import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './styles/main.scss';
import Home from './pages/Home.jsx';
import About from './pages/AboutPage';
import Error from './pages/ErrorPage';
import AppartmentPage from './pages/AppartmentPage';

import data from './data/data.json';

const root = createRoot(document.getElementById('root'));

// ... Votre code précédent ...

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/appartment/:id" element={<GetAppartmentPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

function GetAppartmentPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const apartment = data.find(apartment => apartment.id === parseInt(id));

    if (!apartment) {
      navigate('/error404');
    }
  }, [id, navigate]);

  return (
    <div>
      <AppartmentPage id={id} />
    </div>
  );
}