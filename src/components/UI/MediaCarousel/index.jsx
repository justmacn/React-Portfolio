// css for carousel npm
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useRef } from 'react';
import Slider from 'react-slick';
import { Flex, Box, IconButton, VStack } from '@chakra-ui/react';
import { LeftSquare, RightSquare } from '@icon-park/react';
import ProjectInfoCard from '../ProjectInfoCard';
import './MediaCarousel.css';

const MediaCarousel = ({ projects, onSlideChange, info }) => {
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
        {/* project info */}
        <Box as='div' className='info-container'>
            <ProjectInfoCard project={info} />
        </Box>

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
        <Box as='div' className='btn-container'>
            <VStack spacing={1}>
                <IconButton 
                  icon={<LeftSquare theme="outline" size="60" fill="#ffffff" strokeWidth={1.25} strokeLinecap="square"/>}
                  variant='ghost'
                  onClick={previous}
                  className='prevBtn'
                />
                <IconButton 
                  icon={<RightSquare theme="outline" size="60" fill="#ffffff" strokeWidth={1.25} strokeLinecap="square"/>}
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
