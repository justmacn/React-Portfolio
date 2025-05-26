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
    <Box as='main' p={10} mt={4} display='flex' flexDirection='column' justifyContent='center'>
      <Box display="flex" justifyContent="end" mb={6}>

        {/* project tabs/menu */}
        <Menu closeOnSelect>
          <Box>
            <MenuButton
              as={Button}
              leftIcon={<HiSortDescending />}
              variant="none"
              size="md"
              className='menu'
              colorScheme='whiteAlpha'
              _hover={{ bg: 'transparent', color: '#ffebc5', borderColor: 'transparent' }}
              _focus={{ outline: 'none', boxShadow: 'none'}}
            >
              Sort
            </MenuButton>
          </Box>

          <MenuList background='#1d1d1d' border='none' minWidth='150px'>
            <MenuOptionGroup title='' type="radio" defaultValue="0" onChange={(value) => handleTabChange(Number(value))}>
              <MenuItemOption 
                value="0"
                className='tab'
                background='#1d1d1d' 
                _hover={{ bg: '#565656', borderColor: 'transparent' }}
                _focus={{ outline: 'none', boxShadow: 'none'}}
                _checked={{ color: '#ffbb00'}}                
              >
                All Projects
                </MenuItemOption>

              <MenuItemOption 
                value="1"
                className='tab'
                background='#1d1d1d' 
                _hover={{ bg: '#565656', borderColor: 'transparent' }}
                _focus={{ outline: 'none', boxShadow: 'none'}}
                _checked={{ color: '#ffbb00'}}                 
              >
              Coding
              </MenuItemOption>

              <MenuItemOption 
                value="2"
                className='tab'
                background='#1d1d1d' 
                _hover={{ bg: '#565656', borderColor: 'transparent' }}
                _focus={{ outline: 'none', boxShadow: 'none'}}
                _checked={{ color: '#ffbb00'}}                
              >
              Visuals
              </MenuItemOption>

            </MenuOptionGroup>
          </MenuList>

        </Menu>
      </Box>

      {/* render media carousel based on tab */}
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
