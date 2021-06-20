import React from 'react';
import { Box } from '@material-ui/core';

const Footer = () => {
  return (
    <Box className="footer">
      <p className="footer-links">
        <a className="footer-links" href="https://www.Nissebanden.dk">Home</a>
        <a className="footer-links" href="https://www.facebook.com/pg/Nissebanden/about/">About</a>
        <a className="footer-links" href="https://www.facebook.com/Nissebanden/">Contact</a>
      </p>
      <p className="footer-company-name">Klan Nissebanden &copy; 1991</p>
    </Box>
  );
};

export default Footer;
