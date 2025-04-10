import { useState,useEffect } from 'react';
import Navigator from "@/component/navigator";
import Footer from "@/component/footer";
import { IoMdArrowBack,IoMdArrowForward } from 'react-icons/io';

import { 
  Tabs, TabList, Tab, TabPanels, TabPanel, 
  Flex, Box, Text, Heading, Button, Icon, Image, Grid, GridItem ,FormControl,FormLabel,Select,Input
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
import { useGetTalentHook } from '@/component/Hooks/talentsHook';
import { TalentInterface } from '@/component/Interface/talents';
import { useGetCategoriesHook } from '@/component/Hooks/categoriesHook';
import { CategoryInterface } from '@/component/Interface/talents';
import { useRouter } from 'next/router';
import {useTalentsStore} from '@/store/talentStore';

const Talents = () => {
  const [activeTab, setActiveTab] = useState('Well-Service Operators');
  const [search,setSearch] = useState('')
  const [searchValue,setSearchValue] = useState('')
  const [category,setCategory] = useState('')
  const [categories,setCategories] = useState<CategoryInterface[]>()
  const [talents,setTalents] = useState <TalentInterface[]>()
  const [selectedTalentsGroup,setSelectedTalentsGroup] = useState<TalentInterface[]>([])
  const [selectedTalentsGroupIndex,setSelectedTalentsGroupIndex] = useState(0)
  const [talentsGroup, setTalentsGroup] = useState<TalentInterface[][]>([])
  const { data, isLoading } = useGetTalentHook({ search: searchValue , cat:category })
  const {data:categoriesData,isLoading:categoriesIsLoading} = useGetCategoriesHook()
  const router = useRouter()
  const editSelectedTalnet = useTalentsStore((state:any)=>state.editSelectedTalent)

 
 const goNext = function(){
     if(selectedTalentsGroupIndex + 1 === talentsGroup.length) return
     console.log(selectedTalentsGroupIndex +1,talentsGroup.length)
     setSelectedTalentsGroupIndex(selectedTalentsGroupIndex + 1)
 }
 const goBack = function(){
     if(selectedTalentsGroupIndex - 1 < 0 ) return
     setSelectedTalentsGroupIndex(selectedTalentsGroupIndex - 1)
 }

 const findTalent = function(){
   setSearchValue(search)
 }

const viewProfile = function(data:TalentInterface){
  editSelectedTalnet(data)
  router.push(`/bio`)

}


// getting talents
  useEffect(()=>{
     let group:any = []
     const groupHolder:any = []
     data?.talents.forEach((talent:TalentInterface,index:number)=>{
     group.push(talent)
     if(group.length === 6 || index === data?.talents.length - 1){
         groupHolder.push(group)
         group=[]
     }
    })
 
    setTalentsGroup(groupHolder)
    setSelectedTalentsGroup(groupHolder[selectedTalentsGroupIndex])
    setSelectedTalentsGroupIndex(0)
 
  },[data])


// getting categories
useEffect(()=>{
  setCategories(categoriesData?.categories)
},[categoriesData])


  useEffect(()=>{
    setSelectedTalentsGroup(talentsGroup[selectedTalentsGroupIndex])
  },[selectedTalentsGroupIndex,selectedTalentsGroup])


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
                          flexDirection={['column', 'column', 'row']} 
                          gap={4} 
                          alignItems="flex-end"
                        >
                          <Flex 
                            flex={{ lg: '0 0 70%', md: '1', sm: '1', base: '1' }}
                            w="100%"
                          >
                            <Input
                              placeholder="Enter Key Word..."
                              borderRadius={0}
                              border={'1px solid #656060'}
                              h={'60px'}
                              borderTopLeftRadius={'6px'}
                              borderBottomLeftRadius={'6px'}
                              flex="1"
                              onChange={(e)=>setSearch(e.target.value)}
                            />
                            <Button 
                              onClick={findTalent}
                              width={'fit-content'} 
                              h={'60px'} 
                              borderRadius="0"    
                              borderTopRightRadius={'6px'}  
                              borderBottomRightRadius={'6px'} 
                              padding={'12px 24px'} 
                              textColor={'white'} 
                              bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)" 
                              boxShadow="2px 5px 5px 0px rgba(51, 51, 51, 0.15)"
                            >
                              Search
                            </Button>
                          </Flex>

                          <FormControl 
                            flex={{ lg: '0 0 30%', md: '1', sm: '1', base: '1' }}
                            w="100%"
                          >
                            <Flex direction="column" w="100%">
                              <Text fontWeight={'500'} mb={1}><FormLabel>Filter by Category</FormLabel></Text>
                              <Select
                                placeholder="Select"
                                variant="filled"
                                border={'1px solid #656060'}
                                h={'60px'}
                                w="100%"
                                bg={'transparent'}
                                onChange={(e)=>{
                                  console.log({isLoading})
                                  setCategory(e.target.value)
                                }
                                }
                              >
                                {categories?.map((category,index)=>{
                                  return (
                                    <option key={index} value={category.id}>{category.name}</option>
                                  )
                                })}
                              </Select>
                            </Flex>
                          </FormControl>
                        </Flex>

                        {/* Body - Stack on mobile */}
                        <Flex mt={'2rem'} flexDirection={['column', 'column', 'row']}>
                        <Box w={['100%', '100%', '100%']} p={[2, 4]}>
                            <Grid 
                            templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(4, 1fr)']} 
                            gap={[4, 6]}
                            >
                            {selectedTalentsGroup?.map((talent, index) => (
                                <GridItem key={index} w="100%">
                                <Box w={'100%'} boxShadow={'lg'} p={2}>
                                    <Image w={'100%'} src={talent.image} />
                                    <Heading m={'0.2rem 0'} fontSize={['md', '20px']} color={'#333'}>
                                    {talent.name}
                                    </Heading>
                                    <Text m={'0.2rem 0'} fontSize={['sm', '16px']} color={'#2E3192'}>
                                    {talent.role}
                                    </Text>
                                    <Text fontSize={['xs', '14px']} color={'#333'}>Expertise</Text>
                                    <Flex mt={3} wrap="wrap" gap={2}>
                                    {talent.expertises?.map((skill, skillIndex) => (
                                        <Flex 
                                        key={skillIndex} 
                                        p={2} 
                                        borderRadius={'12px'} 
                                        border={'0.8px solid #A3A2A2'}
                                        fontSize={['xs', 'sm']}
                                        >
                                        {skill?.name}
                                        </Flex>
                                    ))}
                                    </Flex>
                    
                                    <Button onClick={()=>viewProfile(talent)} width={'fit-content'} m={'3rem 0'} borderRadius="4px" padding={'12px 24px'} textColor={'white'} bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)" boxShadow="2px 5px 5px 0px rgba(51, 51, 51, 0.15)"> View Profile</Button>
                                        
                                </Box>
                                </GridItem>
                            ))}
                            </Grid>
                              <Flex alignItems={'center'} justifyContent={'space-between'} mt={'3rem'}>
                          
                                                         <Flex cursor={'pointer'} onClick={goBack} alignItems={'center'} color={'#2E3192'}>
                                                           <IoMdArrowBack />
                                                            <Text>Back</Text>
                                                         </Flex>
                                                         
                                                          <Flex gap={'1rem'}>
                                                              {talentsGroup?.map((group,index)=>{
                                                                  return(
                                                                      <Box key={index}  h={'10px'} w={'10px'} onClick={()=>setSelectedTalentsGroupIndex(index)} borderRadius={'50%'} bg={index===selectedTalentsGroupIndex?'#2E3192':'#B6CAF2'}></Box>
                                                                  )
                                                              })}
                                                              
                                                          </Flex>
                          
                                                          <Flex cursor={'pointer'} onClick={goNext} alignItems={'center'} color={'#2E3192'}>
                                                            <Text>Next</Text>
                                                           <IoMdArrowForward />
                          
                                                         </Flex>
                                                      </Flex>    
                            </Box>

                
                        </Flex>
                 </Box>
            </Box>    

        <Footer />
    </Box>
  );
};

export default Talents;