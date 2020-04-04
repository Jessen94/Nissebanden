import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import ImgLeft from './Images/Slovakiet_2019_bjerg.jpg';
import ImgRight from './Images/Slovakiet_2019_Paintball.jpg';


const useStyles = makeStyles({
  left: {
    overflow: 'visible',
    width: '50%',
    padding: '2%',
    direction: 'rtl',
  },
  right: {
    overflow: 'visible',
    width: '50%',
    padding: '2%',
  },
});

// eslint-disable-next-line react/prop-types
const Img = ({ alt, left }) => {
  const classes = useStyles();
  if (left) {
    return (
      <Box className={classes.left}>
        <img src={ImgLeft} alt={alt} />
      </Box>
    );
  }
  return (
    <Box className={classes.right}>
      <img src={ImgRight} alt={alt} />
    </Box>
  );
};

Img.propTypes = {
  alt: PropTypes.string.isRequired,
};

export default Img;
