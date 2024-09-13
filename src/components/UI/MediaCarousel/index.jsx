import React from 'react';
import Slider from 'react-slick';
import { Box, Image } from '@chakra-ui/react';

const MediaCarousel = ({ projects }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {projects.map((project, index) => (
        <Box key={index}>
          <Image src={project.image} alt={project.title} />
        </Box>
      ))}
    </Slider>
  );
};

export default MediaCarousel;
