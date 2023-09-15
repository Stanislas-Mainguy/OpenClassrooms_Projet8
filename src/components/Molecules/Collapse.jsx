import React, { useState, useRef, useEffect } from 'react';
import CollapseArrow from '../Atoms/CollapseArrow';
import CollapseDescription from '../Atoms/CollapseDescription';
import CollapseTitle from '../Atoms/CollapseTitle';

const Collapse = ({ data }) => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isArrowRotated, setIsArrowRotated] = useState(false);
  const descriptionRef = useRef(null);

  useEffect(() => {
    setIsDescriptionOpen(false);
  }, []);

  const toggleCollapse = () => {
    setIsDescriptionOpen(!isDescriptionOpen);
    setIsArrowRotated(!isArrowRotated);

    if (descriptionRef.current) {
      const descriptionHeight = descriptionRef.current.scrollHeight;
      const computedStyle = window.getComputedStyle(descriptionRef.current);
      const paddingTop = parseFloat(computedStyle.paddingTop);
      const paddingBottom = parseFloat(computedStyle.paddingBottom);

      if (!isDescriptionOpen) {
        descriptionRef.current.style.maxHeight = `${descriptionHeight + paddingTop + paddingBottom}px`;
      } else {
        descriptionRef.current.style.maxHeight = '0';
      }
    }
  };

  const descriptionClass = `collapse-description ${isDescriptionOpen ? 'open' : 'close'}`;

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
        className={descriptionClass}
      >
        <CollapseDescription description={data.description} />
      </div>
    </div>
  );
};

export default Collapse;