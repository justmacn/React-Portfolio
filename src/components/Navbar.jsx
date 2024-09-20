// import components from chakra ui
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, HStack, Button, Image } from '@chakra-ui/react';
import './Navbar.css';


// Nvabar componenet w/ style prop for active state
const Navbar = () => {
  return (
    <Box as="nav" p={4} className='navBox'>
      <Image boxSize='75px' objectFit='cover' mx={5} mt={2} src='/assets/images/jmLogo/jm-logo@2x.png' alt='JMcX logo' className='logo' />
      <HStack spacing={8} justify="right" mx={10} mt={4}>

        {/* Home Tab */}
        <Button as={NavLink} to="/" variant="link" className='navBtn'
                sx={{
                    // hover styling
                    _hover: {
                    color: 'goldenrod',
                    fontWeight: '300',
                    },
                    // active styling
                    _activeLink: {
                    color: 'goldenrod',
                    fontWeight: '400', 
                    },
                }}
        >
          Home
        </Button>

        {/* Work Button */}
        <Button as={NavLink} to="/work" variant="link" className='navBtn'
                sx={{
                    _hover: {
                    color: 'goldenrod',
                    fontWeight: '300',
                    },

                    _activeLink: {
                    color: 'goldenrod',
                    fontWeight: '400', 
                    },
                }}
        >
          Work
        </Button>

        {/* About Button */}
        <Button as={NavLink} to="/about" variant="link" className='navBtn'
                sx={{
                    _hover: {
                    color: 'goldenrod',
                    fontWeight: '300',
                    },

                    _activeLink: {
                    color: 'goldenrod',
                    fontWeight: '400', 
                    },
                }}
        >
          About
        </Button>
        
        {/* Contact Button */}
        <Button as={NavLink} to="/contact" variant="link" className='navBtn'
                sx={{
                    _hover: {
                    color: 'goldenrod',
                    fontWeight: '300',
                    },

                    _activeLink: {
                    color: 'goldenrod',
                    fontWeight: '400', 
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
