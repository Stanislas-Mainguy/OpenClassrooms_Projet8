import React from "react";
import data from "../../../data/data.json";
import CardTitle from "./CardTitle";

const Cards = () => {
    return (
        <div className="cards">
            {data.map(item => (
                <div key={item.id} className="card">
                    <img src={item.cover} alt="Vue de l'appartement" />
                    <CardTitle title={item.title} />
                </div>
            ))}
        </div>
    );
};

export default Cards;