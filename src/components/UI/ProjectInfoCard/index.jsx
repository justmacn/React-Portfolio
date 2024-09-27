import React from 'react';
import { Box, Heading, Text, HStack, Icon, Link } from '@chakra-ui/react';
import { Right } from '@icon-park/react';
import '../MediaCarousel/MediaCarousel.css';

import iconTest from '/assets/icons/adobe-premiere-svg.png'

const ProjectInfoCard = ({ project }) => {
  if (!project) {
    return <Box>No project selected.</Box>;
  }

  return (
    <Box p={6} borderWidth={1} borderRadius="lg">
      {/* project info */}
      <Heading as='h1' className='title'>{project.title}</Heading>
      <Text as='h3' className='role' mt={2}>{project.position}</Text>
      <Text as='p' className='description' mt={2}>{project.description}</Text>

      {/* project tools/icons */}
      <HStack spacing={4} mt={4}>

          <Icon as={iconTest} />

      </HStack>

      {/* demo link */}
      <Link href={`${project.url}`} mt={4} color="teal.500">
        <span className='demo-link'>Live Demo</span><span><Icon as={Right} theme="outline" size="25" fill="#333" strokeWidth={2} strokeLinecap="square"/></span>
      </Link>
    </Box>
  );
};

export default ProjectInfoCard;
