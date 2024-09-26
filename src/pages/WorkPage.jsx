import React, { useState, useEffect } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react';
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
        setCurrentTab("Visual");
        break;
      case 2:
        setCurrentTab("Code");
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
      <Tabs onChange={handleTabChange} variant="unstyle">
        <Box as='div' display='flex' justifyContent='start'>
          <TabList className='tab-group'>
            <Tab className='tab tab1'>All</Tab>
            <Tab className='tab tab2'>Film</Tab>
            <Tab className='tab tab3'>Code</Tab>
          </TabList>
        </Box>

        <Box as='section'>
          <TabPanels>
            <TabPanel>
              {filteredProjects.length > 0 ? (
                <>
                  <Box>
                    <MediaCarousel
                      projects={filteredProjects}
                      onSlideChange={handleCarouselChange}
                      info={currentProject}
                    />
                  </Box>
                </>
              ) : (
                <p>No projects available.</p>
              )}
            </TabPanel>

            <TabPanel>
              {filteredProjects.length > 0 ? (
                <>
                  <MediaCarousel
                    projects={filteredProjects}
                    onSlideChange={handleCarouselChange}
                    info={currentProject}
                  />
                </>
              ) : (
                <p>No projects available for Visual.</p>
              )}
            </TabPanel>

            <TabPanel>
              {filteredProjects.length > 0 ? (
                <>
                  <MediaCarousel
                    projects={filteredProjects}
                    onSlideChange={handleCarouselChange}
                    info={currentProject}
                  />
                </>
              ) : (
                <p>No projects available for Code.</p>
              )}
            </TabPanel>
          </TabPanels>
        </Box>
      </Tabs>
    </Box>
  );
};

export default WorkPage;
