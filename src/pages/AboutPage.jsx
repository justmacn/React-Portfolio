import React from 'react';
import { Flex, VStack, Link, Box, Heading, Text, Image, HStack, Icon, Card, CardBody, List, ListItem, ListIcon, Divider, Stack } from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaTwitter, FaVimeo } from 'react-icons/fa';
import { PiBookmarksSimpleFill } from 'react-icons/pi';
import { Right } from '@icon-park/react';
import './styles/About.css';

const AboutPage = () => {
  return (
    <Flex direction="row" justify="space-between" align="center" px={12} pt={12} gap={8}>
      {/* left: photo card & social links */}
        <VStack className='card-container' spacing={6} width="35%">
          <Card size='sm' width="60%" variant='elevated' borderRadius='lg' alignSelf='center'>
            <CardBody >
              <Image
                src="/assets/images/profile-pic1.PNG"
                alt="Profile picture"
                borderRadius='lg'></Image>
              <Divider></Divider>
              <Stack mt='3' spacing='2'>
                <Heading as='h3' className='header'>Things I love (currently)</Heading>
                <List spacing={1}>
                  <ListItem>
                    <ListIcon as={PiBookmarksSimpleFill} color='green.500' />
                    Watching sports
                  </ListItem>
                  <ListItem>
                    <ListIcon as={PiBookmarksSimpleFill} color='green.500' />
                    Ranking up in Halo
                  </ListItem>
                  <ListItem>
                    <ListIcon as={PiBookmarksSimpleFill} color='green.500' />
                    All things Anime
                  </ListItem>
                </List>
              </Stack>
            </CardBody>
          </Card>
          <HStack spacing={4} alignSelf="center" mt={0}>
            <Icon as={FaLinkedin} w={8} h={8} />
            <Icon as={FaGithub} w={8} h={8} />
            <Icon as={FaTwitter} w={8} h={8} />
            <Icon as={FaVimeo} w={8} h={8} />
          </HStack>
        </VStack>


      {/* center: header & text */}
        <VStack className='body-container' spacing={6} align="flex-end">
          <Heading as='h1' className='title'>About me.</Heading>
          <Text className='body'>
            I am a storyteller and developer, passionate about creating visual stories through code. My journey has taken me through various roles in film and media, where I've honed my skills in design and user experience.
          </Text>
          <Text className='body'>
            I believe in the power of technology to connect people and tell compelling stories. Whether it's through a beautifully designed website, an inspirational movie, or an engaging application, I strive to create visual experiences that resonate with viewers.
          </Text>
        </VStack>


      {/* Right: tagline & cv */}
        <VStack spacing={6} align="center" width="30%">
          <Text className='tagline'>
            Infinite possibilities
          </Text>
          <Link href={`/assets/50988457.pdf`} target="_blank" rel='noopener noreferrer' >
            <span className='resume-link'>CV / Resume</span><span><Icon as={Right} theme="outline" size="25" fill="#333" strokeWidth={2} strokeLinecap="square" /></span>
          </Link>
        </VStack>

    </Flex>

  );
};

export default AboutPage;
