import React from 'react';
import logoImage from '../../assets/logo/logo-kasa.svg';

const Logo = () => {
  return (
    <div className="logo">
      <img src={logoImage} alt="Logo Kasa" />
    </div>
  );
};

export default Logo;