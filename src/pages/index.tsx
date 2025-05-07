import { Box ,Flex,Heading,Text,Button,Image,} from "@chakra-ui/react";
import ServiceComponent from "@/component/servicesComponent";
import PartnersSection from "@/component/patternsSection";
import { useRouter } from "next/router";
import HeaderAndFooter from "@/component/layout/HeaderAndFooter";
import VideoSlider from "@/component/videoSlider";





export default function Home()  {
  const router=useRouter()
  // Replace these with your actual image paths
  

  return (
    <HeaderAndFooter>
 
    <VideoSlider />

    <Box 
      py={16}
      backgroundImage="url('/bg-pattern.svg')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      position="relative"
      maxWidth={'2000px'} bg={''}  mx={'auto'} 
      padding={{lg:'1.5rem 5rem',md:'1.5rem 2rem',sm:'1rem',base:'1rem'}}
   
    >
        <Flex direction={{ base: 'column', lg: 'row' }} alignItems="center" justifyContent="space-between">
          <Box maxW={{ base: '100%', lg: '50%' }} pr={{ base: 0, lg: 8 }}>
            <Heading as="h2" fontSize="2xl" fontWeight="600" color="gray.800" mb={4} width={"fit-content"}>
              ABOUT US
            <Box h="3px" fontSize={'28px'} mt={'1.5rem'} borderRadius={'12px'} w="100%" bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)"></Box>
            </Heading>
            
            
            <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.700" mb={6}>
              Innovative Solutions for the Future of Oil & Gas
            </Heading>
            
            <Text fontSize="md" color="gray.600" mb={6} lineHeight="tall">
              Codes and Cogs is a tech and oilfield services company at the forefront of 
              innovation in the energy sector. We leverage advanced computing capabilities 
              to provide cutting-edge solutions and are also dedicated to developing local talent.
            </Text>
            
            <Text fontSize="md" color="gray.600" mb={8} lineHeight="tall">
              At Codes and Cogs we are committed to driving innovation, sustainability, 
              and excellence in energy services and workforce development.
            </Text>
            <Button
              onClick={() => router.push("/about")}
              bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)"
              color="white"
              boxShadow="2px 5px 5px rgba(0,0,0,0.15)"
              borderRadius="4px"
              px="24px"
              py="12px"
              _hover={{ bg: "#2E3192" }}
            >
       
              Learn More
            </Button>
          </Box>
          
          <Box maxW={{ base: '100%', lg: '50%' }}>
            <Image
              src="/oil-pump.svg" 
              alt="Oil pump machinery"
              borderRadius="md"
              w="full"
            />
          </Box>
        </Flex>
    </Box>

    <Flex flexDir={'column'}  maxWidth={'2000px'} bg={''}  mx={'auto'} textColor={''}  padding={{lg:'1.5rem 5rem',md:'1.5rem 2rem',sm:'1rem',base:'1rem'}}>
  
        <Heading fontWeight={'600'} fontSize={'28px'} width={'fit-content'} >
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

            <Flex
  w="100%"
  flexDir={{ base: "row", lg: "column" }}
  overflowX={{ base: "auto", lg: "hidden" }}
  // optional: hide scrollbar on webkit
  sx={{
    "&::-webkit-scrollbar": { display: "none" },
    msOverflowStyle: "none",
    scrollbarWidth: "none",
  }}
>
  {/* Slide 1 */}
  <Flex
    flex="0 0 auto"           // prevent shrinking
    w={{ base: "90vw", lg: "100%" }}
    mt={{ base: "0", lg: "0" }}
    flexDir={{ base: "column-reverse", md: "row" }}
    alignItems="center"
    px={4}
    py={{ base: 4, lg: 8 }}
    gap={'3rem'}
  >
    <Box w={{ base: "100%", lg: "50%" }}>
      <Heading
        lineHeight="40px"
        fontWeight="500"
        fontSize={{ base: "20px", md: "30px", lg: "40px" }}
      >
        GLOBAL MANPOWER <br />
        OUTSOURCING
      </Heading>
      <Box my="1rem" w={{ base: "100%", lg: "70%" }}>
        <Text>
        We specialize in outsourcing skilled manpower, connecting experienced oil and gas consultants with international projects tailored to their expertise.
        </Text>
      </Box>
      <Button
        onClick={() => router.push("/about")}
        bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)"
        color="white"
        boxShadow="2px 5px 5px rgba(0,0,0,0.15)"
        borderRadius="4px"
        px="24px"
        py="12px"
        _hover={{ bg: "#2E3192" }}
      >
        Our Talent Hub
      </Button>
    </Box>
    <Box
      w={{ base: "100%", lg: "50%" }}
      display="flex"
      justifyContent="flex-end"
    >
      <Image alt="Media" src="DISCOVER1.svg" />
    </Box>
  </Flex>

  {/* Slide 2 */}
  <Flex
    flex="0 0 auto"
    w={{ base: "80vw", lg: "100%" }}
    mt={{ base: "2rem", lg: "0" }}
    flexDir={{ base: "column-reverse", md: "row-reverse" }}
    alignItems="center"
    px={4}
    py={{ base: 4, lg: 8 }}
    gap={'3rem'}
  >
    <Box w={{ base: "100%", lg: "50%" }}>
      <Heading
        lineHeight="40px"
        fontWeight="500"
        fontSize={{ base: "20px", md: "30px", lg: "40px" }}
      >
       UPCOMING CERTIFICATION TRAINING
      </Heading>
      <Box my="1rem" w={{ base: "100%", lg: "80%" }}>
        <Text>
        Cohort 1 of our 2025 certification program is drawing close. This time, the program is curated to cover comprehensive and hands-on trainings  on slickline operations, HSE, IWCF, BHP Well Testing, and Data Acquisition. 
        </Text>
      </Box>
      <Button
        onClick={() => router.push("/training")}
        bg="linear-gradient(90deg, #2E3192 0%, #1C55E0 100%)"
        color="white"
        boxShadow="2px 5px 5px rgba(0,0,0,0.15)"
        borderRadius="4px"
        px="24px"
        py="12px"
        _hover={{ bg: "#2E3192" }}
      >
        Explore Details
      </Button>
    </Box>
    <Box
      w={{ base: "100%", lg: "50%" }}
      display="flex"
      justifyContent="flex-start"
    >
      <Image alt="Media" src="DISCOVER2.svg" />
    </Box>
  </Flex>
</Flex>                                                                    
            
    
    </Flex>


    <Flex flexDir={'column'}  maxWidth={'2000px'} bg={''}  mx={'auto'} textColor={''}  padding={{lg:'1.5rem 5rem',md:'1.5rem 2rem',sm:'1rem',base:'1rem'}}>        
        <PartnersSection />
    </Flex>

    </HeaderAndFooter>
  );
}
