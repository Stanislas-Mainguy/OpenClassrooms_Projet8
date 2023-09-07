import React from 'react';
import aboutData from '../../data/about.json';

const CollapseTitle = () => {
  const title = aboutData.title;
  return <h3>{title}</h3>;
};

export default CollapseTitle;