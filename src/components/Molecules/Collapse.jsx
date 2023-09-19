import React, { useState } from 'react';
import CollapseArrow from '../Atoms/CollapseArrow';
import CollapseDescript from '../Atoms/CollapseDescription';
import CollapseTitle from '../Atoms/CollapseTitle';

const Collapse = ({ title, content, liste = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };
  
  const descriptionClass = `collapse-description ${isOpen ? 'open' : 'close'}`;
  
  return (
    <div className="collapse">
      <div className="collapse-block">
        <CollapseTitle title={title}/>
        <div className="collapse-arrow" onClick={toggleCollapse}>
          <CollapseArrow isRotated={isOpen} />
        </div>
      </div>
      <div className={descriptionClass}>
        <CollapseDescript data={content} liste={liste} />
      </div>
    </div>
  );
};

export default Collapse;