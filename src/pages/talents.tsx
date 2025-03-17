import { useState } from 'react';
import Navigator from "@/component/navigator";
import Footer from "@/component/footer";
import { 
  Tabs, TabList, Tab, TabPanels, TabPanel, 
  Flex, Box, Text, Heading, Button, Icon, Image, Grid, GridItem 
} from '@chakra-ui/react';
import { 
  FaOilCan, 
  FaHardHat, 
  FaWater, 
  FaLaptopCode,
  FaTools,
  FaCertificate,
  FaFish
} from 'react-icons/fa';
import { FaStethoscope } from 'react-icons/fa';

const Talents = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const categories = [
    { 
      title: "Well-Service Operators",
      value: "489.33",
      icon: FaOilCan,
      subcategories: ["Drilling Operators", "Offshore Operators"]
    },
    { 
      title: "Digital Solution Providers",
      value: "28.67",
      icon: FaLaptopCode
    },
    { 
      title: "Drilling Operators",
      value: "28.67",
      icon: FaLaptopCode
    },
    { 
      title: "Offshore Operators",
      value: "28.67",
      icon: FaLaptopCode
    }
  ];

  const talents = [
    {
      name: "Gabriel J.",
      role: "Slickline Operator",
      expertise: ["Pressure Control Systems", "IWCF 1-4", "Fishing Operations", "Diagnostics", "IADC"],
      category: 0
    },
    {
      name: "Otunba B.",
      role: "Wireline Operator",
      expertise: ["Mechanical Intervention", "IWCF 1-4", "Fishing Operations", "Diagnostics", "IADC"],
      category: 0
    },
    {
      name: "Otunba B.",
      role: "Wireline Operator",
      expertise: ["Mechanical Intervention", "IWCF 1-4", "Fishing Operations", "Diagnostics", "IADC"],
      category: 0
    },
    {
      name: "Otunba B.",
      role: "Wireline Operator",
      expertise: ["Mechanical Intervention", "IWCF 1-4", "Fishing Operations", "Diagnostics", "IADC"],
      category: 0
    },
    {
      name: "Otunba B.",
      role: "Wireline Operator",
      expertise: ["Mechanical Intervention", "IWCF 1-4", "Fishing Operations", "Diagnostics", "IADC"],
      category: 0
    },
    {
      name: "Otunba B.",
      role: "Wireline Operator",
      expertise: ["Mechanical Intervention", "IWCF 1-4", "Fishing Operations", "Diagnostics", "IADC"],
      category: 0
    },
    {
      name: "Otunba B.",
      role: "Wireline Operator",
      expertise: ["Mechanical Intervention", "IWCF 1-4", "Fishing Operations", "Diagnostics", "IADC"],
      category: 0
    },
    {
      name: "Otunba B.",
      role: "Wireline Operator",
      expertise: ["Mechanical Intervention", "IWCF 1-4", "Fishing Operations", "Diagnostics", "IADC"],
      category: 0
    },
    {
      name: "Otunba B.",
      role: "Wireline Operator",
      expertise: ["Mechanical Intervention", "IWCF 1-4", "Fishing Operations", "Diagnostics", "IADC"],
      category: 0
    },
    {
      name: "Usang O.",
      role: "Coil Tubing Operator",
      expertise: ["Mechanical Intervention", "IWCF 1-4", "Fishing Operations", "Diagnostics", "IADC"],
      category: 0
    }
  ];

  const filteredTalents = talents.filter(talent => talent.category === activeTab);

  return (
    <Box>
        <Navigator />

            <Box
                maxWidth="2000px"
                mx="auto"
                bg="#0D0F3A" // Change the text color if needed.
                color={'white'}
                padding={{
                lg: "3rem 5rem",
                md: "1.5rem 2rem",
                sm: "1rem",
                base: "1rem",
                }}
                >
                        <Box  >   
                                <Heading textAlign={'center'} m={'1rem'} fontWeight={'500'}>Our Talent</Heading>
                        </Box>
            </Box> 

            <Box
                        maxWidth="2000px"
                        mx="auto"
                        padding={{
                        lg: "1.5rem 5rem",
                        md: "1.5rem 2rem",
                        sm: "1rem",
                        base: "1rem",
                        }}
                    >
                 <Box w={'100%'}>
                        {/* Header - Now scrollable on mobile */}
                        <Flex 
                            w={'100%'} 
                            overflowX="auto"
                            borderTop={'1px solid #CCC'} 
                            borderBottom={'1px solid #CCC'}
                            px={[2, 4, 0]}
                            >
                                <Flex minW="max-content" justifyContent={['start', 'start', 'space-between']} w="100%">
                                    {categories.map((category, index) => (
                                    <Flex 
                                        key={index}
                                        p={['1rem', '2rem 0']} 
                                        borderBottom={activeTab === index ? '2px solid #2E3192' : 'none'}
                                        cursor="pointer"
                                        onClick={() => setActiveTab(index)}
                                        color={activeTab === index ? '#2E3192' : 'inherit'}
                                        flexShrink={0}
                                        mx={[2, 4]}
                                    >
                                        <Icon as={category.icon} mr={2} boxSize={['16px', '20px']} />
                                        <Heading fontSize={['sm', '19px']} whiteSpace="nowrap">
                                        {category.title}
                                        </Heading>
                                    </Flex>
                                    ))}
                                </Flex>
                        </Flex>

                        {/* Body - Stack on mobile */}
                        <Flex mt={'2rem'} flexDirection={['column', 'column', 'row']}>
                        <Box w={['100%', '100%', '100%']} p={[2, 4]}>
                            <Grid 
                            templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(4, 1fr)']} 
                            gap={[4, 6]}
                            >
                            {filteredTalents.map((talent, index) => (
                                <GridItem key={index} w="100%">
                                <Box w={'100%'} boxShadow={'lg'} p={2}>
                                    <Image w={'100%'} src='Talent4.svg' />
                                    <Heading m={'0.2rem 0'} fontSize={['md', '20px']} color={'#333'}>
                                    {talent.name}
                                    </Heading>
                                    <Text m={'0.2rem 0'} fontSize={['sm', '16px']} color={'#2E3192'}>
                                    {talent.role}
                                    </Text>
                                    <Text fontSize={['xs', '14px']} color={'#333'}>Expertise</Text>
                                    <Flex mt={3} wrap="wrap" gap={2}>
                                    {talent.expertise.map((skill, skillIndex) => (
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
                                    </Flex>
                    
                                    <Button width={'fit-content'} m={'3rem 0'} borderRadius="4px" padding={'12px 24px'} textColor={'white'} bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)" boxShadow="2px 5px 5px 0px rgba(51, 51, 51, 0.15)">  Hire {talent.name.split(' ')[0]}</Button>
                                        
                                </Box>
                                </GridItem>
                            ))}
                            </Grid>
                        </Box>

                
                        </Flex>
                 </Box>
            </Box>    

        <Footer />
    </Box>
  );
};

export default Talents;