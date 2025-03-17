import {
    Box,
    VStack,
    Text,
    Checkbox,
    Divider,
    Flex,
    Badge,
    Wrap,
    WrapItem,
    Image
  } from "@chakra-ui/react";
  import { FaRegCheckCircle, FaRegCircle, FaTag } from "react-icons/fa";
  import { GoBriefcase } from "react-icons/go";
  import { IoLocationOutline } from "react-icons/io5";
  
  
  const ProfileCard = () => {
    const expertise = [
      "Pressure Control Systems",
      "DXE1-A",
      "Fishing Operations",
      "Diagnostics",
      "ADC",
      "ADC",
      "Mechanical Interventions",
      "Pressure Control Systems",
    ];
  
    return (
    <Flex gap={'2rem'} alignItems={'center'}>
        <Box w={{base:'100%',lg:'40%'}}>
            <Flex justifyContent={'flex-end'}>
            <Image src={'tra1.svg'} />
            </Flex>
        </Box>  
     
        <Box w={{base:'40%',lg:'40%'}}>
            <VStack align="start" spacing={4}>
            <Text fontSize="2xl" fontWeight="bold">
                Gabriel U.
            </Text>
            <Text fontSize="xl" fontWeight="bold">
                IWCF 2-4, Data Acquisition Trainer
            </Text>
    
            <Flex gap={'1rem'} alignItems={'center'} >
                <GoBriefcase color="#2E3192" />
                Software Engineer
            </Flex>

            <Flex gap={'1rem'} alignItems={'center'} >
            <IoLocationOutline color="#2E3192" />
            Maryland, United States
            </Flex>
    
            <Text fontSize="lg" fontWeight="semibold" mt={4}>
                BIO
            </Text>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex commodo consequat. Sua ante liber idade in
                reprehenderit la voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                sint occorre complotant non pudolant, sent in culpa qui officia ductorant nullit anim id
                est laboratu.
            </Text>
    
            <Text fontSize="lg" fontWeight="semibold">
                EXPERTISE
            </Text>
            
            <Wrap spacing={2}>
                {expertise.map((skill, skillIndex) => (
                        <Flex 
                        key={skillIndex} 
                        p={2} 
                        borderRadius={'12px'} 
                        border={'0.8px solid #A3A2A2'}
                        fontSize={['xs', 'sm']}
                        >
                        {skill}
                        </Flex>
                    ))}
            </Wrap>

            </VStack>
        </Box>
    </Flex>
    );
  };
  
  export default ProfileCard;