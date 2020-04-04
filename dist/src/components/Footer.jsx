import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  footer: {
    display: 'block',
    backgroundColor: '#3c4146',
    boxShadow: '0 1px 1px 0 rgba(0, 0, 0, 0.12)',
    boxSizing: 'border-box',
    width: '100%',
    textAlign: 'center',
    font: 'normal 18px sans-serif',
    padding: '45px',
  },
  footerLinks: {
    listStyle: 'none',
    fontWeight: 'bold',
    color: '#ffffff',
    padding: '35px 0 23px',
    margin: '0',
    display: 'inline-block',
    textDecoration: 'none',
  },
  footerCompanyName: {
    color: '#8f9296',
    fontSize: '14px',
    margin: '0',
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.footer}>
      <p className={classes.footerLinks}>
        <a className={classes.footerLinks} href="https://www.Nissebanden.dk">Home</a>
        <a className={classes.footerLinks} href="https://www.facebook.com/pg/Nissebanden/about/">About</a>
        <a className={classes.footerLinks} href="https://www.facebook.com/Nissebanden/">Contact</a>
      </p>
      <p className={classes.footerCompanyName}>Klan Nissebanden &copy; 1991</p>
    </Box>
  );
};

export default Footer;
