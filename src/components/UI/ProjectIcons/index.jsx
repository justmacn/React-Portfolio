import React from 'react';
import { HStack, IconButton, Icon } from '@chakra-ui/react';
import { //import icons from devicons
  Css3Original,
  Html5Original,
  JavascriptOriginal,
  ReactOriginal,
  PostgresqlPlain,
  MongodbOriginal,
  NodejsOriginal,
  PhotoshopOriginal,
  PremiereproOriginal,
  FigmaOriginal,
  JqueryPlain,
  TailwindcssOriginal,
  BootstrapOriginal,
  ChakrauiOriginal,
  ExpressOriginal,
  VitejsOriginal,
  JestPlain,
  GraphqlPlain,
  NpmOriginal,
} from 'devicons-react';
import '../MediaCarousel/MediaCarousel.css';


// global array of technology icons
const iconMap = {
  JavascriptOriginal: {
    name: "JavaScript",
    icon: JavascriptOriginal,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  ReactOriginal: {
    name: "React",
    icon: ReactOriginal,
    link: "https://react.dev",
  },
  Css3Original: {
    name: "CSS3",
    icon: Css3Original,
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  NodejsOriginal: {
    name: "Node.js",
    icon: NodejsOriginal,
    link: "https://nodejs.org",
  },
  VitejsOriginal: {
    name: "Vite",
    icon: VitejsOriginal,
    link: "https://vitejs.dev",
  },
  ChakrauiOriginal: {
    name: "Chakra UI",
    icon: ChakrauiOriginal,
    link: "https://chakra-ui.com",
  },
  FigmaOriginal: {
    name: "Figma",
    icon: FigmaOriginal,
    link: "https://www.figma.com",
  },
  MongodbOriginal: {
    name: "MongoDB",
    icon: MongodbOriginal,
    link: "https://www.mongodb.com",
  },
  PostgresqlPlain: {
    name: "PostgreSQL",
    icon: PostgresqlPlain,
    link: "https://www.postgresql.org",
  },
  TailwindcssOriginal: {
    name: "Tailwind CSS",
    icon: TailwindcssOriginal,
    link: "https://tailwindcss.com",
  },
  BootstrapOriginal: {
    name: "Bootstrap",
    icon: BootstrapOriginal,
    link: "https://getbootstrap.com",
  },
  ExpressOriginal: {
    name: "Express",
    icon: ExpressOriginal,
    link: "https://expressjs.com",
  },
  JestPlain: {
    name: "Jest",
    icon: JestPlain,
    link: "https://jestjs.io",
  },
  GraphqlPlain: {
    name: "GraphQL",
    icon: GraphqlPlain,
    link: "https://graphql.org",
  },
  NpmOriginal: {
    name: "NPM",
    icon: NpmOriginal,
    link: "https://www.npmjs.com",
  },
};

// main component with icons prop from ProjectInfoCard
const ProjectIcons = ({ icons }) => {
  return (
    <HStack spacing={4} mt={4} mb={1} align='start'>
      {icons.map((iconName, idx) => {
        const iconData = iconMap[iconName];

        return iconData ? (
          <IconButton
            key={idx}
            as="a"
            href={iconData.link}
            aria-label={iconData.name}
            icon={<Icon as={iconData.icon} size="30" />}
            variant="ghost"
            p={0}
            minW={0} 
            sx={{
              _hover: {
                transform: 'scale(1.35)',
                transition: 'transform 0.2s',
              },
            }}
          />
        ) : null; 
      })}
    </HStack>
  );
};

export default ProjectIcons;
