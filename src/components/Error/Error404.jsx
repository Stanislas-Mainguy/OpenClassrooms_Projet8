import React from "react";

const Error = () => {
    return (
        <main>
            <p className="error">404</p>
            <p className="error-message">Oups! La page que vous demandez n'existe pas.</p>
            <a className="back-to-home" href="../../pages/Home.jsx">Retourner sur la page d'accueuil</a>
        </main>
    );
};

export default Error;