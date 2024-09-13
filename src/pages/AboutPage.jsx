import React from 'react';
import { Box, Heading, Text, Image, HStack, Icon } from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaTwitter, FaVimeo } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <Box p={10} textAlign="center">
      <Image
        className='media-item'
        borderRadius="full"
        boxSize="150px"
        src="public/assets/images/RkicXp6zSCCjyyXKyqg7Uw.png"
        alt="Profile"
        mx="auto"
      />
      <Heading fontSize="2xl" mt={4}>Justin McLaughlin</Heading>
      <Text fontSize="lg" mt={2}>My favorite things at the moment are watching sports, playing Halo on a weekend, and Fall time bike rides.</Text>

      <HStack spacing={8} justify="center" mt={6}>
        <Icon as={FaLinkedin} w={8} h={8} />
        <Icon as={FaGithub} w={8} h={8} />
        <Icon as={FaTwitter} w={8} h={8} />
        <Icon as={FaVimeo} w={8} h={8} />
      </HStack>
    </Box>
  );
};

export default AboutPage;
