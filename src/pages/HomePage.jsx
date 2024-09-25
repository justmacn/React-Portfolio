import React from 'react';
import { Box, Heading, Text, IconButton, Container } from '@chakra-ui/react';
import { HiChevronDown } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import './styles/Home.css'

const HomePage = () => {
  return (
    <Box as='main' display='flex' flexDirection='column' flexWrap='wrap' alignContent='center' alignItems='center'>
      <Box as='section' className='homeBox' display='flex' justifyContent='right' alignItems='end' flexDirection='column' p={10}>
        {/* Intro */}
        <Text className='intro' mr={2}>Justin McLaughlin Is...</Text>
        
        {/* Header */}
        <Heading className='header' mb={1} mr={5}>Justmacn</Heading>
        
        {/* Subheader */}
        <Text className='subheader' mt={10} mr={1}>Storyteller & Developer</Text>
        
        {/* Tagline */}
        <Text className='tagline' textAlign='right' mt={7}>Visual stories through<br></br><span>code.</span></Text>
      </Box>

      <Container as='div' className='homeContainer' centerContent>
        {/* Button */}
        <IconButton
          as={Link}
          to='/work'
          mt={6}
          variant='ghost'
          color='#ffbb00'
          aria-label='Navigate to Work'
          fontSize='7xl'
          icon={<HiChevronDown />}
          className='chevronBtn'
          sx={{
            // hover styling
            _hover: {
            color: '#FFEDA7'
            },
            // active styling
            _active: {
            color: '#f7ca18;',
            backgroundColor: 'transparent'
            },
          }}
        />
      </Container>
    </Box>
  );
};

export default HomePage;
