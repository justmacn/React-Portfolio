import React from 'react';
import { Box, Heading, Text, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react';

const ContactPage = () => {
  return (
    <Box p={10}>
      <Heading>Contact Me</Heading>
      <Text mt={4}>Fill out the form to get in touch.</Text>

      <FormControl mt={6}>
        <FormLabel>Name</FormLabel>
        <Input type="text" placeholder="Your Name" />

        <FormLabel mt={4}>Email</FormLabel>
        <Input type="email" placeholder="Your Email" />

        <FormLabel mt={4}>Message</FormLabel>
        <Textarea placeholder="Your Message" />

        <Button colorScheme="teal" mt={6}>Send Message</Button>
      </FormControl>
    </Box>
  );
};

export default ContactPage;
