import React from "react";
import { Link } from "react-router-dom";
import data from "../../data/data.json";
import Card from "../Molecules/Card";

const Gallery = () => {
  return (
    <div className="gallery">
      {data.map((item) => (
        <Link className="card-link" key={item.id} to={`/apartment/${item.id}`}>
          <Card data={item} />
        </Link>
      ))}
    </div>
  );
};

export default Gallery;