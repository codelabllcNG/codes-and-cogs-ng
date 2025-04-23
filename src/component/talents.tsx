

import { useState,useEffect } from 'react';
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
import { useRouter } from 'next/router';
import React from 'react';
import { JobTypeInterface } from './Interface/Jobs';
import { TalentInterface } from './Interface/talents';
import { useTalentsStore } from '@/store/talentStore';
import { useGetTalentHook } from './Hooks/talentsHook';
import { useGetCategoriesHook } from './Hooks/categoriesHook';
import LoadingSpinner from './loadingSpinner';
import AdsComponent from './adsComponent';


const TalentExplorer  = () => {

  const [activeTab, setActiveTab] = useState('');
  const [talents,setTalents] =useState<any[]>([])
  const [jobCategories,setJobcategories] = useState<any[]>([])
  const editSelectedTalent = useTalentsStore((state: any) => state.editSelectedTalent);
  const {data:jobCategoriesData,isLoading:jobCategoriesIsLoading} = useGetCategoriesHook()
  const {data:talentsData,isLoading:isTalentLoading,refetchWithParams} = useGetTalentHook({limit:'3'})
  

  const router = useRouter()

  
  const viewProfile = (data: TalentInterface) => {
      editSelectedTalent(data);
      router.push(`/bio`);
  };
 
  useEffect(()=>{
    setJobcategories(jobCategoriesData?.categories)
    setActiveTab(jobCategoriesData?.categories[0]?.name)
  },[jobCategoriesData])

  useEffect(()=>{
    console.log({talentsData})
    setTalents(talentsData?.talents)
  },[talentsData])


  useEffect(()=>{
    const cat = jobCategories?.find((category)=>category.name === activeTab)
    refetchWithParams({cat:cat?.id,limit:'3'})
  },[activeTab])

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
        {jobCategories?.map((category:any, index:any) => (
          <Flex 
            key={index}
            p={['1rem', '2rem 0']} 
            borderBottom={activeTab === category.name ? '2px solid #2E3192' : 'none'}
            cursor="pointer"
            onClick={() => setActiveTab(category.name)}
            color={activeTab === category.name ? '#2E3192' : 'inherit'}
            flexShrink={0}
            mx={[2, 4]}
          >
            {/* <Icon as={category.icon} mr={2} boxSize={['16px', '20px']} /> */}
            <Heading fontSize={['sm', '19px']} whiteSpace="nowrap">
              {category.name}
            </Heading>
          </Flex>
        ))}
      </Flex>
    </Flex>

    {/* Body - Stack on mobile */}
    <Flex mt={'2rem'} flexDirection={['column', 'column', 'row']}>
      <Box w={['100%', '100%', '80%']} p={[2, 4]} pos={'relative'}>
        <LoadingSpinner showLoadingSpinner={isTalentLoading} />
        <Grid 
          templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} 
          gap={[4, 6]}
        >
          {talents?.map((talent:any, index:any) => (
            <GridItem key={index} w="100%">
              <Box w={'100%'} boxShadow={'lg'} p={2}>
                <Image w={'100%'} src={talent?.image} />
                <Heading m={'0.2rem 0'} fontSize={['md', '20px']} color={'#333'}>
                  {talent.name}
                </Heading>
                <Text m={'0.2rem 0'} fontSize={['sm', '16px']} color={'#2E3192'}>
                  {talent.role}
                </Text>
                <Text fontSize={['xs', '14px']} color={'#333'}>Expertise</Text>
                <Flex mt={3} wrap="wrap" gap={2}>
                  {talent.expertises?.map((skill:any, skillIndex:any) => (
                    <Flex 
                      key={skillIndex} 
                      p={2} 
                      borderRadius={'12px'} 
                      border={'0.8px solid #A3A2A2'}
                      fontSize={['xs', 'sm']}
                    >
                      {skill.name}
                    </Flex>
                  ))}
                </Flex>
  
                <Button  onClick={()=>viewProfile(talent)} width={'fit-content'} m={'3rem 0'} borderRadius="4px" padding={'12px 24px'} textColor={'white'} bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)" boxShadow="2px 5px 5px 0px rgba(51, 51, 51, 0.15)">  View Profile </Button>
                      
              </Box>
            </GridItem>
          ))}
        </Grid>
        <Box display={'flex'} mt={'2rem'}>
          <Button onClick={()=>router.push('/talents')} width={'fit-content'} mx={'auto'} borderRadius="4px" padding={'12px 24px'} textColor={'white'} bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)" boxShadow="2px 5px 5px 0px rgba(51, 51, 51, 0.15)"> Discover More Talents </Button>
        </Box>
      </Box>

      {/* Sidebar - Full width on mobile */}
      <Box 
        w={['100%', '100%', '20%']}
        display={'flex'} 
        justifyContent={'center'} 
      
      >
        <AdsComponent imageUrl='/image 3.svg' mobileUrl='/image 3.svg' link='#'/>
      </Box>
    </Flex>
   </Box>
  );
};

export default TalentExplorer;