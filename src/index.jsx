import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.scss';
import Home from './pages/Home.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);