import React from "react";
import { Navigate, useParams } from "react-router-dom";
import Template from "../components/Template/PagesTemplate";
import AppartmentBlock from "../components/Organisms/AppartmentBlock";
import data from "../data/data.json";

const AppartmentPage = () => {
    const { id } = useParams();
    const appartement = data.find((appartmentSearch) => appartmentSearch.id === id) ;
    
    if(appartement === undefined){
        return <Navigate to="/error" />
    }
    return (
        <Template>    
            <AppartmentBlock appartement={appartement} />
        </Template>   
    );
};

export default AppartmentPage;