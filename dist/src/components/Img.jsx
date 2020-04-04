import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import ImgLeft from './Images/Slovakiet_2019_bjerg.jpg';
import ImgRight from './Images/Slovakiet_2019_Paintball.jpg';


const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  cover: {
    transform: 'scale(0.9)',
    maxWidth: '150%',
    height: 'auto',
    margin: '4%',
  },
});

const Images = ({ image, alt }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <img src={image} alt={alt} className={classes.cover} />
    </Box>
  );
};

Images.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

// eslint-disable-next-line react/prop-types
const Img = ({ alt, left }) => {
  if (left) {
    return (
      <Images image={ImgLeft} alt={alt} />
    );
  }
  return (
    <Images image={ImgRight} alt={alt} />
  );
};

Img.propTypes = {
  alt: PropTypes.string.isRequired,
  left: PropTypes.bool.isRequired,
};

export default Img;
