import React from "react";
import { useNavigate } from 'react-router-dom';

const Card = ({ data }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    const cardId = data.id;

    navigate(`/apartment/${cardId}`);
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className="card-filter"></div>
      <div className="card-picture">
        <img src={data.cover} alt={data.title} />
      </div>
      <div className="card-title">
        <p>{data.title}</p>
      </div>
    </div>
  );
};

export default Card;