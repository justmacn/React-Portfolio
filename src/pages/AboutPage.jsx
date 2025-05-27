import React from 'react';
import { Flex, VStack, Link, Box, Heading, Text, Image, HStack, Icon, Card, CardBody, CardHeader, CardFooter, Divider } from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaTwitter, FaVimeo } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <Flex>
      {/* left: photo card & social links */}
      <Box>
        <Vstack>
          <Card>
            <Image 
            src="/assets/images/RkicXp6zSCCjyyXKyqg7Uw.png"
            alt="Profile"></Image>
            <Divider></Divider>
            <Heading></Heading>
            <Text></Text>
          </Card>
          <HStack spacing={8} justify="center" mt={6}>
            <Icon as={FaLinkedin} w={8} h={8} />
            <Icon as={FaGithub} w={8} h={8} />
            <Icon as={FaTwitter} w={8} h={8} />
            <Icon as={FaVimeo} w={8} h={8} />
          </HStack>
        </Vstack>
      </Box>

      {/* center: header & text */}
      <Box>
        <VStack>
          <Heading>About Me</Heading>
          <Text>
            I am a storyteller and developer, passionate about creating visual stories through code. My journey has taken me through various roles in tech, where I've honed my skills in web development, design, and user experience.
          </Text>
          <Text>
            I believe in the power of technology to connect people and tell compelling stories. Whether it's through a beautifully designed website or an engaging application, I strive to create experiences that resonate with users.
          </Text>
        </VStack>
      </Box>

      {/* Right: tagline & cv */}
      <Box>
        <VStack>
          <Text>
            Infinite possibiltiies
          </Text>
          <Link href={``} color="teal.500">
          <span className='demo-link'>CV / Resume</span><span><Icon as={Right} theme="outline" size="25" fill="#333" strokeWidth={2} strokeLinecap="square" /></span>
        </Link>
        </VStack>
      </Box>
    </Flex>

  );
};

export default AboutPage;
