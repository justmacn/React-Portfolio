// import components from chakra ui
import React from 'react';
import { NavLink } from 'react-router-dom';
import { HStack, Button, Image, Flex, Spacer } from '@chakra-ui/react';
import './Navbar.css';


// Nvabar componenet w/ style prop for active state
const Navbar = () => {
  return (
    <Flex as="nav" p={4} pt={5} className='navBox' minWidth='max-content' alignItems='center' gap='2'>
      <Image boxSize='75px' objectFit='cover' mx={8} pt={0} src='/assets/images/jmLogo/jm-logo@3x-2.png' alt='JMcX logo' className='logo' />
      <Spacer />
      <HStack spacing={8} justify="right" mx={7} pt={6}>

        {/* Home Tab */}
        <Button as={NavLink} to="/" variant="link" className='navBtn'
                sx={{
                    // hover styling
                    _hover: {
                    bgGradient: 'linear(140deg, #fff5e3 12%, #ffcb79 65%, #ffc53e 90%)',
                    bgClip: 'text',
                    fontWeight: '350',
                    },
                    // active styling
                    _activeLink: {
                    color: '#ffbb00;',
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
                    bgGradient: 'linear(140deg, #fff5e3 12%, #ffcb79 65%, #ffc53e 90%)',
                    bgClip: 'text',
                    fontWeight: '350',
                    },

                    _activeLink: {
                    color: '#ffbb00;',
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
                    bgGradient: 'linear(140deg, #fff5e3 12%, #ffcb79 65%, #ffc53e 90%)',
                    bgClip: 'text',
                    fontWeight: '350',
                    },

                    _activeLink: {
                    color: '#ffbb00;',
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
                    bgGradient: 'linear(140deg, #fff5e3 12%, #ffcb79 65%, #ffc53e 90%)',
                    bgClip: 'text',
                    fontWeight: '350',
                    },

                    _activeLink: {
                    color: '#ffbb00;',
                    fontWeight: '350', 
                    },
                }}
        >
          Contact
        </Button>
        </HStack>
    </Flex>
  );
};

export default Navbar;
