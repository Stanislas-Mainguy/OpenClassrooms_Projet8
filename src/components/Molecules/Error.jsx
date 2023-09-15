import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="error">
      <p className="error-404">404</p>
      <p className="error-text">Oups! La page que<br className="error-return"/> vous demandez n'existe pas.</p>
      <p className="error-link">
        <Link to="/">Retourner sur la page d'accueil</Link>
      </p>
    </div>
  );
};

export default Error404;
