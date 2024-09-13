import React from 'react';
import { Link } from 'react-router-dom';
import { Box, HStack, Button } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Box as="nav" p={4} bg="gray.800" color="white">
      <HStack spacing={8} justify="center">
        <Button as={Link} to="/" variant="ghost" colorScheme="whiteAlpha">Home</Button>
        <Button as={Link} to="/about" variant="ghost" colorScheme="whiteAlpha">About</Button>
        <Button as={Link} to="/work" variant="ghost" colorScheme="whiteAlpha">Work</Button>
        <Button as={Link} to="/contact" variant="ghost" colorScheme="whiteAlpha">Contact</Button>
      </HStack>
    </Box>
  );
};

export default Navbar;
