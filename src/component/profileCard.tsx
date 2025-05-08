import {
    Box,
    VStack,
    Text,
    Flex,
    Image
  } from "@chakra-ui/react";
  import { GoBriefcase } from "react-icons/go";
  
  
  const ProfileCard = () => {
  
    return (
    <Flex gap={'2rem'} >
        <Box w={{base:'100%',lg:'40%'}} >
            <Flex justifyContent={'flex-end'} >
              <Image   alt="Media" src={'/andy-a.png'} />
            </Flex>
        </Box>  
     
        <Box w={{base:'100%',lg:'60%'}}>
            <VStack align="start" spacing={4} >
            <Text fontSize="2xl" fontWeight="bold" color={{lg:'white',base:'blcack'}}>
                Gabriel U.
            </Text>
    
            <Flex gap={'1rem'} alignItems={'center'} color={{lg:'white',base:'blcack'}} >
                <GoBriefcase  />
                 Managing Director
            </Flex>
    
            <Text fontSize="lg" fontWeight="semibold" mt={4}>
                BIO
            </Text>
            <Text>
            Andy is a highly experienced professional with over 15 years of expertise in data acquisition, engineering leadership, and organizational management. He has a strong background in Manufacturing Engineering from AU and a B.Sc in Computer Science. His extensive certifications, including IWCF (Level 1-4), API 6A, and specialized training in Thru Tubing Systems in Louisiana, further reinforce his commitment to industry best practices.
            </Text> 
            
            <Text>
            As a professional member of the Society of Petroleum Engineers (SPE), Andy remains actively engaged in advancing industry standards while mentoring professionals and driving talent development within Codes and Cogs Limited. His leadership philosophy centers on innovation, collaboration, and continuous professional growth, positioning the company as a trusted player in the sector.
            </Text>
    
            <Text fontSize="lg" fontWeight="semibold">
               Contact Information
            </Text>

            <Flex flexDir={{lg:'row',base:'column'}} gap={'1rem'}>
                <Text>Phone Number : </Text>
                <Text color={'#2E3192'}> +1 (667) 292-925</Text>
            </Flex>

            <Flex flexDir={{lg:'row',base:'column'}} gap={'1rem'}>
                <Text>Email :  </Text>
                <Text color={'#2E3192'}> andy@codesandcogs.com</Text>
            </Flex>
            </VStack>
        </Box>

    </Flex>
    );
  };
  
  export default ProfileCard;