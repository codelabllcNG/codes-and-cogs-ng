import React from "react";
import { Box, Heading, Text, Image, Flex } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const partnerLogos = [
  "/LOGOS/OSHA.svg",
  "/LOGOS/API.svg",
  "/LOGOS/ES.svg",
  "/LOGOS/IWCF.svg",
  "/LOGOS/CODELAB.svg",
  "/LOGOS/ES.svg",
];

const marqueeAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const PartnersSection = () => {
  return (
    <Box textAlign="center" py={10} position="relative" overflow="hidden">
      <Heading size="lg" mb={'3rem'} color="blue.700">
        OUR PARTNERS
      </Heading>
      <Text maxW="700px" m="3rem auto" color="gray.600">
        At Codes and Cogs, we believe in collaboration. By partnering with reliable and trusted industry leaders, we enhance our ability to deliver exceptional solutions and drive mutual success.
      </Text>

      {/* Marquee container */}
      <Box 
        position="relative"
        width="100%"
        overflow="hidden"
        m={'3rem 0'}
      >
        <Flex
          position="relative"
          width="max-content"
          animation={`${marqueeAnimation} 15s linear infinite`}
          sx={{ 
            willChange: "transform",
            '&:hover': {
              animationPlayState: 'paused'
            }
          }}
        >
          {/* First set of logos */}
          {partnerLogos.map((logo, index) => (
            <Box 
              key={index}
              flexShrink={0}
              width="180px" 
              height="90px"
              mx={1}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
                <Image 
                  src={logo} 
                  alt={`Partner ${index + 1}`} 
                  maxW="100%" 
                  maxH="100%"
                  objectFit="contain"
                />
            </Box>
          ))}
          
          {/* Duplicate set of logos to create seamless loop */}
          {partnerLogos.map((logo, index) => (
         <Box 
         key={index}
         flexShrink={0}
         width="180px" 
         height="90px"
         mx={1}
         display="flex"
         alignItems="center"
         justifyContent="center"
       >
         <Image 
           src={logo} 
           alt={`Partner ${index + 1}`} 
           maxW="100%" 
           maxH="100%"
           objectFit="contain"
         />
       </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default PartnersSection;