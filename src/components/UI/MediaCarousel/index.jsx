// css for carousel npm
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useRef } from 'react';
import Slider from 'react-slick';
import { Flex, Box, IconButton, VStack } from '@chakra-ui/react';
import { VsxIcon } from "react-iconsax-vite";
import './MediaCarousel.css';

const MediaCarousel = ({ projects, onSlideChange }) => {
  // settings for slider component
  const settings = {
    dots: true,
    arrows: false,
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
  
  // append nav arrows to iconButtons
    let sliderRef = useRef(null);
    const next = () => {
      sliderRef.slickNext();
    };
    const previous = () => {
      sliderRef.slickPrev();
    };

  // conditional to check project file extenstion   
  const isVideo = (fileName) => {
    return /\.(mp4|webm|ogg|mov)$/i.test(fileName);
  };

  return (
    <Flex as='div' alignItems="center" justifyContent="center" className='slider' pb={5}>
        {/* carousel viewer */}
        <Box as='div' flex='1' className='media-container'>
            <Slider ref={slider => {sliderRef = slider;}} {...settings}>
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
        </Box>

        {/* carousel nav buttons */}
        <Box as='div'>
            <VStack className='arrowBtn' spacing={3.5}>
                <IconButton 
                  icon={<VsxIcon iconName="ArrowSquareLeft" type="outline" size="70" color="#5e70d2"/>}
                  variant='ghost'
                  onClick={previous}
                  className='prevBtn'
                />
                <IconButton 
                  icon={<VsxIcon iconName="ArrowSquareRight" type="outline" size="70" color="#5e70d2"/>}
                  variant='ghost'
                  onClick={next}
                  className='nextBtn'
                />
            </VStack>
        </Box>
    </Flex>
  );
};

export default MediaCarousel;
