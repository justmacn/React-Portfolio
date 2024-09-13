import React from 'react';
import { Box, Heading, Text, HStack, Icon, Link } from '@chakra-ui/react';

const ProjectInfoCard = ({ project }) => {
  if (!project) {
    return <Box>No project selected.</Box>;
  }

  return (
    <Box p={6} borderWidth={1} borderRadius="lg">
      <Heading fontSize="xl">{project.title}</Heading>
      <Text mt={2}>{project.description}</Text>
      <Text fontWeight="bold" mt={2}>{project.position}</Text>

      <HStack spacing={4} mt={4}>
        {project.softwareIcons && project.softwareIcons.map((icon, idx) => (
          <Icon key={idx} as={icon} />
        ))}
      </HStack>

      <Link href={`${project.url}`} mt={4} color="teal.500">
        Live Demo
      </Link>
    </Box>
  );
};

export default ProjectInfoCard;
