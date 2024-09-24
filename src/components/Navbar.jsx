// import components from chakra ui
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, HStack, Button, Image } from '@chakra-ui/react';
import './Navbar.css';


// Nvabar componenet w/ style prop for active state
const Navbar = () => {
  return (
    <Box as="nav" p={4} className='navBox'>
      <Image boxSize='55px' objectFit='cover' mx={5} mt={2} src='/assets/images/jmLogo/jm-logo@2x.png' alt='JMcX logo' className='logo' />
      <HStack spacing={8} justify="right" mx={10} mt={4}>

        {/* Home Tab */}
        <Button as={NavLink} to="/" variant="link" className='navBtn'
                sx={{
                    // hover styling
                    _hover: {
                    bgGradient: 'linear(to-br, #fff5dc 20%, #ffd572 65%, #f7ca18 100%)',
                    bgClip: 'text',
                    fontWeight: '350',
                    },
                    // active styling
                    _activeLink: {
                    color: '#f7ca18',
                    fontWeight: '350', 
                    },
                }}
        >
          Home
        </Button>

        {/* Work Button */}
        <Button as={NavLink} to="/work" variant="link" className='navBtn'
                sx={{
                    _hover: {
                    bgGradient: 'linear(to-br, #fff5dc 20%, #ffd572 65%, #f7ca18 100%)',
                    bgClip: 'text',
                    fontWeight: '350',
                    },

                    _activeLink: {
                    color: '#f7ca18',
                    fontWeight: '350', 
                    },
                }}
        >
          Work
        </Button>

        {/* About Button */}
        <Button as={NavLink} to="/about" variant="link" className='navBtn'
                sx={{
                    _hover: {
                    bgGradient: 'linear(to-br, #fff5dc 20%, #ffd572 65%, #f7ca18 100%)',
                    bgClip: 'text',
                    fontWeight: '350',
                    },

                    _activeLink: {
                    color: '#f7ca18',
                    fontWeight: '350', 
                    },
                }}
        >
          About
        </Button>
        
        {/* Contact Button */}
        <Button as={NavLink} to="/contact" variant="link" className='navBtn'
                sx={{
                    _hover: {
                    bgGradient: 'linear(to-br, #fff5dc 20%, #ffd572 65%, #f7ca18 100%)',
                    bgClip: 'text',
                    fontWeight: '350',
                    },

                    _activeLink: {
                    color: '#f7ca18',
                    fontWeight: '350', 
                    },
                }}
        >
          Contact
        </Button>
        </HStack>
    </Box>
  );
};

export default Navbar;
