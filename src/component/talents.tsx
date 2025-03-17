// import { useState } from 'react';
// import { 
//   Tabs, TabList, Tab, TabPanels, TabPanel, 
//   Flex, Box, Text, Heading, Button, Icon ,Image
// } from '@chakra-ui/react';
// import { 
//   FaOilCan, 
//   FaHardHat, 
//   FaWater, 
//   FaLaptopCode,
//   FaTools,
//   FaCertificate,
//   FaFish
// } from 'react-icons/fa';
// import { FaStethoscope } from 'react-icons/fa';

// const TalentDashboard = () => {
//   const [activeTab, setActiveTab] = useState(0);
  
//   const categories = [
//     { 
//       title: "Well-Service Operators",
//       value: "489.33",
//       icon: FaOilCan,
//       subcategories: ["Drilling Operators", "Offshore Operators"]
//     },
//     { 
//       title: "Digital Solution Providers",
//       value: "28.67",
//       icon: FaLaptopCode
//     },
//     { 
//       title: "Drilling Operators",
//       value: "28.67",
//       icon: FaLaptopCode
//     },
//     { 
//       title: "Offshore Operators",
//       value: "28.67",
//       icon: FaLaptopCode
//     }
//   ];

//   const talents = [
//     {
//       name: "Gabriel J.",
//       role: "Slickline Operator",
//       expertise: ["Pressure Control Systems", "IWCF 1-4", "Fishing Operations", "Diagnostics", "IADC"],
//       category: 0
//     },
//     {
//       name: "Otunba B.",
//       role: "Wireline Operator",
//       expertise: ["Mechanical Intervention", "IWCF 1-4", "Fishing Operations", "Diagnostics", "IADC"],
//       category: 0
//     },
//     {
//       name: "Usang O.",
//       role: "Coil Tubing Operator",
//       expertise: ["Mechanical Intervention", "IWCF 1-4", "Fishing Operations", "Diagnostics", "IADC"],
//       category: 0
//     }
//   ];

//   return (
//    <Box w={'100%'}>
//     {/* header */}
//       <Flex w={'100%'}  justifyContent={'space-between'} borderTop={'1px solid #CCC'} borderBottom={'1px solid #CCC'}>
//         {categories.map((category)=>{
//           return(
//             <Flex p={'2rem 0'} borderBottom={'1px solid #2E3192'}>
//                <Icon as={category.icon} mr={2} />
//                <Heading fontSize={'19px'}>{category.title}</Heading>
//             </Flex>
//           )
//         })}
       
//       </Flex>

//       {/* body */}

//       <Flex mt={'2rem'}>
//         <Box w={'80%'}>
//           <Box w={'30%'} boxShadow={'lg'} p={2}>
//             <Image w={'container.lg'} src='Talent4.svg' />
//             <Heading m={'0.2rem 0'} fontSize={'20px'} color={'#333'}>Gabirel</Heading>
//             <Text m={'0.2rem 0'} fontSize={'16px'} color={'#2E3192'}>Slikline Operator</Text>
//             <Text fontSize={'14px'} color={'#333'}>Expertise</Text>
//             <Flex mt={3}  wrap="wrap"  gap={2}  justify={{ base: 'flex-start', md: 'flex-start' }}>
//               <Flex p={2} borderRadius={'12px'} border={'0.8px solid #A3A2A2'}>Pressure Control Systems</Flex>
//               <Flex p={2} borderRadius={'12px'} border={'0.8px solid #A3A2A2'}>IWCF 1-4</Flex>
//               <Flex p={2} borderRadius={'12px'} border={'0.8px solid #A3A2A2'}>Fishing Operations</Flex>
//               <Flex p={2} borderRadius={'12px'} border={'0.8px solid #A3A2A2'}>Diagnostics</Flex>
//               <Flex p={2} borderRadius={'12px'} border={'0.8px solid #A3A2A2'}> IADC</Flex>
//             </Flex>
//             <Button width={'fit-content'} m={'3rem 0'} borderRadius="4px" padding={'12px 24px'} textColor={'white'} bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)" boxShadow="2px 5px 5px 0px rgba(51, 51, 51, 0.15)"> Hire Gabirel </Button>
//           </Box>
//         </Box>
//         <Box p={'0 2rem'} display={'flex'} justifyContent={'center'} alignItems={'center'} w={'20%'}  backgroundImage="url('BlueCCbg.svg')" backgroundSize={'cover'} bgRepeat={'no-repeat'} backgroundPosition={{ base: "center", md: "top" }}>
//           <Flex flexDir={'column'} h={''} gap={'1rem'} >
//                 <Image mx={'auto'} w={'100px'} src='LOGO-WHITE.svg' />
//                 <Text fontSize={'16px'} color={'white'} textAlign={'center'}>Explore over 100+ oil and gas talents in Codes and Cogs platform</Text>
//                 <Button mx={'auto'} width={'fit-content'} borderRadius="4px" padding={'12px 24px'} textColor={'white'} bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)" boxShadow="2px 5px 5px 0px rgba(51, 51, 51, 0.15)"> Discover More </Button>
//           </Flex>
//         </Box>
//       </Flex>


//    </Box>
//   );
// };

// export default TalentDashboard;

import { useState } from 'react';
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

const TalentDashboard = () => {
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
      name: "Usang O.",
      role: "Coil Tubing Operator",
      expertise: ["Mechanical Intervention", "IWCF 1-4", "Fishing Operations", "Diagnostics", "IADC"],
      category: 0
    }
  ];

  const filteredTalents = talents.filter(talent => talent.category === activeTab);

  return (
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
      <Box w={['100%', '100%', '80%']} p={[2, 4]}>
        <Grid 
          templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} 
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

      {/* Sidebar - Full width on mobile */}
      <Box 
        w={['100%', '100%', '20%']} 
        p={[4, '0 2rem']} 
        mt={[4, 4, 0]}
        display={'flex'} 
        justifyContent={'center'} 
        alignItems={'center'} 
        backgroundImage="url('BlueCCbg.svg')"
      >
        <Flex flexDir={'column'} gap={'1rem'} textAlign="center">
          <Image mx={'auto'} w={['70px', '100px']} src='LOGO-WHITE.svg' />
          <Text fontSize={['sm', '16px']} color={'white'}>
            Explore over 100+ oil and gas talents in Codes and Cogs platform
          </Text>

          <Button width={'fit-content'} mx={'auto'} borderRadius="4px" padding={'12px 24px'} textColor={'white'} bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)" boxShadow="2px 5px 5px 0px rgba(51, 51, 51, 0.15)"> Discover More  </Button>
                      
        </Flex>
      </Box>
    </Flex>
   </Box>
  );
};

export default TalentDashboard;