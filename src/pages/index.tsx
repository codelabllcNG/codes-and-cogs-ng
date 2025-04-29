import { Box ,Flex,Heading,Text,Button,Image,SimpleGrid,Icon,InputGroup,InputRightElement,IconButton,Input} from "@chakra-ui/react";
import ServiceComponent from "@/component/servicesComponent";
import PartnersSection from "@/component/patternsSection";
import CertificationGrid from "@/component/cerifications";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import TalentExplorer from "@/component/talents";
import { FaLightbulb } from "react-icons/fa";
import HowItWorks from "@/component/howItWorks";
import { useRouter } from "next/router";
import CompanySlideText from "@/component/companySlideText";
import HeaderAndFooter from "@/component/layout/HeaderAndFooter";
import { GetServerSideProps } from "next";
import { TalentInterface, TalentStoreInterface } from "@/component/Interface/talents";
import { useTalentsStore } from '@/store/talentStore';

interface HomepageProp{
  topTalents : TalentInterface[]
}

export const getServerSideProps : GetServerSideProps<HomepageProp> = async () => {
   
try {
  const topTalentsDataRes = await fetch('https://api.codesandcogs.com/oilandgas/api/codesandcogs/v1/talents?hero=true')
  const topTalentsData = await topTalentsDataRes.json();
  const topTalents = topTalentsData?.talents

    return{
      props :{
       topTalents,
      }
    }
} catch (error) {
  if(error){}
  return{
    props:{
      topTalents: []
    }
  }

}

  
}

export default function Home({topTalents}:HomepageProp)  {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(1);
  const [search,setSearch] =useState('')
  const router=useRouter()
  const editSelectedTalent = useTalentsStore((state: TalentStoreInterface) => state.editSelectedTalent);

  const viewProfile = (data: TalentInterface) => {
    editSelectedTalent(data);
    router.push(`/talents/bio`);
  };

  
    
  // Replace these with your actual image paths


  const handleSearch = function(data:string){
     if(!data) return
     router.push(`/talents?search=${data}`)
  }
  

  return (
    <HeaderAndFooter>
 
 {/* SECTION 1*/}
      <Flex 
        backgroundImage="linear-gradient(203deg, #9699FF -1.76%, #2E3192 2.84%, #1F2264 48.47%, #0E0F2C 98.54%)" 
        maxWidth={'2000px'} 
        alignItems={'center'} 
        mx={'auto'} 
        padding={{
          base: '2rem 1rem',
          sm: '2rem 1.5rem',
          md: '3rem 2rem',
          lg: '5.8rem 5rem'
        }}
        flexDir={'column'}
        overflowX={'hidden'}
      >
        <Flex 
          flexDir={{
            base: 'column',
            md: 'row'
          }} 
          w={'100%'}
          gap={{ base: 8, md: 0 }}
        >
          {/* Left Content */}
          <Box 
            color="white" 
            flex={1} 
            pr={{ md: 8 }} 
            w={{ base: '100%', md: '50%' }}
          >
            <Heading fontWeight={'500'} lineHeight={'normal'}>
              Elevate Your <br />
                <Heading 
                          as="span"
                          textShadow=" 2.423px 4.845px 8.075px rgba(201, 203, 255, 0.55)"  // Dark shadow for white text
                          color="white"
                          fontWeight={'500'}
                          mr={3}
                          >
                          Business 
                    </Heading>
                          with the Top 1% <br />Oil & Gas Talents in Nigeria
            </Heading>

            <Flex 
              m={{ base: '1.5rem 0', md: '2rem 0' }} 
              borderRadius="48px" 
              bg="#4C4FB0" 
              p="0.4rem"
              flexDirection={{
                base: 'column',
                sm: 'row'
              }}
              gap={2}
              display={{lg:'flex',base:'none'}}
            >
              {[
                {text:'Hire a Talent',url:'/talents'},
                {text:'Lite Your Opening',url:'/openings'},
                {text:'Work With Us',url:'/contact'}].map((item, index) => (
                <Box 
                  key={item.text}
                  borderRadius="48px" 
                  p={3} 
                  fontWeight="500" 
                  color={index === 0 ? '#1C55E0' : 'white'}
                  bg={index === 0 ? 'white' : 'transparent'}
                  flex={1}
                  textAlign="center"
                  whiteSpace="nowrap"
                  cursor={'pointer'}
                  _hover={{
                    background:'white',
                    color: '#1C55E0'
                  }}
                  onClick={()=>router.push(item.url)}
                >
                  {item.text}
                </Box>
              ))}
            </Flex>

            <Flex position="relative">
            <InputGroup mt={'2rem'} w="full" boxShadow="md">
              <Input
                placeholder="Search skills/services..."
                bg="white"
                borderRadius="md"
                color="black"
                onChange={(e) => setSearch(e.target.value)}
                p={{ base: '1rem', md: '1.5rem 1rem' }}
                pr="4.5rem" // Add padding-right to make space for the button
                _placeholder={{ 
                  color: 'gray.500',
                  fontSize: { base: '14px', sm: '16px' }
                }}
              />
              <InputRightElement bg={'#2E3192'} borderRadius={'4px'} width="4.5rem" height="full">
                <IconButton
                  aria-label="Search"
                  icon={<FaSearch />}
                  variant="solid" // Changed from "ghost" for better visibility
                  color="white"
                  bg="#2E3192"
                  h="90%" // Set specific height relative to parent
                  w="90%" // Set specific width
                  _hover={{ bg: 'gray.100', color: '#2E3192' }}
                  onClick={() => handleSearch(search)}
                />
  </InputRightElement>
            </InputGroup>
            </Flex>
          </Box>

          {/* Right Content - Image Gallery */}
          <Box 
            w={{ base: '100%', md: '50%' }}
            position="relative" 
            minH={{ base: '300px', md: '400px' }}
            mt={{ base: 8, md: 0 }}
          >
            {topTalents.map((topTalent, index) => (
              <Box
                key={index}
                position="absolute"
                right={{
                  base: `${index * 25}%`,
                  md: `${index * 20}%`
                }}
                top="50%"
                transform="translateY(-50%)"
                w={{ base: '50%', md: '40%' }}
                h={{
                  base: hoveredIndex === index ? '260px' : '220px',
                  md: hoveredIndex === index ? '380px' : '340px'
                }}
                transition="all 0.3s ease"
                zIndex={hoveredIndex === index ? 3 : 1}
                onMouseEnter={() => setHoveredIndex(index)}
                cursor="pointer"
              >
                <Box
                  as="img"
                  src={topTalent?.image}
                  alt={`Image ${index + 1}`}
                  w="full"
                  h="full"
                  objectFit="cover"
                  rounded="xl"
                  shadow="xl"
                  transition="all 0.3s ease"
                  transform={hoveredIndex === index ? 'scale(1.05)' : 'scale(0.9)'}
                />
                <Box bg={'linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.00) 100%);'} pos={'absolute'} bottom={'0'} left={'0'} w={'100%'} h={'50%'} ></Box>
                <Box
                  position="absolute"
                  bottom="15px"
                  left="15px"
                  color="white"
                  px={2}
                  py={1}
                  rounded="md"
                  fontSize={{ base: 'xs', sm: 'sm' }}
                  onClick={()=>viewProfile(topTalent)}
                >
                  <Heading fontSize={{ base: '14px', md: '18px' }} fontWeight="500">
                    {topTalent?.name}
                  </Heading>
                  <Text fontSize={{ base: '12px', md: '16px' }}>
                     {topTalent?.expertises[0].name}
                  </Text>
                </Box>
              </Box>
            ))}
          </Box>
        </Flex>
     <CompanySlideText />
      </Flex>
 {/* Section 1 */}

     
      <Flex  maxWidth={'2000px'} alignItems={'center'}  bg={''}  mx={'auto'} textColor={''}  padding={{lg:'1.5rem 5rem',md:'1.5rem 2rem',sm:'1rem',base:'1rem'}}>
      <Box as="section" py={8} w={'100%'} textAlign="center">
      <Heading mb={8} fontSize="2xl">
        Why our Talents are the Top 1%
      </Heading>
      <Text mb={4}>Codes and Cogs is committed to driving innovation, sustainability, and excellence, and that translates to our workforce development.</Text>

      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        spacing={6}
        mx="auto"
        px={4}
      >
        {/* Card 1 */}
        <Box
          background="#2E3192"
          color="white"
          p={6}
          borderRadius="md"
          textAlign="center"
        >
          <Icon as={FaLightbulb} w={8} h={8} mb={4} />
          <Heading fontWeight={'500'} fontSize="xl" mb={2}>
            Rigorous Recruitment
          </Heading>
          <Text fontSize={'15px'}>
            To get listed on this platform, candidates undertake thorough
            screenings and checks.
          </Text>
        </Box>

        {/* Card 2 */}
        <Box
          background="#2E3192"
          color="white"
          p={6}
          borderRadius="md"
          textAlign="center"
        >
          <Icon as={FaLightbulb} w={8} h={8} mb={4} />
          <Heading fontWeight={'500'} fontSize="xl" mb={2}>
            Experienced Professionals
          </Heading>
          <Text fontSize={'15px'}>
            In our talent pool, we have seasoned experts with proven track
            records.
          </Text>
        </Box>

        {/* Card 3 */}
        <Box
          background="#2E3192"
          color="white"
          p={6}
          borderRadius="md"
          textAlign="center"
        >
          <Icon as={FaLightbulb} w={8} h={8} mb={4} />
          <Heading fontWeight={'500'} fontSize="xl" mb={2}>
            Certified
          </Heading>
          <Text fontSize={'15px'}>
            As a training body, our talents have undertaken our certification
            programs.
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
      </Flex>

      <Flex  maxWidth={'2000px'} alignItems={'center'}  bg={''}  mx={'auto'} textColor={''}  padding={{lg:'1.5rem 5rem',md:'1.5rem 2rem',sm:'1rem',base:'1rem'}}>
         <TalentExplorer />
      </Flex>

     
      
        <Flex bg={'#EDF2FC'} maxWidth={'2000px'} alignItems={'center'}    mx={'auto'} textColor={''}  padding={{lg:'1.5rem 5rem',md:'1.5rem 2rem',sm:'1rem',base:'1rem'}}>
               <HowItWorks />
        </Flex>



        <Flex flexDir={'column'}  maxWidth={'2000px'} bg={''}  mx={'auto'} textColor={''}  padding={{lg:'1.5rem 5rem',md:'1.5rem 2rem',sm:'1rem',base:'1rem'}}>
      
            <Heading fontWeight={'500'} fontSize={'28px'} width={'fit-content'} >
              Our Services
              <Box h="3px" fontSize={'28px'} mt={'1.5rem'} borderRadius={'12px'} w="100%" bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)"></Box>
            </Heading>
            <Text m={'4rem 0'}>Codes and Cogs provides end-to-end solutions for oilfield operations, from well insights and AI-driven analysis to designing custom, cost-effective solutions tailored to unique field needs. We are also dedicated to developing local talent through comprehensive training in safety, oil and gas operations, and specialised roles.</Text>
            <ServiceComponent />

        </Flex>

        <Flex
          flexDir="column"
          maxWidth="2000px"
          bgImage="url('BACKGROUND.png')"
          bgSize="cover"        // Ensures the image covers the entire container.
          bgPosition="center"   // Centers the background image.
          bgRepeat="no-repeat"  // Prevents the background image from repeating.
          mx="auto"
          textColor="white"     // Change the text color if needed.
          padding={{ lg: "1.5rem 5rem", md: "1.5rem 2rem", sm: "1rem", base: "1rem" }}
          mt={'-8rem'}
        >
               <Heading mt={{base:'16rem',lg:'16rem'}} fontWeight={'500'} fontSize={'28px'} width={'fit-content'} >
                        Discover More
                        <Box h="3px" fontSize={'28px'} mt={'1.5rem'} borderRadius={'12px'} w="100%" bg="linear-gradient(90deg,rgb(242, 242, 248) 0%,rgb(242, 244, 247) 100%)"></Box>
               </Heading>


                <Flex  mt={'4rem'} flexDir={{ base:'column', sm:'column', md:'row',lg:'row'}} padding={{lg:'1rem 0'}} alignItems={'center'}>
                      <Box w={{base:'100%',sm:'100%',md:'100%',lg:'50%'}}>
                          <Heading lineHeight={'40px'} fontWeight={'500'} fontSize={{base:'20px',sm:'20px',md:'30px',lg:'40px'}} width={'fit-content'} >
                          EMPOWERING INNOVATION <br />IN OIL & GAS
                          </Heading>

                          
                          <Box m={'1rem 0'} w={{lg:'70%',base:'100%'}}>
                          <Text>Artificial Intelligence/Machine Learning capabilities are embedded in our well-testing procedures and other oilfield solutions. Codes and Cogs also unites industry professionals and offer comprehensive talent recruitment, and specialized training.</Text>
                          </Box>

                          <Button onClick={()=>router.push('/about')} width={'fit-content'} m={'3rem 0'} borderRadius="4px" padding={'12px 24px'} textColor={'white'} bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)" boxShadow="2px 5px 5px 0px rgba(51, 51, 51, 0.15)"> About Us </Button>
                          
                      </Box>
                      <Box display={'flex'} justifyContent={'flex-end'} w={{base:'100%',sm:'100%',md:'100%',lg:'50%'}}>
                          <Image alt="Media" width={'fill'} src="DISCOVER1.svg"></Image>
                      </Box>
                </Flex>

                <Flex mt={{base:'2rem',sm:'2rem'}} flexDir={{ base:'column', sm:'column', md:'row',lg:'row-reverse'}} padding={{lg:'1rem 0'}} alignItems={'center'}>
                      <Flex w={{base:'100%',sm:'100%',md:'100%',lg:'50%'}}>
                        <Box  ml={'auto'} w={{lg:'80%',sm:'100%'}}>
                          <Heading lineHeight={'40px'} fontWeight={'500'} fontSize={{base:'20px',sm:'20px',md:'30px',lg:'40px'}} width={'fit-content'} >
                            JOB FAIR COMING SOON
                          </Heading>

                          
                          <Box mt={'2rem'} >
                               <Text>The job fair would serve as the launch for the Codes and Cogs Talent platform. Top exploration and production, and oilfield services companies would also be present, and top talents would get a chance to land leading opportunities in Nigeria oil and gas industries.</Text>
                          </Box>

                          <Button onClick={()=>router.push('/trainning')} width={'fit-content'} m={'3rem 0'} borderRadius="4px" padding={'12px 24px'} textColor={'white'} bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)" boxShadow="2px 5px 5px 0px rgba(51, 51, 51, 0.15)"> Explore Details </Button>
                        </Box>
                      </Flex>
                      <Box display={'flex'} width={"full"} justifyContent={'flex-start'} w={{base:'100%',sm:'100%',md:'100%',lg:'50%'}}>
                          <Image alt="Media" src="DISCOVER2.svg"></Image>
                      </Box>
                </Flex>

                
        
       </Flex>

       <Flex flexDir={'column'}  maxWidth={'2000px'} bg={''}  mx={'auto'} textColor={''}  padding={{lg:'1.5rem 5rem',md:'1.5rem 2rem',sm:'1rem',base:'1rem'}}>    
       <CertificationGrid />
       </Flex>


      <Flex flexDir={'column'}  maxWidth={'2000px'} bg={''}  mx={'auto'} textColor={''}  padding={{lg:'1.5rem 5rem',md:'1.5rem 2rem',sm:'1rem',base:'1rem'}}>        
      <PartnersSection />
      </Flex>

      </HeaderAndFooter>
  );
}
