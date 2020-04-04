import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import ImgLeft from './Images/Slovakiet_2019_bjerg.jpg';
import ImgRight from './Images/Slovakiet_2019_Paintball.jpg';


const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  cover: {
    height: '300px',
    width: '300px',
  },
});

const Images = ({ image, alt }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <CardContent className={classes.content}>
        <CardMedia
          className={classes.cover}
          image={image}
          title={alt}
        />
      </CardContent>
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
