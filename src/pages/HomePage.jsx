import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Box textAlign="center" p={10}>
      <Heading fontSize="4xl">Justmacn</Heading>
      <Text fontSize="xl" mt={4}>Storyteller & Developer</Text>
      <Button as={Link} to="/work" colorScheme="teal" size="lg" mt={6}>
        View My Work
      </Button>
    </Box>
  );
};

export default HomePage;
