import React from 'react';
import { Box, Heading, Text, Icon, Link } from '@chakra-ui/react';
import { Right } from '@icon-park/react';
import '../MediaCarousel/MediaCarousel.css';

import ProjectIcons from '../ProjectIcons/Index.jsx';

const ProjectInfoCard = ({ project }) => {
  if (!project) {
    return <Box>No project selected.</Box>;
  }

  return (
    <Box as='div' py={6} pr={6} borderWidth={0} borderRadius="lg">
      {/* project info */}
      <Heading as='h1' className='title'>{project.title}</Heading>
      <Text as='h3' className='role' mt={0}>{project.position}</Text>
      <Text as='p' className='description' mt={0}>{project.description}</Text>


      {/* demo link */}
      <Box as='div' mt={0} mb={12}>
        <Link href={`${project.url}`} color="teal.500">
          <span className='demo-link'>Live Demo</span><span><Icon as={Right} theme="outline" size="25" fill="#333" strokeWidth={2} strokeLinecap="square" /></span>
        </Link>
      </Box>

      {/* project tools/icons */}
      <ProjectIcons icons={project.icons} />
    </Box>
  );
};

export default ProjectInfoCard;
