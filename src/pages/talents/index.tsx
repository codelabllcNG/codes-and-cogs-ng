
import { TalentInterface, TalentStoreInterface } from '@/component/Interface/talents';
import { useState, useEffect } from 'react';
import { IoMdArrowBack, IoMdArrowForward } from 'react-icons/io';
import { Flex, Box, Text, Heading, Button, Image, Grid, GridItem,FormControl, FormLabel, Select, Input } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useTalentsStore } from '@/store/talentStore';
import LoadingSpinner from '@/component/loadingSpinner';
import { useGetTalentHook } from '@/component/Hooks/talentsHook';
import { useGetCategoriesHook } from '@/component/Hooks/categoriesHook';
import { useGetLocationHook } from '@/component/Hooks/locationHook';
import { JobTypeInterface } from '@/component/Interface/Jobs';
import { LocationInterface } from '@/component/Interface/talents';
import HeaderAndFooter from '@/component/layout/HeaderAndFooter';


const Talents = () => {
  
  const [search, setSearch] = useState('');
  const [searchValue,setSearchValue] = useState ('')
  const {data:talentData,isLoading:talentIsLoading,refetchWithParams} = useGetTalentHook({limit:'8'})
  const {data:locationData} = useGetLocationHook({for:'listing'})
  const {data:categoriesData} = useGetCategoriesHook({for:'talent'})
  const [talents,setTalents] = useState <TalentInterface[]>([])
  const [categories,setCategories] = useState <JobTypeInterface[]> ([])
  const [locations,setLocations] = useState <LocationInterface[]> ([])
  const [location,setLocation] = useState<string>('')
  const [totalTalents,setTotalTalents] = useState<number>(0)
  const [activeIndex,setActiveIndex] = useState(0)
  const [cat,setCat] = useState('')
  
  const router = useRouter();
  const editSelectedTalent = useTalentsStore((state: TalentStoreInterface) => state.editSelectedTalent);

  // Pagination control functions
  const goNext = () => {

    if(activeIndex >= (totalTalents/8)-1) return
    setActiveIndex(activeIndex + 1)
  };
  
  const goBack = () => {
    if(activeIndex <= 0) return
    setActiveIndex(activeIndex -1)
  };

  const viewProfile = (data: TalentInterface) => {
    editSelectedTalent(data);
    router.push(`/talents/bio`);
  };

  useEffect(()=>{
    setTalents(talentData?.talents)
    setTotalTalents(talentData?.total)
  },[talentData])

  useEffect(()=>{
    console.log({categoriesData})
    setCategories(categoriesData?.categories)
  },[categoriesData])

  useEffect(()=>{
    console.log({locationData})
    setLocations(locationData?.categories)
  },[locationData])

  useEffect(()=>{
    const offset = activeIndex * 8
    const params = {search,cat,offset,location}
    refetchWithParams(params)
    
  },[search,cat,activeIndex,location])

  useEffect(()=>{
    if(search === '' ) return 
    if(searchValue==='') setSearch('')
  },[searchValue])

  useEffect(()=>{
    const {search} = router.query
    
    if(typeof search === 'string'){
      setSearch(search)
      setSearchValue(search)
    }
    
  },[router.query])

  return (

    <HeaderAndFooter>
      <Box
        maxWidth="2000px"
        mx="auto"
        bg="#0D0F3A"
        color={'white'}
        padding={{ lg: "3rem 5rem", md: "1.5rem 2rem", sm: "1rem", base: "1rem" }}
      >
        <Box>
          <Heading textAlign={'center'} m={'1rem'} fontWeight={'500'}>
            Our Talent
          </Heading>
        </Box>
      </Box>

      <Box
        maxWidth="2000px"
        mx="auto"
        padding={{ lg: "1.5rem 5rem", md: "1.5rem 2rem", sm: "1rem", base: "1rem" }}
      >
        <Box w={'100%'}>
          {/* Header - Now scrollable on mobile */}
          <Flex flexDirection={['column', 'column', 'row']} gap={4} alignItems="flex-end">
            <Flex flex={{ lg: '0 0 50%', md: '1', sm: '1', base: '1' }} w="100%">
              <Input
                placeholder="Enter Key Word..."
                borderRadius={0}
                border={'1px solid #656060'}
                h={'60px'}
                value={searchValue}
                borderTopLeftRadius={'6px'}
                borderBottomLeftRadius={'6px'}
                flex="1"
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <Button
                onClick={()=>setSearch(searchValue)}
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

            <FormControl flex={{ lg: '0 0 24%', md: '1', sm: '1', base: '1' }} w="100%">
              <Flex direction="column" w="100%">
                <Text fontWeight={'500'} mb={1}>
                  <FormLabel>Filter by Category</FormLabel>
                </Text>
                <Select
                  placeholder="Select"
                  variant="filled"
                  border={'1px solid #656060'}
                  h={'60px'}
                  w="100%"
                  bg={'transparent'}
                  onChange={(e) => {
                    setCat(e.target.value)
                     setActiveIndex(0)
                  }}
                >
                  {categories?.map((category, index:number) => (
                    <option key={index} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </Select>
              </Flex>
            </FormControl>

            <FormControl flex={{ lg: '0 0 24%', md: '1', sm: '1', base: '1' }} w="100%">
              <Flex direction="column" w="100%">
                <Text fontWeight={'500'} mb={1}>
                  <FormLabel>Filter by Location</FormLabel>
                </Text>
                <Select
                  placeholder="Select"
                  variant="filled"
                  border={'1px solid #656060'}
                  h={'60px'}
                  w="100%"
                  bg={'transparent'}
                  onChange={(e) => {
                    setLocation(e.target.value)
                     setActiveIndex(0)
                  }}
                >
                  {locations?.map((location, index:number) => (
                    <option key={index} value={location.id}>
                      {location.name}
                    </option>
                  ))}
                </Select>
              </Flex>
            </FormControl>
          </Flex>

          {/* Body */}
          <Flex alignItems={'center'} mt={'2rem'} flexDirection={['column', 'column', 'row']} pos={'relative'}>
            <LoadingSpinner showLoadingSpinner={false} />
            <Box  display={talents?.length > 0 || talentIsLoading? 'block' : 'none' } w={['100%', '100%', '100%']} p={[2, 4]} minH={'100vh'} pos={'relative'} >
              <LoadingSpinner showLoadingSpinner={talentIsLoading} />
              <Grid templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(4, 1fr)']} gap={[4, 6]}>
                {talents?.map((talent, index) => (
                  <GridItem key={index} w="100%">
                    <Box w={'100%'} boxShadow={'lg'} p={2}>
                      <Image w={'100%'} src={talent.image} alt={talent.name} />
                      <Heading m={'0.2rem 0'} fontSize={['md', '20px']} color={'#333'}>
                        {talent.name}
                      </Heading>
                      <Text m={'0.2rem 0'} fontSize={['sm', '16px']} color={'#2E3192'}>
                        {talent.role}
                      </Text>
                      <Text fontSize={['xs', '14px']} color={'#333'}>
                        Expertise
                      </Text>
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

                      <Button
                        onClick={() => viewProfile(talent)}
                        width={'fit-content'}
                        m={'3rem 0'}
                        borderRadius="4px"
                        padding={'12px 24px'}
                        textColor={'white'}
                        bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)"
                        boxShadow="2px 5px 5px 0px rgba(51, 51, 51, 0.15)"
                      >
                        View Profile
                      </Button>
                    </Box>
                  </GridItem>
                ))}
              </Grid>
              <Flex alignItems={'center'} justifyContent={'space-between'} mt={'3rem'}>
                <Flex
                  cursor={'pointer'}
                  onClick={goBack}
                  alignItems={'center'}
                  color={'#2E3192'}
                >
                  <IoMdArrowBack />
                  <Text>Back</Text>
                </Flex>
                <Flex gap={'1rem'}>
                  {Array.from({length:(totalTalents/8)}).map((_, index) => (
                    <Box
                      key={index}
                      h={'10px'}
                      w={'10px'}
                      onClick={() => setActiveIndex(index)}
                      borderRadius={'50%'}
                      bg={index === activeIndex ? '#2E3192' : '#B6CAF2'}
                    ></Box>
                  ))}
                </Flex>
                <Flex
                  cursor={'pointer'}
                  onClick={goNext}
                  alignItems={'center'}
                  color={'#2E3192'}
                >
                  <Text>Next</Text>
                  <IoMdArrowForward />
                </Flex>
              </Flex>
            </Box>
            <Flex width={'100%'} display={talents?.length === 0 && !talentIsLoading? 'flex' : 'none' } flexDir={'column'} alignItems={'center'} mt={'2rem'}>
              <Image src="/emptyState.svg" alt="No results" />
              <Heading fontWeight={'500'} m={'2rem auto'} fontSize={'28px'}>
                No Result
              </Heading>
              <Text>
                There are currently no talents that match your filters.
              </Text>
            </Flex>

          </Flex>
        </Box>
      </Box>
</HeaderAndFooter>
  );
};

export default Talents;
