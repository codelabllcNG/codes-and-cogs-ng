import { Box, Image, IconButton,Link,Text } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import React from "react";

interface AdsComponentProp {
    imageUrl : string,
    mobileUrl?: string
    link : string,
}

const AdsComponent :React.FC<AdsComponentProp> = ({imageUrl,link,mobileUrl}) => {
  const handleClose = () => {
    // Handle close logic here
    console.log("Closed the image");
  };

  return (
    
    <Box position="relative" maxW="fit-content">
      {/* Image Container */}
      <Text textAlign={'center'} color={'black'}>Advertisment</Text>
      <Link href={link} >
      <Image
        src={imageUrl}
        alt="Advertisement"
        borderRadius="md"
        boxShadow="lg"
        display={{lg:'block',md:'block',sm:'none',base:'none'}}
      />
      <Image
        src={mobileUrl}
        alt="Advertisement"
        borderRadius="md"
        boxShadow="lg"
        display={{lg:'none',md:'none',sm:'block',base:'block'}}
      />
      </Link>
  
      
      {/* Close Button */}
      <IconButton
      display={'none'}
        aria-label="Close image"
        icon={<CloseIcon />}
        position="absolute"
        right="2"
        top="2"
        onClick={handleClose}
        size="sm"
        borderRadius="full"
        colorScheme="red"
        bg="red.500"
        color="white"
        _hover={{
          bg: "red.600",
          transform: "scale(1.1)",
        }}
        _active={{
          transform: "scale(0.9)",
        }}
      />
    </Box>
  
  );
};

export default AdsComponent