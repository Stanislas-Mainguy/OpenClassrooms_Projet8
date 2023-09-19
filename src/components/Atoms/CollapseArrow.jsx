import React from 'react';
import ArrowImage from '../../assets/pictures/arrow-about.svg';

const CollapseArrow = ({ isRotated, onClick }) => {
  const arrowClassName = `collapse-arrow ${isRotated ? 'rotated' : ''}`;

  return (
    <img className={arrowClassName} src={ArrowImage} alt="Arrow" onClick={onClick} />
  );
};

export default CollapseArrow;