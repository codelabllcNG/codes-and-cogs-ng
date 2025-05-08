

import { useState,useEffect } from 'react';
import { Flex, Box, Text, Heading, Button, Image,Menu,MenuButton,MenuList,MenuItem } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';
import React from 'react';
import { TalentInterface } from './Interface/talents';
import { useTalentsStore } from '@/store/talentStore';
import { useGetTalentHook } from './Hooks/talentsHook';
import { useGetCategoriesHook } from './Hooks/categoriesHook';
import LoadingSpinner from './loadingSpinner';
import AdsComponent from './adsComponent';
import { JobTypeInterface } from './Interface/Jobs';
import { TalentStoreInterface } from './Interface/talents';
import { upperCaseFirstLetter } from './utils';

const TalentExplorer  = () => {

  const [activeTab, setActiveTab] = useState('');
  const [talents,setTalents] =useState<TalentInterface[]>([])
  const [jobCategories,setJobcategories] = useState<JobTypeInterface[]>([])
  const editSelectedTalent = useTalentsStore((state: TalentStoreInterface) => state.editSelectedTalent);
  const {data:jobCategoriesData} = useGetCategoriesHook({for:'talent'})
  const {data:talentsData,isLoading:isTalentLoading,refetchWithParams} = useGetTalentHook({limit:'3'})
  

  const router = useRouter()

  
  const viewProfile = (data: TalentInterface) => {
      editSelectedTalent(data);
      router.push(`/talents/bio`);
  };
 
  useEffect(()=>{
    setJobcategories(jobCategoriesData?.categories)
    setActiveTab(jobCategoriesData?.categories[0]?.name)
    console.log({jobCategoriesData})
  },[jobCategoriesData])

  useEffect(()=>{
    setTalents(talentsData?.talents)
  },[talentsData])


  useEffect(()=>{

    const cat = jobCategories?.find((category)=>category.name === activeTab)
    refetchWithParams({cat:String(cat?.id),limit:'3'})
  },[activeTab])

  return (
<Box w={'100%'}>
    {/* Header - Now scrollable on mobile */}
    <Heading mt={2} mb={10} fontSize={{lg:'30px',base:'20px'}} color="#2E3192" fontWeight="600" textAlign="center">
          EXPLORE TOP TALENTS
      </Heading>

    <Flex 
      w={'100%'} 
      overflowX="auto"
      borderTop={'1px solid #CCC'} 
      borderBottom={'1px solid #CCC'}
      px={[2, 4, 0]}
    >
       
      {/* desktop view */}
      <Flex display={{lg:'flex',base:'none'}} minW="max-content" justifyContent={'space-between'} w="100%">
        {jobCategories?.map((category, index:number) => (
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
            <Image src={activeTab === category.name ? category.active_icon : category.none_active_icon}/>
            <Heading fontSize={['sm', '19px']} whiteSpace="nowrap">
              {category.name}
            </Heading>
          </Flex>
        ))}
      </Flex>
       
      {/* mobile view */}
      <Box w={'100%'} display={{lg:'none',base:'block'}}>
      <Menu >
      <MenuButton
      
        as={Button}
        rightIcon={<ChevronDownIcon />}
        w="100%"
        h="60px"
        bg="transparent"
        border="1px solid #656060"
        textAlign="left"
      >
        {/* show currently selected */}
        <Flex align="center">
          {/** render the icon of current */}
          {jobCategories?.find((c) => c.name === activeTab) && (
            <Image alt='Media'
              src={
                jobCategories?.find((c) => c.name === activeTab)!
                  .active_icon
              }
              boxSize="1.5rem"
              mr={2}
            />
          )}
          <Text>
            {activeTab || "Select a category"}
          </Text>
        </Flex>
      </MenuButton>
      <MenuList maxH="300px" overflowY="auto">
        {jobCategories?.map((category) => (
          <MenuItem
            key={category.name}
            onClick={() => setActiveTab(category.name)}
          >
            <Flex align="center">
              <Image alt='Media'
                src={category.active_icon}
                boxSize="1.5rem"
                mr={2}
              />
              <Text>{category.name}</Text>
            </Flex>
          </MenuItem>
        ))}
      </MenuList>
      </Menu>
      </Box>

    </Flex>

    {/* Body - Stack on mobile */}
    <Flex mt={'2rem'} flexDirection={['column', 'column', 'row']}>
      <Box w={['100%', '100%', '80%']} p={[2, 4]} pos={'relative'}>
        <LoadingSpinner showLoadingSpinner={isTalentLoading} />
        <Flex
          overflowX={'auto'} 
          justifyContent={'space-between'}
          p={2}
          css={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
          >
          
          {talents?.map((talent, index:number) => (
            <Box  key={index}  minW={{lg:'23%',base:'80vw'}} boxShadow="lg" borderRadius="md" >
              <Box w={'100%'}  boxShadow={'lg'} p={2}>
                <Image alt='Media' w={'100%'} src={talent?.image} />
                <Heading m={'0.2rem 0'} fontSize={['md', '20px']} color={'#333'}>
                  {upperCaseFirstLetter(talent.name)}
                </Heading>
                <Text m={'0.2rem 0'} fontSize={['sm', '16px']} color={'#2E3192'}>
                  {upperCaseFirstLetter(talent.role)}
                </Text>
                <Text fontSize={['xs', '14px']} color={'#333'}>Expertise</Text>
                <Flex mt={3} wrap="wrap" gap={2}>
                  {talent.expertises?.map((skill, skillIndex:number) => (
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
  
                <Button  _hover={{ bg: "#2E3192" }} onClick={()=>viewProfile(talent)} width={'fit-content'} m={'3rem 0'} borderRadius="4px" padding={'12px 24px'} textColor={'white'} bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)" boxShadow="2px 5px 5px 0px rgba(51, 51, 51, 0.15)">  View Profile </Button>
                      
              </Box>
            </Box>
          ))}
        </Flex>
        <Box display={'flex'} mt={'2rem'}>
          <Button  _hover={{ bg: "#2E3192" }} onClick={()=>router.push('/talents')} width={'fit-content'} mx={'auto'} borderRadius="4px" padding={'12px 24px'} textColor={'white'} bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)" boxShadow="2px 5px 5px 0px rgba(51, 51, 51, 0.15)"> Discover More Talents </Button>
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