import React, { useState, useRef, useEffect } from 'react';
import CollapseArrow from '../Atoms/CollapseArrow';

const MixContentCollapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isArrowRotated, setIsArrowRotated] = useState(false);
  const descriptionRef = useRef(null);

  useEffect(() => {
    setIsOpen(false);
  }, []);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
    setIsArrowRotated(!isArrowRotated);

    if (descriptionRef.current) {
      const descriptionHeight = descriptionRef.current.scrollHeight;
      const computedStyle = window.getComputedStyle(descriptionRef.current);
      const paddingTop = parseFloat(computedStyle.paddingTop);
      const paddingBottom = parseFloat(computedStyle.paddingBottom);

      if (!isOpen) {
        descriptionRef.current.style.maxHeight = `${descriptionHeight + paddingTop + paddingBottom}px`;
      } else {
        descriptionRef.current.style.maxHeight = '0';
      }
    }
  };

  const descriptionClass = `collapse-description ${isOpen ? 'open' : 'close'}`;

  return (
    <>
      <div className="collapse-block">
        <div className="collapse-title">
          <h3>{title}</h3>
        </div>
        <div className="collapse-arrow" onClick={toggleCollapse}>
          <CollapseArrow isRotated={isArrowRotated} />
        </div>
      </div>
      <div ref={descriptionRef} className={descriptionClass}>
        {content}
      </div>
    </>
  );
};

const GeneralCollapse = ({ data, page, appartement }) => {
  const isAppartmentPage = page === "/appartment";

  if (isAppartmentPage) {
    return (
      <>
        <div className="collapse">
          <MixContentCollapse title="Description" content={appartement.description} />
        </div>
      
        <div className="collapse">
          <MixContentCollapse title="Équipements" content={appartement.equipments.join(', ')} />
        </div>  
      </>
    );
  } else {
    return (
      <div className="collapse">
        <MixContentCollapse title={data.title} content={data.description} />
      </div>
    );
  }
};

export default GeneralCollapse;