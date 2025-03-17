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
    transform: translateX(-100%);
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
      <Flex 
        m={'6rem 0'}
        position="relative"
        width="100vw"
        left="50%"
        right="50%"
        ml="-50vw"
        mr="-50vw"
      >
        <Box
          display="flex"
          animation={`${marqueeAnimation} 20s linear infinite`}
          sx={{ 
            willChange: "transform",
            // Makes the marquee loop seamlessly
            '&:hover': {
              animationPlayState: 'paused'
            }
          }}
        >
          {[...partnerLogos, ...partnerLogos].map((logo, index) => (
            <Box 
              key={index} 
              flexShrink={0}
              minWidth="200px"
              mx={8}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Image 
                src={logo} 
                alt={`Partner ${index + 1}`} 
                maxH="60px" 
                width="auto"
                objectFit="contain"
              />
            </Box>
          ))}
        </Box>
      </Flex>
    </Box>
  );
};

export default PartnersSection;