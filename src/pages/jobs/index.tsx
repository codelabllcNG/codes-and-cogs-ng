import { GetServerSideProps } from 'next';
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
  Input
} from "@chakra-ui/react";
import Navigator from "@/component/navigator";
import AdsComponent from "@/component/adsComponent";
import { IoLocationOutline } from "react-icons/io5";
import Footer from "@/component/footer";
import { useState, useEffect } from "react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { useRouter } from "next/router";
import { timeAgo } from '@/component/utils';
import { JobInterface,JobTypeInterface } from '@/component/Interface/Jobs';
import HeaderAndFooter from '@/component/layout/HeaderAndFooter';

interface JobListingProps {
  jobs: JobInterface[];
  jobTypes: JobTypeInterface[];
}

export const getServerSideProps: GetServerSideProps<JobListingProps> = async (context) => {
  // Read query parameters from the URL (not used in filtering below).
  const { search = '', jobType = '', location = '' } = context.query;

  // Build query parameters for the jobs API.
  const queryParams = new URLSearchParams({
    search: search as string,
    jobType: jobType as string,
    location: location as string,
  });

  // Fetch jobs.
  const jobsRes = await fetch('https://api.codesandcogs.com/oilandgas/api/codesandcogs/v1/listing?limit=50');
  const jobsData = await jobsRes.json();
  const jobs = jobsData.listings;
  
  // Fetch job types.
  const jobTypesRes = await fetch('https://api.codesandcogs.com/oilandgas/api/codesandcogs/v1/category');
  const jobTypesData = await jobTypesRes.json();
  const jobTypes = jobTypesData.categories;

  console.log(jobTypes)

  return {
    props: {
      jobs,
      jobTypes,
    },
  };
};

export default function JobListing({ jobs, jobTypes }: JobListingProps) {
  const router = useRouter();

  // Local state for filter inputs.
  const [search, setSearch] = useState((router.query.search as string) || '');
  const [jobTypeInput, setJobTypeInput] = useState((router.query.jobType as string) || '');
  const [locationInput, setLocationInput] = useState((router.query.location as string) || '');
  const [locationData,setLocationData] = useState ('')
  // State for filtered jobs and grouping/pagination.
  const [filteredJobs, setFilteredJobs] = useState<JobInterface[]>(jobs);
  const [selectedListingGroup, setSelectedListingGroup] = useState<JobInterface[]>([]);
  const [selectedListingGroupIndex, setSelectedListingGroupIndex] = useState(0);
  const [listingGroup, setListingGroup] = useState<JobInterface[][]>([]);

  // Filter by search location
  function filterByLoaction (){
     if(locationData){
        console.log(true)
     }
     setLocationInput(locationData)
  }

  // useEffect to filter jobs when any filter input changes.

  useEffect(() => {
    const filtered = jobs.filter((job) => {

      const matchesSearch = search
        ? job.title.toLowerCase().includes(search.toLowerCase())
        : true;

     
      const matchesLocation = locationInput
        ? job.location.toLowerCase().includes(locationInput.toLowerCase())
        : true;

    
      const matchesJobType = jobTypeInput
        ? job.job_type.some((type) => String(type.id) === jobTypeInput)
        : true;

      return matchesSearch && matchesLocation && matchesJobType;
    });
    setFilteredJobs(filtered);
    // Reset pagination index when filtering.
    setSelectedListingGroupIndex(0);
  }, [search, jobTypeInput, locationInput, jobs]);

  // Regroup the (filtered) jobs into sets of 6.
  useEffect(() => {
    let group: JobInterface[] = [];
    const groupHolder: JobInterface[][] = [];
    filteredJobs.forEach((job, index) => {
      group.push(job);
      if (group.length === 6 || index === filteredJobs.length - 1) {
        groupHolder.push(group);
        group = [];
      }
    });
    setListingGroup(groupHolder);
    setSelectedListingGroup(groupHolder[0] || []);
  }, [filteredJobs]);

  // Update selected group when the index changes.
  useEffect(() => {
    setSelectedListingGroup(listingGroup[selectedListingGroupIndex] || []);
  }, [selectedListingGroupIndex, listingGroup]);

  // Pagination functions.
  const goNext = () => {
    if (selectedListingGroupIndex + 1 >= listingGroup.length) return;
    setSelectedListingGroupIndex(selectedListingGroupIndex + 1);
  };

  const goBack = () => {
    if (selectedListingGroupIndex - 1 < 0) return;
    setSelectedListingGroupIndex(selectedListingGroupIndex - 1);
  };

  // Optional: a function to reset filters
  const resetFilters = () => {
    setSearch('');
    setJobTypeInput('');
    setLocationInput('');
  };


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
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button
                width={'fit-content'}
                h={'60px'}
                borderRadius="0"
                borderTopRightRadius={'6px'}
                borderBottomRightRadius={'6px'}
                padding={'12px 24px'}
                textColor={'white'}
                bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)"
                boxShadow="2px 5px 5px 0px rgba(51, 51, 51, 0.15)"
                // Optionally, trigger filtering on button click (if not auto-filtering)
                onClick={() => {}}
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
                <select
                  style={{
                    height: '50px',
                    border: '1px solid #656060',
                    borderRadius: '6px',
                    paddingLeft: '0.5rem'
                  }}
                  value={jobTypeInput}
                  onChange={(e) => setJobTypeInput(e.target.value)}
                >
                  <option value="">Select Job Type</option>
                  {jobTypes.map((jt) => (
                    <option key={jt.id} value={jt.id}>
                      {jt.name}
                    </option>
                  ))}
                </select>
              </FormControl>
              <FormControl>
                <Text fontWeight={'500'}>
                  <FormLabel>Location</FormLabel>
                </Text>
                <Input
                  border={'1px solid #656060'}
                  h={'50px'}
                  placeholder="Location"
                  value={locationInput}

                  onChange={(e) =>{
                     setLocationInput(e.target.value)
                  }
                    }
                />
              </FormControl>
              <Button
                width={{ lg: 'fit-content', base: '100%' }}
                mt={{ lg: '2.5rem', base: '0.4rem' }}
                borderRadius="4px"
                padding={'12px 24px'}
                textColor={'white'}
                bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)"
                boxShadow="2px 5px 5px 0px rgba(51, 51, 51, 0.15)"
                // This button is optional since filtering happens as you change inputs.
                onClick={() => {}}
              >
                Filter
              </Button>
              <Button
                width={{ lg: 'fit-content', base: '100%' }}
                mt={{ lg: '2.5rem', base: '0.4rem' }}
                borderRadius="4px"
                padding={'12px 24px'}
                textColor={'white'}
                bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)"
                boxShadow="2px 5px 5px 0px rgba(51, 51, 51, 0.15)"
                onClick={resetFilters}
              >
                Reset
              </Button>
            </Flex>
          </Box>

          {/* Condition for Empty State */}
          {filteredJobs.length === 0 ? (
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
              <Box>
                <Text m={'2rem 0'}>Showing {filteredJobs.length} results</Text>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacingX="40px" spacingY="20px">
                  {selectedListingGroup.map((job, index) => (
                    <Box key={index} border={'1px solid rgba(0, 0, 0, 0.25)'}  borderRadius={'12px'} >
                      <Box p={'3rem 1rem'} borderBottom={'1px dotted rgba(136, 136, 136, 0.80)'}>
                        <Flex gap={'3rem'} mt={'1rem'} mb={'1rem'}>
                          <Box>
                            <Image width={'70px'} height={'70px'} src={job.icon || "companyImage.png"} alt={job.title} />
                          </Box>
                          <Box>
                            <Heading fontWeight={'600'} fontSize={'27px'}>
                              {job.title}
                            </Heading>
                            <Flex alignItems={'center'}>
                              <IoLocationOutline fontSize={'32px'} />
                              <Text fontWeight={'300'} fontSize={'15px'}>
                                {job.location}
                              </Text>
                            </Flex>
                          </Box>
                        </Flex>
                        <Wrap spacing={2} gap={'2rem'}>
                          {job.job_type.map((type: JobTypeInterface, index: number) => (
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
                    {listingGroup.map((group, index) => (
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
