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
    <Flex as='div' direction='row' alignItems="center" justifyContent="space-between" className='carousel' px={{ base: 4, md: 12 }} gap={8}>

        {/* Left: project info */}
        <Box as='div' className='info-container' width='17%'>
            <ProjectInfoCard project={info} />
        </Box>

        {/* Center: carousel viewer */}
        <Box as='div' className='media-container' width='50%'>
            <Slider ref={slider => {sliderRef = slider;}} {...settings}>
            {projects.map((project, index) => (
                <Box key={index}>
                    {isVideo(project.image) ? (
                        <video className='media-item' justifyContent={"center"} controls>
                        <source src={project.image} type="video/mp4" />
                        Your browser does not support the video.
                        </video>
                    ) : (
                        <img src={project.image} alt={project.title} className='media-item' justifyContent={"center"}/>
                    )}
                </Box>
            ))}
            </Slider>
        </Box>

        {/* Right: carousel nav buttons */}
        <Box as='div' className='btn-container' width='12%'>
            <VStack spacing={3}>
            <IconButton
              icon={<LeftSquare theme="outline" size="60" fill="#ffffff" strokeWidth={1.25} strokeLinecap="square" />}
              variant="link"
              onClick={previous}
              className="prevBtn"
              alignSelf="flex-start"
              _focus={{ outline: 'none', boxShadow: 'none' }}  // Remove default blue outline
              _hover={{ bgColor: 'transparent', fill: '#ffbb00', outline: 'none', boxShadow: 'none' }}
              // _active={{
              //   '& svg': {
              //     fill: '#ffbb00',  // Maintain fill color when active
              //   },
              //   boxShadow: '0 0 10px #ffbb00',  // Add glow effect
              // }}
            />
            <IconButton 
              icon={<RightSquare theme="outline" size="60" fill="#ffffff" strokeWidth={1.25} strokeLinecap="square"/>}
              variant='link'
              onClick={next}
              className='nextBtn'
              alignSelf="flex-end"
              _focus={{ outline: 'none', boxShadow: 'none' }}  // Remove default blue outline
              _hover={{ bgColor: 'transparent', fill: '#ffbb00', outline: 'none', boxShadow: 'none' }}
              // _active={{
              //   '& svg': {
              //     fill: '#ffbb00',  // Maintain fill color when active
              //   },
              //   boxShadow: '0 0 10px #ffbb00',  // Add glow effect
              // }}
            />
            </VStack>
        </Box>
    </Flex>
  );
};

export default MediaCarousel;
