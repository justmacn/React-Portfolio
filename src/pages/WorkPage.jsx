import React, { useState, useEffect } from 'react';
import { Menu, MenuButton, MenuList, MenuItemOption, MenuOptionGroup, Button, Box } from '@chakra-ui/react';
import { HiSortDescending } from "react-icons/hi";
import { projects } from '../data/projects';
import MediaCarousel from '../components/UI/MediaCarousel';
import './styles/Work.css'

const WorkPage = () => {
  const [currentTab, setCurrentTab] = useState("All");
  const [currentProject, setCurrentProject] = useState(null);

  useEffect(() => {
    const filteredProjects = currentTab === "All"
      ? projects
      : projects.filter((project) => project.projectType === currentTab);

    if (filteredProjects.length > 0) {
      setCurrentProject(filteredProjects[0]);
    } else {
      setCurrentProject(null);
    }
  }, [currentTab]);

  const handleTabChange = (index) => {
    switch (index) {
      case 0:
        setCurrentTab("All");
        break;
      case 1:
        setCurrentTab("Code");
        break;
      case 2:
        setCurrentTab("Visual");
        break;
      default:
        break;
    }
  };

  const handleCarouselChange = (index) => {
    const filteredProjects = currentTab === "All"
      ? projects
      : projects.filter((project) => project.projectType === currentTab);

    if (filteredProjects.length > 0) {
      setCurrentProject(filteredProjects[index]);
    }
  };

  const filteredProjects = currentTab === "All"
    ? projects
    : projects.filter((project) => project.projectType === currentTab);

  return (
    <Box as='main' p={10}>
      <Box display="flex" justifyContent="end" mb={6}>
        <Menu closeOnSelect>
          <MenuButton
            as={Button}
            leftIcon={<HiSortDescending />}
            variant="none"
            size="sm"
            className='tab'
            colorScheme='whiteAlpha'
          >
            Filter
          </MenuButton>
          <MenuList>
            <MenuOptionGroup
              type="radio"
              defaultValue="0"
              onChange={(value) => handleTabChange(Number(value))}
            >
              <MenuItemOption className='tab' value="0">All Projects</MenuItemOption>
              <MenuItemOption className='tab' value="1">Coding</MenuItemOption>
              <MenuItemOption className='tab' value="2">Film</MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </Menu>
      </Box>

      <Box as='section' mt={6}>
        {filteredProjects.length > 0 ? (
          <MediaCarousel
            projects={filteredProjects}
            onSlideChange={handleCarouselChange}
            info={currentProject}
          />
        ) : (
          <p>No projects available for {currentTab}.</p>
        )}
      </Box>
    </Box>
  );
};

export default WorkPage;
