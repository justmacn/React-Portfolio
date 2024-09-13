import React from 'react';
import Slider from 'react-slick';
import { Box } from '@chakra-ui/react';
import './MediaCarousel.css';

const MediaCarousel = ({ projects, onSlideChange }) => {
  // Settings for slider component
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => {
      if (onSlideChange) {
        onSlideChange(index);
      }
    },
  };

  const isVideo = (fileName) => {
    return /\.(mp4|webm|ogg)$/i.test(fileName);
  };

  return (
    <Slider {...settings}>
      {projects.map((project, index) => (
        <Box key={index}>
          {isVideo(project.image) ? (
            <video className='media-item' controls>
              <source src={project.image} type="video/mp4" />
              Your browser does not support the video.
            </video>
          ) : (
            <img src={project.image} alt={project.title} className='media-item'/>
          )}
        </Box>
      ))}
    </Slider>
  );
};

export default MediaCarousel;
