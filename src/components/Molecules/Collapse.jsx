import React, { useState, useRef } from 'react';
import CollapseArrow from '../Atoms/CollapseArrow';
import CollapseDescription from '../Atoms/CollapseDescription';
import CollapseTitle from '../Atoms/CollapseTitle';

const Collapse = ({ data }) => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isArrowRotated, setIsArrowRotated] = useState(false);
  const descriptionRef = useRef(null);

  const toggleCollapse = () => {
    setIsDescriptionOpen(!isDescriptionOpen);
    setIsArrowRotated(!isArrowRotated);

    if (descriptionRef.current) {
      const descriptionHeight = descriptionRef.current.scrollHeight;

      if (!isDescriptionOpen) {
        descriptionRef.current.style.maxHeight = '0';
      } else {
        descriptionRef.current.style.maxHeight = `${descriptionHeight}px`;
      }
    }
  };

  return (
    <div className="collapse">
      <div className="collapse-block">
        <CollapseTitle title={data.title} />
        <div className="collapse-arrow" onClick={toggleCollapse}>
          <CollapseArrow isRotated={isArrowRotated} />
        </div>
      </div>
      <div
        ref={descriptionRef}
        className={`collapse-description ${isDescriptionOpen ? 'open' : ''}`}
      >
        <CollapseDescription description={data.description} />
      </div>
    </div>
  );
};

export default Collapse;