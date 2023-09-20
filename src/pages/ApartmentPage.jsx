// Structure de ApartmentPage //

import React from "react";
import { Navigate, useParams } from "react-router-dom";
import Template from "../components/Template/PagesTemplate";
import Apartment from "../components/Organisms/Apartment";
import data from "../data/data.json";

const ApartmentPage = () => {
    // Extraction de l'identifiant d'appartement par son id //
    const { id } = useParams();
    const apartment = data.find((apartmentSearch) => apartmentSearch.id === id);
    
    if(apartment === undefined){
        return <Navigate to="/error" />
    }

    return (
        <Template>    
            <Apartment apartment={apartment} />
        </Template>   
    );
};

export default ApartmentPage;