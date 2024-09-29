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
  FinalCutPro: {
    name: "Final Cut Pro",
    icon: "/assets/images/icons/finalcut.svg", // Custom SVG path
    link: "https://www.apple.com/final-cut-pro/",
  },
  Canon: {
    name: "Canon C100",
    icon: "/assets/images/icons/canon.svg", // Custom SVG path
    link: "https://www.usa.canon.com/internet/portal/us/home/products/details/cameras/cinema-eos/cinema-eos-c100",
  },
  Photoshop: {
    name: "Adobe Photoshop",
    icon: "/assets/images/icons/photoshop.svg", // Custom SVG path
    link: "https://www.adobe.com/products/photoshop.html",
  },
  PremierePro: {
    name: "Adobe Premiere Pro",
    icon: "/assets/images/icons/premierepro.svg", // Custom SVG path
    link: "https://www.adobe.com/products/premiere.html",
  },
  Visme: {
    name: "Visme",
    icon: "/assets/images/icons/visme.svg", // Custom SVG path
    link: "https://www.visme.co/",
  },
  Panasonic: {
    name: "Panasonic GH Series",
    icon: "/assets/images/icons/panasonic.svg", // Custom SVG path
    link: "https://shop.panasonic.com/pages/lumix-g-series-mirrorless-micro-four-thirds-cameras",
  },
  Lumix: {
    name: "Lumix",
    icon: "/assets/images/icons/lumix.svg", // Custom SVG path
    link: "https://www.panasonic.com/global/consumer/lumix.html",
  },
  Sigma: {
    name: "Sigma Lenses",
    icon: "/assets/images/icons/sigma.svg", // Custom SVG path
    link: "https://www.sigma-global.com/en/lenses/",
  },
  DaVinciResolve: {
    name: "DaVinci Resolve",
    icon: "/assets/images/icons/davinciresolve.svg", // Custom SVG path
    link: "https://www.blackmagicdesign.com/products/davinciresolve",
  },
  Zoom: {
    name: "Zoom Recorders",
    icon: "/assets/images/icons/zoom.svg", // Custom SVG path
    link: "https://zoomcorp.com/en/us/handheld-recorders/",
  },
  Zeiss: {
    name: "Zeiss Lenses",
    icon: "/assets/images/icons/zeiss.svg", // Custom SVG path
    link: "https://www.zeiss.com/consumer-products/int/photography.html",
  },
};

// main component with icons prop from ProjectInfoCard
const ProjectIcons = ({ icons }) => {
  return (
    <HStack spacing={2} mt={4} mb={2} align='start'>
      {icons.map((iconName, idx) => {
        const iconData = iconMap[iconName];

        // custom SVGs icons - <Image> component
        if (typeof iconData.icon === "string") {
          return (
            <IconButton
              key={idx}
              as="a"
              href={iconData.link}
              aria-label={iconData.name}
              icon={<Image src={iconData.icon} size="30" />} 
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
