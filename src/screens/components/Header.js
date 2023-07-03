import React from 'react';
import headerLogo from '../../assets/header.png';

const headerStyles = {
  width: '100%',
  height: '1px',
  backgroundColor: '#e1e1e1',
};

const titleStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'Inter',
  fontSize: '18px',
  fontWeight: 700,
  lineHeight: '22px',
  letterSpacing: '0em',
  marginTop: '1rem',
};

const imageStyles = {
  marginRight: '0.5rem',
  width: '20px', // adjust the width as per your image size
  height: '20px', // adjust the height as per your image size
};

const Header = ({ title }) => {
  return (
    <header>
      <h1 style={titleStyles}>
        <img src={headerLogo} alt="Logo" style={imageStyles} />
        {title}
      </h1>
      <div style={headerStyles} />
    </header>
  );
};

export default Header;
