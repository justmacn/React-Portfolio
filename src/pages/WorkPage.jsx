// WorkPage.jsx
import React, { useState } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react';
import { projects } from '../data/projects.js';
import MediaCarousel from '../components/UI/MediaCarousel';
import ProjectInfoCard from '../components/UI/ProjectInfoCard';

const WorkPage = () => {
  const [currentTab, setCurrentTab] = useState("Visual");

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

  const filteredProjects = currentTab === "All"
  ? projects
  : projects.filter((project) => project.projectType === currentTab);

  return (
    <Box p={10}>
      <Tabs onChange={handleTabChange} variant="enclosed">
        <TabList>
          <Tab>All</Tab>
          <Tab>Visual</Tab>
          <Tab>Code</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <MediaCarousel projects={projects} />
            <ProjectInfoCard project={projects[0]} />
          </TabPanel>
          <TabPanel>
            <MediaCarousel projects={filteredProjects} />
            <ProjectInfoCard project={filteredProjects[0]} />
          </TabPanel>
          <TabPanel>
            <MediaCarousel projects={filteredProjects} />
            <ProjectInfoCard project={filteredProjects[0]} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default WorkPage;
