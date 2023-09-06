import React from "react";

const Card = ({ data }) => {
  return (
    <div className="card">
      <div className="card-filter"></div>
      <div>
          <img src={data.cover} alt={data.title} />
      </div>
      <div className="card-title">
        <p>{data.title}</p>
      </div>
    </div>
  );
};

export default Card;