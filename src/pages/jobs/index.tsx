import {
  Box,
  Flex,
  Heading,
  Wrap,
  FormControl,
  FormLabel,
  Text,
  Button,
  Image,
  SimpleGrid,
  Input,
  Select
} from "@chakra-ui/react";
import AdsComponent from "@/component/adsComponent";
import { IoLocationOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { useRouter } from "next/router";
import { timeAgo } from '@/component/utils';
import { JobInterface,JobTypeInterface } from '@/component/Interface/Jobs';
import HeaderAndFooter from '@/component/layout/HeaderAndFooter';
import { useJobStore } from '@/store/jobStore';
import { JobStoreInterface } from '@/component/Interface/Jobs';
import { useGetJobstHook } from '@/component/Hooks/jobHooks';
import { useGetCategoriesHook } from '@/component/Hooks/categoriesHook';
import { useGetLocationHook } from "@/component/Hooks/locationHook";
import LoadingSpinner from '@/component/loadingSpinner';
import { LocationInterface } from "@/component/Interface/talents";




export default function JobListing() {
  const router = useRouter();

  // Local state for filter inputs.
  const [search, setSearch] = useState('');
  const [searchValue,setSearchValue] =useState('')
  const [location,setLocation] = useState<string>()
  const [selectedListingGroupIndex, setSelectedListingGroupIndex] = useState(0);
  const editSelectedTalent = useJobStore((state: JobStoreInterface)=>state.editSelectedJob)
  const [activeIndex,setActiveIndex] = useState<number>(0)
  const [totalJobs,setTotalJobs] = useState<number>(0)
  const [jobs,setJobs] = useState<JobInterface[]>([])
  const [categories,setCategories] = useState<JobTypeInterface[]>([])
  const [type,setType] =useState<string>()
  const [locations,setLocations] = useState<LocationInterface[]>([])
  const {data:jobsData,isLoading:jobsIsLoading,refetchWithParams} = useGetJobstHook()
  const {data:categoriesData} = useGetCategoriesHook({for:'listing'})
  const {data:locationData,} = useGetLocationHook({for:'listing'})
  

  const viewJob = (job:JobInterface)=> {
     editSelectedTalent(job)
     router.push(`/jobs/${job.id}`)
  }
  
    const goNext = () => {
      if(activeIndex >= (totalJobs/8)-1) return
      setActiveIndex(activeIndex + 1)
    };
    
    const goBack = () => {
      if(activeIndex <= 0) return
      setActiveIndex(activeIndex -1)
    };

    const reset = ()=>{
      setSearchValue('');setType('');setLocation('');setActiveIndex(0)
    }
  
   
    useEffect(()=>{
      setJobs(jobsData?.listings)
      setTotalJobs(jobsData?.total)
    },[jobsData])
    
    useEffect(()=>{
       setLocations(locationData?.categories)
    },[locationData])

    useEffect(()=>{
      setCategories(categoriesData?.categories)
    },[categoriesData])
  
    useEffect(()=>{
      const offset = activeIndex * 4
      const params = {search,type,location,offset}
      refetchWithParams(params)
    },[search,type,location,activeIndex])
  
    useEffect(()=>{
      if(search === '' ) return 
      if(searchValue==='') setSearch('')
    },[searchValue])




  return (
    
   <HeaderAndFooter>
      {/* Header Section */}
      <Box
        maxWidth="2000px"
        textColor="white"
        padding={{ lg: "1.5rem 5rem", md: "1.5rem 2rem", sm: "1rem", base: "1rem" }}
        bg={'#0D0F3A'}
        mx={'auto'}
      >
        <Box>
           <Heading textAlign={'center'} m={'3rem'} fontWeight={'500'}>
             Job Opportunities
          </Heading>
        </Box>
      </Box>

      {/* Main Content Layout */}
      <Flex
        maxWidth={'2000px'}
        padding={{ lg: "4.5rem 5rem", md: "1.5rem 2rem", sm: "1rem", base: "1rem" }}
        flexDir={{ lg: 'row', md: 'row', sm: 'column', base: 'column' }}
        mx={'auto'}
      >
        {/* Filter and Listing Section */}
        <Box w={{ lg: '80%', md: '80%', sm: '100%', base: '100%' }}>
          {/* Filter Section */}
          <Box>
            <Flex mb={'3rem'}>
              <Input
                placeholder="Enter Key Word..."
                borderRadius={0}
                border={'1px solid #656060'}
                h={'60px'}
                borderTopLeftRadius={'6px'}
                borderBottomLeftRadius={'6px'}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <Button
                 _hover={{ bg: "#2E3192" }}
                width={'fit-content'}
                h={'60px'}
                borderRadius="0"
                borderTopRightRadius={'6px'}
                borderBottomRightRadius={'6px'}
                padding={'12px 24px'}
                textColor={'white'}
                bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)"
                boxShadow="2px 5px 5px 0px rgba(51, 51, 51, 0.15)"
                onClick={() => setSearch(searchValue)}
               
              >
                Search
              </Button>
            </Flex>
            <Flex
              gap={'1rem'}
              alignItems={'center'}
              flexDir={{ lg: 'row', md: 'row', sm: 'column', base: 'column' }}
            >
              {/* Job Type Select */}
              <FormControl>
                <Text fontWeight={'500'}>
                  <FormLabel>Job Type</FormLabel>
                </Text>
                   <Select
                                  placeholder="Select"
                                  variant="filled"
                                  border={'1px solid #656060'}
                                  h={'60px'}
                                  w="100%"
                                  bg={'transparent'}
                                  value={type}
                                  onChange={(e) => {
                                    setType(e.target.value)
                                     setActiveIndex(0)
                                  }}
                                >
                                  {categories?.map((category, index:number) => (
                                    <option key={index} value={category.id}>
                                      {category.name}
                                    </option>
                                  ))}
                   </Select>
              </FormControl>
              <FormControl>
                <Text fontWeight={'500'}>
                  <FormLabel>Location</FormLabel>
                  </Text> 
                     <Select
                                    placeholder="Select"
                                    variant="filled"
                                    border={'1px solid #656060'}
                                    h={'60px'}
                                    w="100%"
                                    bg={'transparent'}
                                    value={location}
                                    onChange={(e) => {
                                      setLocation(e.target.value)
                                    }}
                                  >
                                    {locations?.map((location, index:number) => (
                                      <option key={index} value={location.id}>
                                        {location.name}
                                      </option>
                                    ))}
                     </Select>
          

              </FormControl>
  
              <Button
                 _hover={{ bg: "#2E3192" }}
                width={{ lg: 'fit-content', base: '100%' }}
                mt={{ lg: '2.5rem', base: '0.4rem' }}
                borderRadius="4px"
                h={'60px'}
                padding={'12px 24px'}
                textColor={'white'}
                bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)"
                boxShadow="2px 5px 5px 0px rgba(51, 51, 51, 0.15)"
                onClick={reset}
              >
                Reset
              </Button>
            </Flex>
          </Box>

          {/* Condition for Empty State */}
          {jobs?.length === 0 ? (
            <Flex flexDir={'column'} alignItems={'center'} mt={'2rem'}>
              <Image src="emptyState.svg" alt="No results" />
              <Heading fontWeight={'500'} m={'2rem auto'} fontSize={'28px'}>
                No Result
              </Heading>
              <Text>
                There are currently no job listings that match your filters.
              </Text>
            </Flex>
          ) : (
            <>
              {/* Job Listing Section */}
              <Box minH={'100vh'} pos={'relative'}>
                <LoadingSpinner showLoadingSpinner={jobsIsLoading} />
                <Text m={'2rem 0'}>Showing {jobs?.length} results</Text>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacingX="40px" spacingY="20px">
                  {jobs?.map((job, index) => (
                    <Box  key={index} border={'1px solid rgba(0, 0, 0, 0.25)'} cursor={'pointer'} onClick={()=>viewJob(job)}  borderRadius={'12px'} >
                      <Box p={'3rem 1rem'} borderBottom={'1px dotted rgba(136, 136, 136, 0.80)'}>
                        <Flex gap={'3rem'} mt={'1rem'} mb={'1rem'}>
                          <Box>
                            <Image width={'70px'} height={'70px'} src={job.icon} alt={job.title} />
                          </Box>
                          <Box>
                            <Heading fontWeight={'600'} fontSize={'27px'}>
                              {job.title}
                            </Heading>
                            <Flex alignItems={'center'}>
                              <IoLocationOutline fontSize={'32px'} />
                              {job.location?.map((location,index)=>(
                                        <Text key={index} fontWeight={'300'} fontSize={'15px'}>
                                             {location.name}
                                        </Text>
                              ))}
                            </Flex>
                          </Box>
                        </Flex>
                        <Wrap spacing={2} gap={'2rem'}>
                          {job.job_type?.map((type: JobTypeInterface, index: number) => (
                            <Flex
                              key={index}
                              p={2}
                              borderRadius={'12px'}
                              bg={'rgba(136, 136, 136, 0.10)'}
                              fontSize={['xs', 'sm']}
                            >
                              {type.name}
                            </Flex>
                          ))}
                        </Wrap>
                      </Box>
                      <Flex justifyContent={'space-between'} p={'1rem'}>
                        <Heading fontWeight={'550'} fontSize={'15px'}>
                          Posted {timeAgo(job.date)}
                        </Heading>
                        <Heading fontWeight={'550'} fontSize={'15px'}>
                          {job.applicants} Applicants
                        </Heading>
                      </Flex>
                    </Box>
                  ))}
                </SimpleGrid>
                <Flex alignItems={'center'} justifyContent={'space-between'} mt={'3rem'}>
                  <Flex cursor={'pointer'} onClick={goBack} alignItems={'center'} color={'#2E3192'}>
                    <IoMdArrowBack />
                    <Text>Back</Text>
                  </Flex>
                  <Flex gap={'1rem'}>
                    {Array.from({length:totalJobs/4}).map((group, index) => (
                      <Box
                        key={index}
                        h={'10px'}
                        w={'10px'}
                        onClick={() => setSelectedListingGroupIndex(index)}
                        borderRadius={'50%'}
                        bg={index === selectedListingGroupIndex ? '#2E3192' : '#B6CAF2'}
                      />
                    ))}
                  </Flex>
                  <Flex cursor={'pointer'} onClick={goNext} alignItems={'center'} color={'#2E3192'}>
                    <Text>Next</Text>
                    <IoMdArrowForward />
                  </Flex>
                </Flex>
              </Box>
            </>
          )}
        </Box>

        {/* Ads Section */}
        <Box
          display={'flex'}
          gap={'2rem'}
          flexDir={'column'}
          alignItems={'center'}
          w={{ lg: '20%', md: '20%', sm: '100%', base: '100%' }}
        >
          <AdsComponent imageUrl="ads2.png" link="#" />
          <AdsComponent imageUrl="ads5.png" link="#" />
        </Box>
      </Flex>

    </HeaderAndFooter>
  );
}
