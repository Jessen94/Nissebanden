import React from 'react';
import ImgLeft from './Images/Slovakiet_2019_bjerg.jpg';
import ImgRight from './Images/Slovakiet_2019_Paintball.jpg';


const Img = ({ alt, left }) => {
  return (
    <img src={left ? ImgRight : ImgLeft} alt={alt} />
  );
};

export default Img;
