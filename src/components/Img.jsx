import React from 'react';
import PropTypes from 'prop-types';
import ImgLeft from './Images/Slovakiet_2019_bjerg.jpg';
import ImgRight from './Images/Slovakiet_2019_Paintball.jpg';


const Images = ({ image, alt, clas }) => {

  return (
    <div className={clas}>
      <img src={image} alt={alt} />
    </div>
  );
};

Images.propTypes = {
  // eslint-disable-next-line react/no-typos
  image: PropTypes.string,
  alt: PropTypes.string.isRequired,
  class: PropTypes.string.isRequired,
};

const Img = ({ alt, left }) => {
  if (left) {
    return (
      <Images image={ImgLeft} alt={alt} class="content-column-images-right" />
    );
  }
  return (
    <Images image={ImgRight} alt={alt} class="content-column-images-left" />
  );
};

Img.propTypes = {
  alt: PropTypes.string.isRequired,
  left: PropTypes.bool.isRequired,
};

export default Img;
