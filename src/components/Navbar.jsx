// import components from chakra ui
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, HStack, Button, Image } from '@chakra-ui/react';
import './Navbar.css';


// Nvabar componenet
const Navbar = () => {
  return (
    <Box as="nav" p={4} className='navBox'>
      <Image boxSize='75px' objectFit='cover' mx={5} mt={2} src='/assets/images/jmLogo/jm-logo@2x.png' alt='JMcX logo' className='logo' />
      <HStack spacing={8} justify="right" mx={10} mt={4}>
        <Button as={NavLink} to="/" variant="link" className={({isActive}) => (isActive ? 'navBtn activeNav' : 'navBtn')}>Home</Button>
        <Button as={NavLink} to="/work" variant="link" className='navBtn' activeClassName='activeNav'>Work</Button>
        <Button as={NavLink} to="/about" variant="link" className='navBtn' activeClassName='activeNav'>About</Button>
        <Button as={NavLink} to="/contact" variant="link" className='navBtn' activeClassName='activeNav'>Contact</Button>
      </HStack>
    </Box>
  );
};

export default Navbar;
