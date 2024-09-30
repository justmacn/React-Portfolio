import React from 'react';
import { HStack, IconButton, Icon, Button, Image } from '@chakra-ui/react';
import { //import icons from devicons
  Css3Original,
  Html5Original,
  JavascriptOriginal,
  ReactOriginal,
  PostgresqlPlain,
  MongodbOriginal,
  NodejsOriginal,
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
  HandlebarsOriginal,
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
  Html5Original: {
    name: "CSS3",
    icon: Html5Original,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  NodejsOriginal: {
    name: "Node.js",
    icon: NodejsOriginal,
    link: "https://nodejs.org",
  },
  JqueryPlain: {
    name: "jQuery",
    icon: JqueryPlain,
    link: "https://jquery.com",
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
  HandlebarsOriginal: {
    name: "Handlebars",
    icon: HandlebarsOriginal,
    link: "https://handlebarsjs.com",
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
  // custom svg icons
  FinalCut: {
    name: "Final Cut Pro",
    icon: "/assets/images/tech-icons/finalcut.svg", 
    link: "https://www.apple.com/final-cut-pro/",
  },
  Canon: {
    name: "Canon",
    icon: "/assets/images/tech-icons/canon.svg", 
    link: "https://www.usa.canon.com/internet/portal/us/home/products/details/cameras/cinema-eos/cinema-eos-c100",
  },
  Photoshop: {
    name: "Adobe Photoshop",
    icon: "/assets/images/tech-icons/photoshop.svg", 
    link: "https://www.adobe.com/products/photoshop.html",
  },
  PremierePro: {
    name: "Adobe Premiere Pro",
    icon: "/assets/images/tech-icons/premierepro.svg", 
    link: "https://www.adobe.com/products/premiere.html",
  },
  Visme: {
    name: "Visme",
    icon: "/assets/images/tech-icons/visme.svg", 
    link: "https://www.visme.co/",
  },
  Panasonic: {
    name: "Panasonic",
    icon: "/assets/images/tech-icons/panasonic.svg", 
    link: "https://shop.panasonic.com/pages/lumix-g-series-mirrorless-micro-four-thirds-cameras",
  },
  Lumix: {
    name: "Lumix G",
    icon: "/assets/images/tech-icons/lumix.svg", 
    link: "https://www.panasonic.com/global/consumer/lumix.html",
  },
  Leica: {
    name: "Leica Lenses",
    icon: "/assets/images/tech-icons/leica.svg", 
    link: "https://www.leicacamerausa.com/photography/lenses-by-type",
  },
  Resolve: {
    name: "DaVinci Resolve",
    icon: "/assets/images/tech-icons/resolve.svg", 
    link: "https://www.blackmagicdesign.com/products/davinciresolve",
  },
  Zoom: {
    name: "Zoom Recorders",
    icon: "/assets/images/tech-icons/zoom.svg", 
    link: "https://zoomcorp.com/en/us/handheld-recorders/",
  },
  Zeiss: {
    name: "Zeiss Lenses",
    icon: "/assets/images/tech-icons/zeiss.svg", 
    link: "https://www.zeiss.com/consumer-products/int/photography.html",
  },
};

// main component with icons prop from ProjectInfoCard
const ProjectIcons = ({ icons }) => {
  return (
    <HStack spacing={2} mt={4} mb={2} align='start'>
      {icons.map((iconName, idx) => {
        const iconData = iconMap[iconName];

        // error handling if no icons in projects data
        if (!iconData) {
          console.error(`Icon with name "${iconName}" not found in iconMap`);
          return null;
        }

        // custom SVGs icons - <Image> component
        if (typeof iconData.icon === "string") {
          return (
            <Button
              key={idx}
              as="a"
              href={iconData.link}
              aria-label={iconData.name}
              variant="ghost"
              p={0}
              minW={0}
              sx={{
                _hover: {
                  transform: 'scale(1.35)',
                  transition: 'transform 0.2s',
                },
              }}
            >
              <Image src={iconData.icon} boxSize="37px" /> {/* Render custom SVG with Image */}
            </Button>
          );
        }

        // imported devicons - <Icon> component
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
